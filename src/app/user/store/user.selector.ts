
import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const getUserState = (state: UserState) => state;

export const allUsers = createSelector(getUserState, (state: UserState) => {
    return state;
});