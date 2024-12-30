import axios from "axios"
import { ADD_TO_CART, CLEAR_CART, DEC_CART, DELETE_ITEM_FROM_CART, ERROR_IN_CART, GET_CART, INC_CART, LOADING_CART } from "./actionType"
import { getItemCount } from "../../utilities/cart"



export const loadingCart = () =>{
    return {
        type:LOADING_CART
    }
}

export const errorInCart = () =>{
    return {
        type:ERROR_IN_CART
    }
}

export const addToCart = () =>{
    return {
        type: ADD_TO_CART
    }
}

export const incCart = () =>{
    return {
        type: INC_CART
    }
}

export const decCart = () =>{
    return {
        type: DEC_CART
    }
}

export const deleteItemFromCart = () =>{
    return {
        type: DELETE_ITEM_FROM_CART
    }
}

export const clearCart = () =>{
    return {
        type: CLEAR_CART
    }
}

export const getCart = (payload) =>{
    return {
        type: GET_CART,
        payload
    }
}


export const getUserCart = () => (dispatch) => {
    dispatch(loadingCart())
    axios({
      method:"get",
      url: "http://localhost:8000/user"
    })
    .then(res=>{
      dispatch(getCart(res.data.cartItems))
    })
    .catch(err=>{
      dispatch(errorInCart())
    })
  }



export const addInCart = (itemDetails) => (dispatch, state) => {
    const cart = state()?.cart?.cart || [];
    dispatch(loadingCart());
    axios({
        method:"patch",
        url: "http://localhost:8000/user",
        data : {
            cartItems: [...cart, {...itemDetails, count: 1 }] 
        }
    })
    .then(res => {
        dispatch(addToCart())
        dispatch(getUserCart())
    })
    .catch(err => {
        dispatch(errorInCart())
    })
  }


export  const changeCartCount = (itemDetails, num) => (dispatch,state) => {
    const cart = state()?.cart?.cart || [];
    const updatedCart = [...cart].map(el => el.id === itemDetails.id ? {...itemDetails, count:getItemCount(cart, el.id) + num} : el);
    dispatch(loadingCart());
    axios({
        method:"patch",
        url: "http://localhost:8000/user",
        data : {
            cartItems: updatedCart 
        }
    })
    .then(res => {
       num > 0 ? dispatch(incCart()) : dispatch(decCart()); 
        dispatch(getUserCart())
    })
    .catch(err => {
        dispatch(errorInCart())
    })
  }


 export const delCartItem = (itemDetails) => (dispatch,state) => {
    const cart = state()?.cart?.cart || [];
    const updatedCart = [...cart].filter(el => el.id !== itemDetails.id );
    dispatch(loadingCart());
    axios({
        method:"patch",
        url: "http://localhost:8000/user",
        data : {
            cartItems: updatedCart 
        }
    })
    .then(res => {
        dispatch(deleteItemFromCart())
        dispatch(getUserCart())
    })
    .catch(err => {
        dispatch(errorInCart())
    })
  }


 export const clearUserCart = () => (dispatch) => {
    dispatch(loadingCart());
    axios({
        method:"patch",
        url: "http://localhost:8000/user",
        data : {
            cartItems: [] 
        }
    })
    .then(res => {
        dispatch(clearCart())
    })
    .catch(err => {
        dispatch(errorInCart())
    })
  }