import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { User } from './models/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  users$ : Observable<User[]> | undefined;
  userControl:FormControl | undefined;

  constructor(
    private UserService:UserService
  ){}

  ngOnInit(): void {
      this.userControl = new FormControl<string>("");
      this.userControl.valueChanges

        .pipe(
          filter((control) => control.length > 2),
          debounceTime(2000),
          distinctUntilChanged()
        )

        .subscribe((control) => {
          console.log({ control });
        });
  }

  getUsers(){
    this.users$ = this.UserService.getUsers();
  }

  showUser(users: User[]){
    console.log(users);

  }

}
