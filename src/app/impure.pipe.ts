import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  standalone: true,
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): number[] {
    return value.filter(s => s % 2 === 0);
  }

}
