import {Dispatch} from 'redux';
import axios from 'axios';
import {TodoAction, TodoActionTypes} from '../../types/todo';

export const fetchTodos = (limit = 4) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_limit: limit}
            })
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 400)
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'An error occurred while loading the to-do list'
            })
        }
    }
}