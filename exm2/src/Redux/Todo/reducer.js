import {ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./action";

export const todoReducer = (store={todos:[]}, action) =>{
     switch(action.type){
       
        case ADD_TODO :
            return {
                ...store,
                todos:[ ...store.todos, action.payload]
            };

        case TOGGLE_TODO :
            return {
                ...store,
                todos: store.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, status: !todo.status} : todo
                )
            }

        case DELETE_TODO:
            return {
                ...store,
                todos: store.todos.filter((todos) => todos.id !== action.payload)
            }

        default:
                return store;
     }
}