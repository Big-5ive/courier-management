import React from "react";
import "../Style/DropDown.css";

type Props = {
  setAboutHover: React.Dispatch<React.SetStateAction<boolean>>;
};
const DropDown: React.FC<Props> = ({ setAboutHover }) => {
  return (
    <div className="ddAboutUs" onMouseLeave={() => setAboutHover(false)}>
      <a href="company" className="ddAboutUsText">
        Our Company
      </a>
      <a href="whoWeAre" className="ddAboutUsText">Who We Are </a>
      <a href="whatWeDo" className="ddAboutUsText">What We Do</a>
    </div>
  );
};

export default DropDown;
