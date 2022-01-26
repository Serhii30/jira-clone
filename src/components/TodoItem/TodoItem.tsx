import React from 'react';
import {ITodo} from '../../types/todo';
import Avatar from '../Avatar/Avatar';
import styles from './TodoItem.module.scss';

interface TodoItemProps {
    ticket: ITodo
    name: string
    status?: string
    handleChange: (item: ITodo) => void
    color: string
}


const TodoItem: React.FC<TodoItemProps> = ({
                                               ticket,
                                               name,
                                               status,
                                               handleChange,
                                               color
                                           }) => {

    return (
        <div className={styles.container} onClick={() => handleChange(ticket)}>
            <Avatar name={name} color={color}/>
            <div className={styles.wrapperTicket}>
                {ticket.title}
                <div className={styles.ticketStatus}>
                    {status}
                </div>
            </div>
        </div>
    )
}

export default TodoItem;