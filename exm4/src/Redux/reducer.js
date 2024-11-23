import { INC_COUNT, DEC_COUNT } from "./action";


export const reducer = (store={count : 0}, {type, payload}) =>{
    console.log("in reducer: action dispatches " ,  {type, payload});
    switch(type){
        case INC_COUNT:
            return { count: store.count + payload};

        case DEC_COUNT:
            return { count : store.count - payload};
        
        default: 
             return store;
    }
}