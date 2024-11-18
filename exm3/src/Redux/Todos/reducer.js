import { GET_ALL_LATEST_TODOS } from "./action";


export const todosReducer = (store = {}, action) => {
    switch(action.type){
          case GET_ALL_LATEST_TODOS:
            return{
                todos:[...payload]
            };
        default:
            return store
    }
  

}