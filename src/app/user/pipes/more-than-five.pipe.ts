import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'moreThanFive',
  pure: true
})
export class MoreThanFivePipe implements PipeTransform {

  transform(users: User[] | null): User[] {
    if(!users){
      return[]
    }
    return users.filter(user => user.id > 5);
  }

}
