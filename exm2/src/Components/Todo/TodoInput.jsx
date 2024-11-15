import React from 'react'
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid";

import { addTodo } from '../../Redux/action';

const TodoInput = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = React.useState("");

    const handleAdd = () =>{
        // dispacth ADD TODO action to store with certain payload

        const payload = {
            title: inputValue,
            status:false,
            id: uuid()
        }

        dispatch(addTodo(payload))
    }

  return (
    <>
        <input type="text" placeholder='Add todo' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />

        <button onClick={handleAdd}>Add Todo</button>
    </>
  )
}

export default TodoInput