import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountsService } from '../_services/accounts.service';
import { map } from 'rxjs/operators';

@Injectable()
export class UserUpdateResolver implements Resolve<any> {

    constructor(
        private accountsService: AccountsService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        let params = route.queryParams;

        const id = params.id;
        const routerResponse = {
            user: null
        };

        return this.accountsService.getUserData(id)
            .pipe(
                map(user => {
                    if (user === null || user === undefined) {
                        this.router.navigate(['/']);
                    }

                    routerResponse.user = user;
                    return routerResponse;
                })
            )
    }
}