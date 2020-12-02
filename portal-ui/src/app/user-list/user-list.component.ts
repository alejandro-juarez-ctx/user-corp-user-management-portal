import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns = ["firstName", "lastName", "email", "actions"];

  users = [
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

  constructor() { }

  ngOnInit(): void {
  }

  update(id: number): void {
    const user = this.getUser(id);
    console.log(`Update: ` + user.firstName);
  }

  delete(id: number): void {
    const user = this.getUser(id);
    console.log(`Delete: ` + user.firstName);
  }

  private getUser(id: number): any {
    return Object.values(this.users).filter((x: any) => x.id === id)[0];
  }

}
