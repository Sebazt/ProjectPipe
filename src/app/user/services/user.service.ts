import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
  constructor(
    private httpClient: HttpClient
    ) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.ENDPOINT);

  }
}
