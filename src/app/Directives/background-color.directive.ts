import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColorDirective implements OnInit {
  @Input('appBackgroundColor') temperature: number = 0;
  constructor(private ele: ElementRef) {}
  ngOnInit(): void {
    this.setBackground();
  }
  private setBackground() {
    if (this.temperature < 10) {
      this.ele.nativeElement.style.backgroundColor = 'blue';
    } else if (this.temperature >= 10 && this.temperature <= 25) {
      this.ele.nativeElement.style.backgroundColor = 'green';
    } else {
      this.ele.nativeElement.style.backgroundColor = 'red';
    }
  }
}
