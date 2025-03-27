import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Footer = () => {
  const [isMovedUp, setIsMovedUp] = useState(false);

  // Handle the button click, simulating navigation to the second page
  const handleNavigate = () => {
    setIsMovedUp(true); // Move the footer up after navigation
  };

  return (
    <footer
      className={`footer bg-dark text-white py-3 mt-3 ${isMovedUp ? "moved-up" : ""}`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container text-center">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <h5>შესახებ</h5>
            <p>ჩვენი კომპანია არის ლიდერი ინდუსტრიაში, რომ უზრუნველყოფს საუკეთესო კინოსერვისებს.</p>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5>კონტაქტი</h5>
            <p>იმეილი: support@example.com</p>
            <p>ტელეფონი: +995 123 456 789</p>
          </div>

          {/* How do you like the site Section */}
          <div className="col-md-3">
            <h5>როგორ მოგეწონათ საიტი</h5>
            <button className="btn btn-outline-light" onClick={handleNavigate}>
              დააფიქსირეთ თქვენი შეფასება
            </button>
          </div>

          {/* TV Shows Section */}
          <div className="col-md-3">
            <h5>სერიალები</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">ბატონი მილიარდი</a></li>
              <li><a href="#" className="text-white">დარჩი ცოცხალი</a></li>
              <li><a href="#" className="text-white">ნარჩენი ქალაქი</a></li>
            </ul>
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleNavigate}>
          Move Up
        </button>
      </div>
    </footer>
  );
};

export default Footer;
