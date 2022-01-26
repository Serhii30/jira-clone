export interface ITodo {
    title: string
    id: number
    name: string
    status: string
    color: string
}

export interface TodoState {
    todos: ITodo[]
    loading: boolean
    error: null | string
    limit: number
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_STATUS = 'SET_TODO_STATUS',
    TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}

export type TodoAction =
    FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction


