import { useNavigate } from "react-router-dom";
import "../../../Style/hero.css";
const Hero = () => {
 const nav = useNavigate();
  const handleNav = ()=>{
    nav("/product")
  }
  return (
    <div className="heroContainer">
        <div className="heroText">
        <h3 className="heroIntro">One off Africa's largest offshore</h3>
        <h1 className="heroBigtext">Offshore Petroleum intake/offtake</h1>
        <p className="herosmalltext">and storage terminals...</p>
        <div className="herobtn hover:bg-orange-400" onClick={handleNav}>Know More</div>
        </div>
      <img
      className="heroImage"
        src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/8-Banner-1.jpg"
        alt=""
      />
    </div>
  );
};

export default Hero;
