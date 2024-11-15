import { INC_COUNT, DEC_COUNT,RESET_COUNT, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./action";

export const reducer = (store, action) =>{
     switch(action.type){
        case INC_COUNT :
            return {
                ...store,
                count: store.count + action.payload
            };

        case DEC_COUNT :
            return {
                ...store,
                count: store.count - action.payload
            };

        case RESET_COUNT :
            return {
                ...store,
                count: 0
            };

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