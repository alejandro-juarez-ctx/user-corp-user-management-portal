import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../_models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  columns = ["firstName", "lastName", "email", "actions"];

  userList: User[] = [
    {
      id: 0,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com'
    },
    {
      id: 1,
      firstName: 'Jane',
      lastName: 'Doeson',
      email: 'jane@doeson.com'
    }
  ]

  users: MatTableDataSource<User>;

  constructor() { }

  ngOnInit(): void {
    this.updateTableDataSource();
  }

  update(id: number): void {
    const user = this.getUser(id);
    console.log(`Update: ` + user.firstName);
  }

  delete(id: number): void {
    this.userList.splice(this.getUserIndex(id), 1);
    this.updateTableDataSource();
  }

  private updateTableDataSource() {
    this.users = new MatTableDataSource(this.userList);
  }

  private getUser(id: number): User {
    return Object.values(this.userList).filter((x: any) => x.id === id)[0];
  }

  private getUserIndex(id: number): number {
    return Object.entries(this.userList)
      .filter((entry: any) => entry[1].id === id)
      .map((entry: any) => parseInt(entry[0]))[0];
  }
}
