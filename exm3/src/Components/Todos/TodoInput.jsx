import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllLatestTodosFailure, getAllLatestTodosSuccess, getAllLatestTodosLoading } from '../../Redux/Todos/action';


const TodoInput = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = React.useState("");

    const fetchData = async () =>{
        try{
            dispatch(getAllLatestTodosLoading())
            let res  = await fetch(`http://localhost:8080/todos`);
            let data = await res.json();
            dispatch(getAllLatestTodosSuccess(data))
        }
        catch(error){
            console.log(error);
            dispatch(getAllLatestTodosFailure())
        }
    }

    const handleAdd = () =>{
        const payload = {
            title: inputValue,
            status:false,
        };

    fetch(`http://localhost:8080/todos`, {
        method : "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then((res) => res.json())
    .then((res ) => console.log(res))

    fetchData();
    }

  return (
    <div>
        <input type="text" placeholder='Add todo' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />

        <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default TodoInput