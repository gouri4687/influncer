import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import "./Brands.css";

export const Brands = () => {
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
      <img alt="photo" src={require(`../../assets/image69.png`)} />
    </Box>
  );
};
