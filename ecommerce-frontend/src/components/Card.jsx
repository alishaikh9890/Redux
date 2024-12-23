import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";


export const MediaCard = ({ title, id, imageBase, hex, category, color, rating, price }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`${imageBase}/${hex.slice(1)}/transperent`}
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
