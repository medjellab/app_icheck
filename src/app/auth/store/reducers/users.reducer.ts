import * as fromUsers from '../actions/users.action';
import { User } from '../../models/user.model';
import { Statement } from '@angular/compiler';

export interface UserState {
    data: User[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: UserState = {
    data: [{
        nomComplet: 'Jellab Mohammed'
    }],
    loaded: false,
    loading: false
}

export function reducer(
    state = initialState,
    action: fromUsers.UsersAction
): UserState {
    switch (action.type) {
        case fromUsers.LOAD_USERS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromUsers.LOAD_USERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
        case fromUsers.LOAD_USERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true
            };
        }
    }

    return state;
}

export const getUsersLoading = (state: UserState) => state.loading;
export const getUsersLoaded = (state: UserState) => state.loaded;
export const getUsers = (state: UserState) => state.data;

