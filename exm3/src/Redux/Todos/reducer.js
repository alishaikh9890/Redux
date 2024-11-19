import { GET_ALL_LATEST_TODOS_LOADING, GET_ALL_LATEST_TODOS_SUCCESS, GET_ALL_LATEST_TODOS_FAILURE } from "./action";


export const todosReducer = (store = { todos:[], isLoading:false, isError: false}, {type, payload}) => {
    switch(type){
          case GET_ALL_LATEST_TODOS_LOADING:
            return{
                isLoading:true,
                isError:false,
                todos:[]
            };
            
          case GET_ALL_LATEST_TODOS_SUCCESS:
            return{
                isLoading:false,
                isError:false,
                todos:[...payload]
            };
          case GET_ALL_LATEST_TODOS_FAILURE:
            return{
                isLoading:false,
                isError:false,
                todos:[]
            };

        default:
            return store
    }
  

}