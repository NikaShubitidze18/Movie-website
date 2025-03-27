import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardComponent from "../home/card";
import Footer from "../home/foot";
import Home from "../home/home"; // Home კომპონენტის ჩასართავად

function PageTwo() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page")) || 1; // იღებს გვერდის ნომერს, default=1

  // თუ პირველი გვერდია, გადავამისამართოთ Home-ზე
  if (currentPage === 1) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h2 className="text-center my-4">ყველა ფილმი - გვერდი {currentPage}</h2>
      <CardComponent page={currentPage} /> {/* გადავცემთ გვერდს */}
      <Footer />
    </div>
  );
}

export default PageTwo;
