import { legacy_createStore as createstore } from "redux";

import { reducer } from "./reducer";

export const store  = createstore(reducer, {
    count : 0, todos : []
})

// store.subscribe(() =>{
//     console.log(store.getState());
// })