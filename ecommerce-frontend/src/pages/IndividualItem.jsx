import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addInCart, addToCart, changeCartCount, delCartItem, errorInCart, loadingCart } from "../store/cart/action";
import { getItemCount } from "../utilities/cart";

const IndividualItem = () => {
  const [itemDetails, setItemDetails] = useState({});
  const { imageBase, hex, title, color, price, category, rating } = itemDetails;
  const cart = useSelector(state => state.cart.cart);
  let { productId } = useParams();
  const dispatch = useDispatch();


  const isItemInCart = () => {
    const el = cart.find(el => +el.id ===  +productId);
    return !!el;
  }

  const handleChangeCount = (num) => {
    dispatch(changeCartCount(itemDetails, num))
  }


  const handleAddToCart = () => {
    dispatch(addInCart(itemDetails))
  }


  const handleDecCount = () => {
    const myCount = getItemCount(cart, productId);
    if(+myCount === 1){
      dispatch(delCartItem(itemDetails));
    }
    else 
    {
      handleChangeCount(-1)
    }
  }



  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8000/products/${productId}`
    }).then((res) => setItemDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${imageBase}/${hex ? hex.slice(1) : hex}/transperent`}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {color} - {title}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {category}
        </Typography>
        <Box className="flex_between">
          <Typography
            className="card_price"
            gutterBottom
            variant="body"
            component="div"
          >
            ₹ {price}
          </Typography>
          <Typography
            className="card_rating"
            gutterBottom
            variant="body"
            component="div"
          >
            ⭐️ {rating}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
    {!isItemInCart() &&  <Button onClick={handleAddToCart} size="small">Add To Cart</Button>}
      </CardActions>

      <Box>
        { isItemInCart() && 
        <Box> 
          <Button onClick={() => handleChangeCount(1)} size="small" color="success" variant="contained">
            +
          </Button>
          <Button size="small" color="success" variant="outlined">
            {getItemCount(cart, productId)}
          </Button>
          <Button  onClick={handleDecCount}  size="small" color="warning" variant="contained">
            -
          </Button>
        </Box>   
        }
      </Box>
    </Card>
  );
};

export default IndividualItem;
