import React from "react";

// components
import Form from "./Form";

// style
import "./signin.style.css";

// svg images
import Shape1 from "../../Assets/SVG/Signin/Signin-shape1.svg";
import Shape2 from "../../Assets/SVG/Signin/Signin-shape2.svg";
import Shape3 from "../../Assets/SVG/Signin/Signin-shape3.svg";
import Shape4 from "../../Assets/SVG/Signin/Signin-shape4.svg";
import Logo from "../../Assets/Logo/Logo.svg";

const Signin = () => {
  return (
    <div className="signin">
      <div className="shape__box">
        <div className="shape__1">
          <img src={Shape1} alt="shape1" />
        </div>
        <div className="shape__2">
          <img src={Shape2} alt="shape2" />
        </div>
        <div className="shape__3">
          <img src={Shape3} alt="shape3" />
        </div>
        <div className="shape__4">
          <img src={Shape4} alt="shape4" />
        </div>
      </div>
      <div className="form__box">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="form">
          <h1>Bienvenue à Mzaka !</h1>
          <p>Connectez-vous à votre compte pour continuer.</p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Signin;
