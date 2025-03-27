import React from "react";
import CardComponent from "../home/card"; // სწორად მიუთითე ბილიკი
import Footer from "../home/foot"; // სწორად მიუთითე Footer კომპონენტი

function PageTwo() {
  return (
    <div>
      <h2 className="text-center my-4">ყველა ფილმი</h2>
      <CardComponent /> {/* CardComponent is added */}
      <Footer /> {/* Footer is added */}
    </div>
  );
}

export default PageTwo;
