import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Injectable()
export class AccountsService {

  users: User[] = [];

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

  get userList(): User[] {
    return this.users;
  }

  addUser(userData: User): Observable<any> {
    console.log(`Creating user with firstName: ${userData.firstName}`);
    userData.id = 5;
    this.users.push(userData);
    return of("Ok");
  }

  deleteUser(id: number): Observable<any> {
    console.log(`Deleting user with id: ${id}`);
    this.users.splice(this.getUserIndex(id), 1);
    return of("Ok");
  }

  updateUser(id: number): Observable<any> {
    console.log(`Updating user with id: ${id}`)
    return of("");
  }

  private getUserIndex(id: number): number {
    return Object.entries(this.users)
      .filter((entry: any) => entry[1].id === id)
      .map((entry: any) => parseInt(entry[0]))[0];
  }
}
