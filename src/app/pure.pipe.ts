import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  standalone: true
})
export class PurePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): number[] {
    return value.filter(s => s % 2 === 0);
  }

}
