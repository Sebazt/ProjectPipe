import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstName'
})
export class FirstNamePipe implements PipeTransform {

  transform(value: string): string {
    const firsName = value.split(' ');
    return firsName[0];
  }

}
