import { createReducer, on, Action } from '@ngrx/store';
import * as UserActions from './user.actions';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserState {

    data: [];
    error: HttpErrorResponse;
}

const initialState = {
    data: [],
}

const myReducer = createReducer(
    initialState,
    on(UserActions.GetUser, state => ({ ...state })),
    on(UserActions.GetUserSuccess, (state, { payload }) => ({
        data: payload,
        error: 'No Errors!'
    })),
    on(UserActions.GetUserFail, (state, { error }) => ({
        data: [],
        error: error,
    }))
);

export function reducer(state: UserState | undefined, action: Action) {
    return myReducer(state, action);
}