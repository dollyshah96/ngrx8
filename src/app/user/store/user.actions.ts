import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const GetUser = createAction('[Get] User');
export const GetUserSuccess = createAction('[Get] User Success', props<{ payload: [] }>());
export const GetUserFail = createAction('[Get] User Fail', props<{ error: HttpErrorResponse }>());

export const PostUser = createAction(
    '[Post] User',
    props<{ payload: [] }>()
);

export const PostUserSuccess = createAction(
    '[Post] User',
    props<{ payload: [] }>()
);
export const PostUserFail = createAction(
    '[Post] User',
    props<{ payload: [] }>()
);