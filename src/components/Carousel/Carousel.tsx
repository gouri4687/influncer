import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Carousel as CarouselNpm } from "react-responsive-carousel";
// import image from './../../assets/image 1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export const Carousel = () => {
  return (
    <Box style={{ position: "relative" }}>
      <CarouselNpm showThumbs={false}>
        <div>
          <img src={require("./../../assets/image 1.png")} />
        </div>
        <div>
          <img src={require("./../../assets/image 1.png")} />
        </div>
        <div>
          <img src={require("./../../assets/image 1.png")} />
        </div>
      </CarouselNpm>
      <Box className={"headings"}>
        <Typography variant="h4">
          Standard Chartered EaseMyTrip Credit Card
        </Typography>
        <Typography>
          Enjoy flat 20% & 10% discount* on hotel* & flight bookings.
          #SkipToTheTrip
        </Typography>
        <Button variant="contained" color="warning">
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};
