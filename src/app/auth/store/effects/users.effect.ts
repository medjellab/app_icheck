import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as usersActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromServices from '../../services';
import { User } from './../../models/user.model';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor(private actions$: Actions,
        private authService: fromServices.AuthService) { }

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType(usersActions.LOAD_USERS),
        switchMap(() => {
            return this.authService.getUsers()
                .pipe(
                    map(users => new usersActions.LoadUsersSuccess(users)),
                    catchError(error => of(new usersActions.LoadUsersFail(error)))
                );
        }));
}
