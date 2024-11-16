import { legacy_createStore as createStore, combineReducers } from "redux";

import { todoReducer } from "./Todo/reducer";
import { counterReducer } from "./Counter/reducer";

const rootReducer = combineReducers({
    count: counterReducer,
    todos: todoReducer
})



export const store  = createStore(
    rootReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

// store.subscribe(() =>{
//     console.log(store.getState());
// })