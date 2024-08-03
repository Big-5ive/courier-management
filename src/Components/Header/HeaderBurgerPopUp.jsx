import React, { useState } from "react";
import "../../Style/HeaderBurgerPopUp.css";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";


const HeaderBurgerPopUp = ({ setMenuPop }) => {
  const [service, setService] = useState("");
  console.log(service)
  const nav = useNavigate();
  const handleNavClick = (navItem) => {
    if (navItem === "home") {
      nav("/");
      setMenuPop(false);
    } else if (navItem === "track") {
      nav("/track");
      setMenuPop(false);
    } else if (navItem === "about") {
      nav("/company");
      setMenuPop(false);
    } else if (navItem === "contact") {
      nav("/contact");
      setMenuPop(false);
    } else if (navItem === "services") {
      nav("/offshore");
      setMenuPop(false);
    }
  };

  return (
    <div className="burgerMenu">
      <div className="burgerMenu__cancelIcon" onClick={() => setMenuPop(false)}>
        <ImCancelCircle />
      </div>
      <div className="burgerMenu__content--container">
        <div>Welcome to Asian Pacific Express </div>
        <p onClick={() => handleNavClick("home")}>Home</p>
        <p onClick={() => handleNavClick("track")}>Track</p>
        <p onClick={() => handleNavClick("about")}>About Us</p>
        <p onClick={() => handleNavClick("services")}>Our Sevices</p>
        <p onClick={() => handleNavClick("contact")}>Contact Us</p>
        {/* <p className="burgerMenu__getStarted">Buy Product</p> */}
      </div>
    </div>
  );
};

export default HeaderBurgerPopUp;
