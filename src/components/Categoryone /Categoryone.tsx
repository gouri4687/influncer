import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import item from "../../assets/Rectangle.png";
import item1 from "../../assets/Rectang=qscle1.png";
import item2 from "../../assets/Rectangle2.png";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

import "./Categoryone.css";

export const Categoryone = () => {
  return (
    <Box>
      <Box className="item" component="section" mt={2}>
        <Typography>Category One</Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: "30px", width: "108px", marginLeft: "15px" }}
        >
          View all
          <img alt="arrow" src={require(`../../assets/arrow-right.png`)} />
        </Button>
      </Box>
      <Box className="products">
        {products.map((product: any, i: any) => (
          <Box key={i}>
            <Paper className="product" elevation={0}>
              <Box
                className="like-icon"
                component={"img"}
                src={require(`../../assets/Icon@2x.png`)}
              ></Box>
              <Box
                component={"img"}
                src={require(`../../assets/${product.image}`)}
              ></Box>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "18px" }}
              >
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ₹{product.price}
              </Typography>
              <Button
                className="buy-button"
                size="small"
                variant="outlined"
                color="primary"
              >
                Call now
              </Button>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const products = [
  {
    name: "Meters Music Connect White OV-1-B",
    price: "25,000.00",
    image: "Rectangle.png",
  },
  {
    name: "Apple HomePod mini-Orange (2023) ",
    price: "25,000.00",
    image: "Rectangle1.png",
  },
  {
    name: "Asus Zenbook Pro 13 UX-430 US 2018",
    price: "25,000.00",
    image: "Rectangle2.png",
  },
  {
    name: "Kotak811 Credit Card  ",
    price: "25,000.00",
    image: "Rectangle3.png",
  },
  {
    name: "Meters Music Connect White OV-1-B",
    price: "25,000.00",
    image: "Rectangle.png",
  },
  {
    name: "Meters Music Connect White OV-1-B",
    price: "25,000.00",
    image: "Rectangle.png",
  },
];
