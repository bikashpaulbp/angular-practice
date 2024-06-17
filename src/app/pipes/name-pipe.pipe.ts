import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    return "Mr. " + value;
  }

}
