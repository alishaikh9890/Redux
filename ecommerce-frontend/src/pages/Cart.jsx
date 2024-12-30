import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemCount } from '../utilities/cart';
import { changeCartCount, delCartItem } from '../store/cart/action';

function Cart() {
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    let total = 0;

      const handleChangeCount = (itemDetails,num) => {
        dispatch(changeCartCount(itemDetails, num))
      }
    
  const handleDecCount = (itemDetails,productId) => {
    const myCount = getItemCount(cart, productId);
    if(+myCount === 1){
      dispatch(delCartItem(itemDetails));
    }
    else 
    {
      handleChangeCount(itemDetails, -1)
    }
  }




  return (
    <div>
        {
            cart.map((ele) => 
               {
                total += +ele.price * +ele.count;
                return ( <div>
                    <div>{ele.title}</div>
                    <div>{ele.price}</div>
                    <div>
                        <button onClick={() => handleChangeCount(ele, 1)}>+</button>
                        <button>{ele.count}</button>
                        <button onClick={() => handleDecCount(ele, +ele.id)}>-</button>
                    </div>
                    <div>
                        <h5>Amount: </h5>
                        <h5>{+ele.price * +ele.count}</h5>
                    </div>
                </div>)}
        )}
        <div>
            {total}
        </div>
    </div>
  )
}

export default Cart