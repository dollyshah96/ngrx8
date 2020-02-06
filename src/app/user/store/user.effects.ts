import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { Injectable } from '@angular/core';
import { map, catchError, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.GetUser),
        switchMap(() => this.userService.getUsers()
            .pipe(
                map(users => UserActions.GetUserSuccess({ payload: users })),
                catchError(error => of(UserActions.GetUserFail({ error: error })))
            ))
    ));
}
