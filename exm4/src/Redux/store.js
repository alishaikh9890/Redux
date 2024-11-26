import {applyMiddleware, legacy_createStore as createStore} from "redux";

import { reducer } from "./reducer";

const loggerMiddleware1 = (store) => (next) => (action) => {
    console.log("1. action dispatch is ", action);
    next(action);
}

const loggerMiddleware2 = (store) => (next) => (action) => {
    console.log("2. action dispatch is ", action);
    action.payload = 3;
    next(action);
}


export const store  = createStore(
    reducer,
   applyMiddleware(loggerMiddleware1, loggerMiddleware2)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
    console.log("current state", store.getState());
});