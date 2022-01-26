import React from 'react';
import styles from './Board.module.scss';
import {ITodo} from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

interface BoardProps {
    tickets: ITodo[]
    handleChange: (item: ITodo) => void
}

const Board: React.FC<BoardProps> = ({tickets, handleChange}) => {

    return (
        <>
            <h1>Board</h1>
            <div className={styles.container}>
                <div className={styles.wrapperTicket}>
                    <h1>To do</h1>
                    {tickets.map((ticket) => {
                        if (ticket.status === 'Todo') {

                            return (
                                <TodoItem
                                    key={ticket.id}
                                    name={ticket.name}
                                    ticket={ticket}
                                    handleChange={handleChange}
                                    color={ticket.color}
                                />
                            )
                        }
                    })
                    }
                </div>
                <div className={styles.wrapperTicket}>
                    <h1>In progress</h1>
                    {tickets.map((ticket) => {
                        if (ticket.status === 'InProgress') {

                            return (
                                <TodoItem
                                    key={ticket.id}
                                    name={ticket.name}
                                    ticket={ticket}
                                    handleChange={handleChange}
                                    color={ticket.color}
                                />
                            )
                        }
                    })
                    }
                </div>
                <div className={styles.wrapperTicket}>
                    <h1>Done</h1>
                    {tickets.map((ticket) => {
                        if (ticket.status === 'Done') {

                            return (
                                <TodoItem
                                    key={ticket.id}
                                    name={ticket.name}
                                    ticket={ticket}
                                    handleChange={handleChange}
                                    color={ticket.color}
                                />
                            )
                        }
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Board;