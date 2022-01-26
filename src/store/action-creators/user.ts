import {UserAction, UserActionTypes} from '../../types/user';
import {Dispatch} from 'redux';
import axios from 'axios';

export const fetchUsers = (limit = 4) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                params: {_limit: limit}
            })
            setTimeout(() => {
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 200)
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'An error occurred while loading the users list'
            })
        }
    }
}