import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, addTodo, deleteTodo as deleteOneTodo } from '../../actions/todoActions';

const Tasks = () => {
    let tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const addNewTodo = () => {
        dispatch(addTodo())
    }

    const deleteTodo = (id) => {
        dispatch(deleteOneTodo(id))
    }

    return (
        <div className="container">
            <div className="tasks-container">
            {
                tasks && tasks.displayTodos && Array.isArray(tasks.displayTodos) && tasks.displayTodos.length ? 
                    tasks.displayTodos.map((todo) => 
                        <div className="todo" key={todo.id}>
                            <p>{todo.id}</p>
                            <p>{todo.title}</p>
                            <p>{todo.completed}</p>
                            <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    )
                : null
            } 
            {
                tasks && tasks.loading && <p>Loading...</p>
            }
                <button className="add" onClick={(e) => addNewTodo()}>Add Task</button>
            </div>
        </div>
    )
}

export default Tasks;