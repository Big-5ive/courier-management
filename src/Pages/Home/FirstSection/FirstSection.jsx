import { Link } from "react-router-dom";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div className="firstSecContainer">
      <div className="firstSecWrapper">
        <div className="firstSecLeft">
          <p className="firstSecLeftTitle">
            Welcome to Asian Pacific Express.
          </p>
          <p className="firstSecLeftHeader">
            we pride ourselves on being more than just a delivery company
          </p>
          <p className="firstSecLeftText">
            we're a trusted partner in your logistics journey. Founded on 
            the principles of reliability, speed, and exceptional customer 
            service, we have been committed to connecting people and businesses 
            through our comprehensive delivery solutions
          </p>
          <p className="firstSecLeftText">
            Our dedicated team of professionals works tirelessly to ensure that every 
            package, no matter how big or small, is handled with the utmost care and 
            urgency. With cutting-edge technology and a customer-centric approach, we 
            provide real-time tracking, secure handling, and timely deliveries to meet your unique needs.
          </p>
          <div className="firstSecLeftBtn"><Link to="/company">More About Us</Link></div>
        </div>
        <div className="firstSecRight">
          <div className="firstSecRightCont">
            <div className="firstSecRightContimg">
              <img
                src="https://pinnacleoilandgas.com/wp-content/uploads/2020/09/Petroleum-Product-Importation.jpg"
                alt=""
              />
            </div>
            <div className="firstSecRightContBtn">
              Reliability
            </div>
          </div>
          <div className="firstSecRightCont">
            <div className="firstSecRightContimg">
              <img
                src="./plane2.jpg"
                alt=""
              />
            </div>
            <div className="firstSecRightContBtn">
              Efficiency
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
