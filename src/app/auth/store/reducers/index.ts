import * as fromUsers from './users.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface UsersState {
    users: fromUsers.UserState
}

export const reducers: ActionReducerMap<UsersState> = {
    users: fromUsers.reducer
};