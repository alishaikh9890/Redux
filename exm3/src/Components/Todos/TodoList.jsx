import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllLatestTodosFailure, getAllLatestTodosLoading, getAllLatestTodosSuccess } from '../../Redux/Todos/action';

const TodoList = () => {

const {todos, isLoading,isError} = useSelector((state) => state.todos);
const dispatch = useDispatch();

// console.log("Accessed: ", todos)

useEffect(() =>{
    const fetchData = async () =>{
        try{
            dispatch(getAllLatestTodosLoading)
            let res  = await fetch(`http://localhost:8080/todos`);
            let data = await res.json();
            dispatch(getAllLatestTodosSuccess(data))
        }
        catch(error){
            console.log(error);
            dispatch(getAllLatestTodosFailure())
        }
    }
    fetchData()
},[dispatch])

if(isLoading){
    return <h1>Loading...</h1>
}
if(isError){
    return <h1>Something went wrong...</h1>
}

  return (
    <div>
        {
            todos.map((todo) =>(
                <p key={todo.id}>
                    <span>
                         {todo.title} {"--->"} {todo.status ? "Completed" : "Not Completed"}
                    </span>
                 </p>

                
            ))
        }
    </div>
  )
}

export default TodoList