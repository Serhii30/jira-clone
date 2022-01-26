import React, {useEffect, useState} from 'react';
import TodoList from './components/TodoList/TodoList';
import Board from './components/Board/Board';
import {useTypedSelector} from './hooks/useTypedSelector';
import {useActions} from './hooks/useActions';
import {ITodo} from './types/todo';


const App: React.FC = () => {

    const [tickets, setTickets] = useState([])
    const {todos, limit, error, loading} = useTypedSelector(state => state.todo)
    const {users, errorUser, loadingUser} = useTypedSelector(state => state.user)
    const {fetchTodos, fetchUsers} = useActions()

    useEffect(() => {
        fetchTodos(limit)
        fetchUsers()
    }, [])

    useEffect(() => {
        const arrayTicket = todos?.map((ticket: ITodo) => {
            const user = users.find(el => el.id === ticket.id)
            if (user.name) {
                ticket.name = user.name
            }
            if (ticket.title) {
                ticket.status = 'Todo'
            }
            const randomColor = () => '#' + Math.random().toString(16).substr(-6)
            ticket.color = randomColor()

            return ticket
        })
        setTickets(arrayTicket)
    }, [todos])

    if (loading || loadingUser) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    if (errorUser) return <h1>{errorUser}</h1>


    const handleChange = (item: ITodo) => {

        const dataTickets = tickets?.map((ticketsItem: ITodo) => {
            if (ticketsItem.id === item.id) {
                if (ticketsItem.status === 'Todo') {
                    ticketsItem.status = 'InProgress'

                    return ticketsItem
                }
                if (ticketsItem.status === 'InProgress') {
                    ticketsItem.status = 'Done'

                    return ticketsItem
                }
            }

            return ticketsItem
        }).sort((a, b) => a.status <= b.status ? 1 : -1)
        setTickets(dataTickets)
    }

    return (
        <div>
            <TodoList tickets={tickets} handleChange={handleChange}/>
            <Board tickets={tickets} handleChange={handleChange}/>
        </div>
    )
}

export default App;


