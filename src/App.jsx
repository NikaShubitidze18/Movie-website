import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home"; 
import PageTwo from "./components/nextPage/nextpage"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* პირველი გვერდი */}
        <Route path="/movies" element={<PageTwo />} /> {/* ფილმების გვერდი */}
      </Routes>
    </Router>
  );
}

export default App;
