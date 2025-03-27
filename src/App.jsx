import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import NextPage from "./components/nextpage/nextpage"; // ახალი გვერდი

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nextpage" element={<NextPage />} /> {/* ახალი route */}
      </Routes>
    </Router>
  );
}

export default App;
