import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/Navbar/Appbar";
import { Carousel } from "./components/Carousel/Carousel";
import { Product } from "./components/Products/Product";
import { Categoryone } from "./components/Categoryone /Categoryone";
import { Categorytwo } from "./components/Categorytwo/Categorytwo";
import { Photo } from "./components/Image/Image";
import { Brands } from "./components/Brands/Brands";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Carousel />
      <Product />
      <Categoryone />
      <Categorytwo />
      <Photo />
      <Brands />
    </div>
  );
}

export default App;
