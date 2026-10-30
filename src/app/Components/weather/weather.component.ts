import { Component, OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../../Directives/background-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TemperatureConversionPipe } from '../../pipes/temperature-conversion-pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [BackgroundColorDirective, TemperatureConversionPipe ,CommonModule],
  selector: 'app-weather',
  styleUrl: './weather.component.css',
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnInit {
  temperature: number = 0;
  unit: string = 'C';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const tempParam = params['temp'];
      if (tempParam) {
        this.temperature = +tempParam;
      }
    });
  }
  toggleUnit() {
    if (this.unit === 'C') {
      this.unit = 'F';
    } else {
      this.unit = 'C';
    }
  }
}
