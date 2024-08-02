import { useNavigate } from "react-router-dom";
import "./offshore.css";

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
          <img src="https://media.istockphoto.com/id/1418267717/photo/aerial-panorama-of-a-cargo-ship-carrying-container-for-import-and-export.jpg?s=612x612&w=0&k=20&c=pjaI0YCs52ZMfNJU-xrihAsOYR_rrH2vunXYjFGwPdA=" />
        </div>
        <main className="main">
          <div className="writeupwrap">
            <div className="writeup">
              <p>
                In line with our pioneering mentality and our innovative
                approach to business, we have identified the huge inefficiencies
                in the Nigerian Oil and Gas Industry, and have taken adequate
                steps to bridge these gaps, by the development of one of
                Africa’s largest offshore Petroleum intake/offtake and storage
                terminals to provide compelling Logistic advantages to the
                entire oil and gas value chain.
              </p>
              <p>
                The facility comprises a world class Single Point Mooring (SPM)
                and Conventional Buoy Mooring (CBM). These facilities can
                receive up to 150,000 DWT vessels, with the ability to discharge
                up to 100,000 MT of petroleum products within 48hours. The
                facilities have full terminal automation and radar gauging
                systems, built with the highest safety standards.
              </p>
              <p>
                To facilitate efficient load out of products, we have extensive
                truck gantries with sufficient loading arms to fill and dispatch
                up to 600 trucks daily. In addition, the facility will give
                operators access to purpose-built truck parking in the Freezone,
                reduced time for truck loading and direct access to artery roads
                leading to the East and North.
              </p>
              <p>
                The Facility is located within the Lekki Free Trade Zone, giving
                operators and users the advantage of numerous fiscal and
                economic incentives.
              </p>
            </div>
          </div>
          <div className="picswrap">
            <div className="pics">
              <div className="picimg">
                <div className="imgwrap">
                  <h3>Offshore intake/ Offtake Facilities</h3>
                  <div className="actualimg">
                    <img
                      src="https://media.istockphoto.com/id/1404380618/photo/truck-at-night-on-the-road.webp?b=1&s=170667a&w=0&k=20&c=axrdD6HxrFOxi3ruXatz8H_vwiMyzwlddaBIfxzIIwY="
                      alt=""
                    />
                  </div>
                </div>
                <div className="table">
                  <ul className="custom">
                    <li>Offshore intake/Office Facilities</li>
                    <li>Storage Facilities</li>
                    <li>Petroleum Products Marketing</li>
                    <li>Logistics & Haulage Services</li>
                    <li>Pinacle Gold Card</li>
                    <li>Pinacle Fuel Card</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="getintouch">
        <div className="intouch">
          <div className="info">
            <p>DON'T HESITATE TO CONTACT US</p>
            <h1>For better future and business, Let’s get started now!</h1>
            <span>
              We provide innovative products & services for sustainable
              progress.
            </span>
            <span>
              Our professional team works to increase productivity and cost
              effectiveness on the market.
            </span>
            <button onClick={()=> nav("/contact")}>Get in Touch</button>
          </div>
        </div>
        <img
          src="https://media.istockphoto.com/id/1710190963/photo/fuel-tanker-truck-waiting-to-load-at-a-loading-dock-with-all-the-streets-occupied-by-other.webp?b=1&s=170667a&w=0&k=20&c=wwgiMX7_4NLGOXC72aiRZ8llEMYi6z0ps-5nozwNvWc="
          alt=""
        />
      </div>
    </>
  );
};

export default OffshoreIntake;
