import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConversion',
  standalone: true,
})
export class TemperatureConversionPipe implements PipeTransform {
  transform(value: number, unit: string): number {
    if (typeof value !== 'number' || isNaN(value)) {
      return 0;
    }

    if (unit === 'C') {
      return (value - 32) * (5 / 9);
    }

    if (unit === 'F') {
      return value;
    }

    return value;
  }
}
