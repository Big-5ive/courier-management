import { useNavigate } from "react-router-dom";
import "../../../Style/hero.css";
const Hero = () => {
 const nav = useNavigate();
  const handleNav = ()=>{
    nav("/track")
  }
  return (
    <div className="heroContainer">
        <div className="heroText">
        <h3 className="heroIntro">We deliver your world, one package at a time</h3>
        <h1 className="heroBigtext">Trust us to get your parcels where they need to be</h1>
        <p className="herosmalltext">quickly and safely...</p>
        <div className="herobtn hover:bg-orange-400" onClick={handleNav}>Track Now</div>
        </div>
      <img
      className="heroImage"
        src="./cargoship.jpg"
        alt=""
      />
    </div>
  );
};

export default Hero;
