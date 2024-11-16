import { INC_COUNT, DEC_COUNT,RESET_COUNT} from "./action";

export const counterReducer = (store ={count:0}, action) =>{
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

        default:
                return store;
     }
}