import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable()
export class AccountsService {
  private readonly accountsApi = environment.resources.accounts_api;

  constructor(
    private http: HttpClient
  ) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get<any>(this.accountsApi);
  }

  addUser(userData: User): Observable<any> {
    return this.http.post<any>(this.accountsApi, userData);
  }

  deleteUser(id: number): Observable<any> {
    const requestUrl = `${this.accountsApi}/${id}`;
    return this.http.delete<any>(requestUrl);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(this.accountsApi, user);
  }

  getUserData(id: number): Observable<User> {
    const requestUrl = `${this.accountsApi}/${id}`;
    return this.http.get<any>(requestUrl);
  }
}
