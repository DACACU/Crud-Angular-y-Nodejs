import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/users`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  saveGame(users: User) {
    return this.http.post(`${this.API_URI}/users`, users);
  }

  updateGame(id: string|number, updatedUser: User): Observable<User> {
    return this.http.put(`${this.API_URI}/users/${id}`, updatedUser);
  }

}
