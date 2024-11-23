import {applyMiddleware, legacy_createStore as createStore} from "redux";

import { reducer } from "./reducer";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("action dispatch is ", action);
    next(action);
}

const middleware  = applyMiddleware(loggerMiddleware);

export const store  = createStore(
    reducer,
    middleware
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
    console.log("current state", store.getState());
});