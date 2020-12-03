import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  readonly title = "Update User";

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountsService
  ) { }

  ngOnInit(): void {
    const routeData: Data = this.route.snapshot.data;
    this.user = routeData.data.user as User;
  }

  updateUser() {
    this.accountService.updateUser(this.user)
      .subscribe(
        () => this.router.navigate(['/']),
        err => {}
      );
  }

}
