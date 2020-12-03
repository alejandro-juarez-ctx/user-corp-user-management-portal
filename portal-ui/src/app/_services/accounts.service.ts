import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Injectable()
export class AccountsService {

  users: User[] = [];
  private id = 0;

  constructor() {
    this.fetchUsers()
      .subscribe(
        users => {
          this.users = users;
        }
      )
  }

  private fetchUsers(): Observable<User[]> {
    return of([]);
  }

  private getId(): number {
    return this.id++;
  }

  get userList(): User[] {
    return this.users;
  }

  addUser(userData: User): Observable<any> {
    userData.id = this.getId();
    this.users.push(userData);
    return of("Ok");
  }

  deleteUser(id: number): Observable<any> {
    this.users.splice(this.getUserIndex(id), 1);
    return of("Ok");
  }

  updateUser(user: User): Observable<any> {
    return of("");
  }

  getUserData(id: number): Observable<User> {
    return of(this.users.filter(user => user.id == id)[0]);
  }

  private getUserIndex(id: number): number {
    return Object.entries(this.users)
      .filter((entry: any) => entry[1].id === id)
      .map((entry: any) => parseInt(entry[0]))[0];
  }
}
