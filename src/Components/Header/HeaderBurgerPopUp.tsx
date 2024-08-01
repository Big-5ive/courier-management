import React, { useState } from "react";
import "../Style/HeaderBurgerPopUp.css";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from "react-router-dom";

type Props = {
  setMenuPop: React.Dispatch<React.SetStateAction<boolean>>;
};
const HeaderBurgerPopUp: React.FC<Props> = ({ setMenuPop }) => {
  const [service, setService] = useState<string>("");
  console.log(service)
  const nav = useNavigate();
  const handleNavClick = (navItem: string) => {
    if (navItem === "home") {
      nav("/");
      setMenuPop(false);
    } else if (navItem === "about") {
      nav("/aboutUs");
      setMenuPop(false);
    } else if (navItem === "contact") {
      nav("/contact");
      setMenuPop(false);
    } else if (navItem === "blog") {
      nav("/blog");
      setMenuPop(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    console.log(selectedValue);
    setService(selectedValue)
    setMenuPop(false);
    if (selectedValue === "Storage Facilities") {
      nav("/storage");
    } else if (selectedValue === "Offshore Intake/Offtake Facilities") {
      nav("/offshore");
    } else if (selectedValue === "Petroleum Products Marketing") {
      nav("/ppm");
    } else if (selectedValue === "Logistics & Haulage Services") {
      nav("/lhs");
    }
  };
  return (
    <div className="burgerMenu">
      <div className="burgerMenu__cancelIcon" onClick={() => setMenuPop(false)}>
        <ImCancelCircle />
      </div>
      <div className="burgerMenu__content--container">
        <p onClick={() => handleNavClick("home")}>Home</p>
        <select 
            onChange={handleChange}
            className="aboutUs__select" >
          <option value="About Us" disabled selected>About Us</option>
          <option
            value="Offshore Intake/Offtake Facilities"
          >
            Offshore Intake/Offtake Facilities
          </option>
          <option value="Storage Facilities">Storage Facilities</option>
          <option
            value="Petroleum Products Marketing">
            Petroleum Products Marketing
          </option>
          <option
          value="Logistics & Haulage Services">
            Logistics & Haulage Services
          </option>
        </select>
        <p onClick={() => handleNavClick("blog")}>Our Sevices</p>
        <p onClick={() => handleNavClick("contact")}>Contact Us</p>
        <p className="burgerMenu__getStarted">Buy Product</p>
      </div>
    </div>
  );
};

export default HeaderBurgerPopUp;
