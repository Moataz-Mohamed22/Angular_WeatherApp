import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ FormsModule],
  selector: 'app-weather-list',
  styleUrl: './weather-list.component.css',
  templateUrl: './weather-list.component.html',
})
export class WeatherListComponent {
  constructor(private router: Router) {}

  navigateToWeather(temp: number) {
    this.router.navigate(['/weather'], { queryParams: { temp } });
  }
   weatherList: any[] = [
    { city: 'New York', temperature: 20 },
    { city: 'Cairo', temperature: 15 },
    { city: 'AL-Riyadh', temperature: 40 },
    { city: 'Moscow', temperature: 5 },
  ];
  cityName: string = '';
  filteredWeatherList: any[] = this.weatherList;
  filterWeather() {
    if (!this.cityName) {
       this.filteredWeatherList = this.weatherList;
    }
    this.filteredWeatherList = this.weatherList.filter(city => city.city.toLowerCase().includes(this.cityName.toLowerCase()));
  }
sortWeatherList() {
    this.filteredWeatherList.sort((a, b) => a.temperature - b.temperature);
  }
  sortWeatherListByCity() {
    this.filteredWeatherList.sort((a, b) => a.city.localeCompare(b.city));
  }
}
