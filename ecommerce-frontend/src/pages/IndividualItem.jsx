import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import axios from "axios";



 const IndividualItem = () => {
    const [itemDetails, setItemDetails] = useState([]);
    const {imageBase, hex, title, color ,price, category, rating} = itemDetails;
    let {id} = useParams();

useEffect(()=>{
        axios({
            method:"get",
            url:`http://localhost:8000/products/${id}`
        })
        .then(res => setItemDetails(res.data))
        .catch(err => console.log(err))
    }, [])




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
          <Typography className="card_price" gutterBottom variant="body" component="div">
            ₹ {price}
          </Typography>
          <Typography className="card_rating"  gutterBottom variant="body" component="div">
            ⭐️ {rating}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
      <Link to={`/product/${id}`}>
        <Button size="small">view</Button>
      </Link>
      </CardActions>
    </Card>
  );
};


export default IndividualItem;