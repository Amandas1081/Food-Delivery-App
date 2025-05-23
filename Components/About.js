import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import burgerImage from "../../../public/Images/burgerImage.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container-main">
      <div className="about-profile-container">
        
      </div>
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={burgerImage} alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
