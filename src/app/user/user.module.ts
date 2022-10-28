import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { FirstNamePipe } from './pipes/first-name.pipe';
import { MoreThanFivePipe } from './pipes/more-than-five.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    FirstNamePipe,
    MoreThanFivePipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
