import React from "react";
import Navbar from "./Navbar"; // Make sure the Navbar component is correct
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Carousel from "./Carousel"; // Import Carousel component
import CardComponent from "./card"; // Import the CardComponent
import Foot from "./foot"; // Import the CardComponent

function App() {
  return (
    <div>
      <Navbar /> {/* Make sure this is your navbar component */}
      <Carousel /> {/* This renders the carousel */}
      <CardComponent /> {/* This renders the card component */}
      <Foot /> {/* This renders the card component */}

    </div>
  );
}

export default App;
