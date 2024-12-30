

 export const getItemCount = (cart, productId) => {
    return +cart.find(el => +el?.id ===  +productId)?.count || 0;
  }
