import {UserAction, UserActionTypes, UserState} from '../../types/user';

const initialState: UserState = {
    users: [],
    loadingUser: false,
    errorUser: null,
    limit: 4
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loadingUser: true, errorUser: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loadingUser: false, errorUser: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loadingUser: false, errorUser: action.payload, users: []}
        default:
            return state
    }
}