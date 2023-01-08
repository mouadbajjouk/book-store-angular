import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolformat'
})
export class BoolFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? 'Yes' : 'No';
  }

}
