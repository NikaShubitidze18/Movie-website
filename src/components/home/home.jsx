import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Carousel";  // Ensure the path to Carousel is correct
import CardComponent from "./card"; // Ensure the path to CardComponent is correct
import Footer from "./foot"; // Ensure the path to Footer is correct

function Home() {
  return (
    <div>
      <Carousel />  {/* Carousel Component */}
      <CardComponent />  {/* CardComponent */}
      <Footer />  {/* Footer Component */}
    </div>
  );
}

export default Home;
