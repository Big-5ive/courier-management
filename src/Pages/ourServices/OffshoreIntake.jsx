import { useNavigate } from "react-router-dom";
import "./offshore.css";
import Storage from "./Storage";

const OffshoreIntake = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="offshoreWrap">
        <div className="hero">
          <div className="writebox">
            <p>Offshore intake/</p>
            <p>Offtake Facilities</p>
            <p id="pp"></p>
          </div>
          <img src="./ship.jpg" />
        </div>
        <main className="main">
          <div className="writeupwrap">
            <div className="writeup">
              At Asian Pacific Express, we offer a wide range of delivery
              solutions, tailored to meet your needs. Whether you’re sending a
              single document or managing a complex supply chain, we ensure your
              packages are in safe and reliable hands. For urgent deliveries,
              our Same-Day Delivery service guarantees your packages arrive
              within hours, perfect for critical documents and time-sensitive
              items. Our Next-Day Delivery service provides a balance of speed
              and cost-efficiency, ensuring prompt delivery the next day. Our
              International Shipping services expand your reach globally,
              navigating customs and regulations to ensure your packages arrive
              safely and on time. For large shipments, our Freight Services
              offer flexible options, including air, sea, and road freight,
              handling bulky and heavy items with care. Stay informed with our
              Real-Time Tracking, monitoring your shipment’s journey from
              pick-up to delivery. Our Custom Logistics Solutions cater to your
              specific needs, including warehousing and inventory management,
              streamlining your operations. Security is our priority, with our
              team handling all packages with care to ensure they arrive in
              perfect condition. In critical situations, our Emergency Service
              ensures rapid and reliable delivery. We provide value with our
              Affordable Delivery options, offering competitive pricing without
              compromising on quality. Our dedicated customer care team is
              always ready to assist, providing personalized service and support
              for a smooth delivery experience.
            </div>
          </div>
          <div className="picswrap">
            <div className="pics">
              <div className="picimg">
                <div className="imgwrap">
                  <h3>Asian Pacific Express</h3>
                  <div className="actualimg">
                    <img
                      src="https://media.istockphoto.com/id/1404380618/photo/truck-at-night-on-the-road.webp?b=1&s=170667a&w=0&k=20&c=axrdD6HxrFOxi3ruXatz8H_vwiMyzwlddaBIfxzIIwY="
                      alt=""
                    />
                  </div>
                </div>
                <div className="table">
                  <ul className="custom">
                    <li>International Shipping</li>
                    <li>Freight Services</li>
                    <li>Real-Time Tracking</li>
                    <li>Custom Logistic Solutions</li>
                    <li>Affordable Delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Storage />
    </>
  );
};

export default OffshoreIntake;
