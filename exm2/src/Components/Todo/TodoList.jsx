import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { deleteTodo, toggleTodo } from '../../Redux/action'

const TodoList = () => {

const {todos} = useSelector((state) => state);

const dispatch = useDispatch();

// console.log("Accessed: ", todos)

  return (
    <div>
        {
            todos.map((todo) =>(
                <p key={todo.id}>
                    <span>
                         {todo.title} {"--->"} {todo.status ? "Completed" : "Not Completed"}
                    </span>
                    <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </p>

                
            ))
        }
    </div>
  )
}

export default TodoList