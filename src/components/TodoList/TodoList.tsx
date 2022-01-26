import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import {ITodo} from '../../types/todo';

interface TodoListProps {
    tickets: ITodo[]
    handleChange: (item: ITodo) => void
}

const TodoList: React.FC<TodoListProps> = ({tickets, handleChange}) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.titleList}>Ticket List</h1>
            <div className={styles.wrapperList}>
                {tickets?.map(ticket => (
                    <TodoItem
                        key={ticket.id}
                        name={ticket.name}
                        ticket={ticket}
                        status={ticket.status}
                        handleChange={handleChange}
                        color={ticket.color}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList;