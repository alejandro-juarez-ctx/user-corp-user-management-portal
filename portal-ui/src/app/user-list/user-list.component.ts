import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  readonly columns = ["firstName", "lastName", "email", "actions"];
  readonly title = "User List";

  private userList: User[] = []

  users: MatTableDataSource<User>;

  constructor(
    private accountsService: AccountsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateUserList();
  }

  updateUserList(): void {
    this.accountsService.fetchUsers()
    .subscribe(
      users => this.userList = users,
      err => {},
      () => this.updateTableDataSource()
    );
  }

  delete(id: number): void {
    this.accountsService.deleteUser(id)
      .subscribe(
        () => this.updateUserList(),
        err => {},
        () => this.updateTableDataSource()
      );
  }

  update(id: number): void {
    const properties = {
      queryParams: {
        id: id
      }
    };

    this.router.navigate(['/update'], properties);
  }

  private updateTableDataSource() {
    this.users = new MatTableDataSource(this.userList);
  }
}
