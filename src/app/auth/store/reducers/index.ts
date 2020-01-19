import * as fromUsers from './users.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface UsersState {
    users: fromUsers.UserState
}

export const reducers: ActionReducerMap<UsersState> = {
    users: fromUsers.reducer
};

// must be the same name of the property in forFeature()
export const getUsersState = createFeatureSelector<UsersState>('users');

// User state
export const getUserState = createSelector(getUsersState, (state: UsersState) => state.users);

export const getAllUsers = createSelector(getUserState, fromUsers.getUsers);
export const getUsersLoaded = createSelector(getUserState, fromUsers.getUsersLoaded);
export const getUsersLoading = createSelector(getUserState, fromUsers.getUsersLoading);


// Example of state tree
/*const state = {
    // name of property forFeature
    users: {
        users: {
            data: [],
            loaded: false,
            loading: false
        }
    }
}*/
