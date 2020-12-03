import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  readonly title = "Add User"

  constructor(
    private accountsService: AccountsService,
    private router: Router
  ) { }

  createUser(user: User) {
    this.accountsService.addUser(user)
      .subscribe(
        () => this.router.navigate(['/']),
        err => {}
      );
  }

}
