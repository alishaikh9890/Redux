// action type

import { type } from "@testing-library/user-event/dist/type";

export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const RESET_COUNT = "RESET_COUNT";

// ADDING TODOS

export const ADD_TODO = "ADD_TODO";

export const TOGGLE_TODO = "TOGGLE_TODO";

export const DELETE_TODO = "DELETE_TODO";

// action creators

export const incCount = (data) =>({
    type: INC_COUNT,
    payload : data
})

export const decCount =(data) =>({
    type: DEC_COUNT,
    payload:data
})

export const resetCount = (data) =>({
     type: RESET_COUNT
})

export const addTodo = (payload) =>({
    type:ADD_TODO,
    payload
})

export const toggleTodo = (payload) =>({
    type:TOGGLE_TODO,
    payload
})

export const deleteTodo = (payload) =>({
    type:"DELETE_TODO",
    payload
})