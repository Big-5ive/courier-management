import "./Company.css";
import WhoWeAre from "./WhoWeAre";
// import worker from "../../src/assets/worker.jpg"

const Company = () => {
  return (
    <>
      <div className="wholebody">
        <div className="body">
          <div className="bodyleft">
            <div className="bodyleftimage">
              <img
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/03/Pinnacle-Oil-Gas-Limited.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="bodyright">
            <div className="bodyrightholder">
              <div className="welcome">
                <h3 className="welcomeH3">welcome to</h3>
                <div className="dash"></div>
              </div>
              <div className="pinnacle">
                <h1>Rigrail Oil and Gas Limited</h1>
                <span>ISO 9001, 2015 certified company.</span>
              </div>
              <div className="writeupholder">
                <div className="writeup">
                  <span>
                    {" "}
                    Rigrail Oil and Gas Limited Company active across
                    the entire downstream value chain, with emphasis on the
                    petroleum trading, marketing, distribution and retail
                    segments of the Nigerian Oil and Gas Sector.{" "}
                  </span>

                  <span>
                    The company was founded in 2004 with Head Quarters in Lagos,
                    one of Africa’s largest business hubs. Our performance
                    within the sector has resulted in significant growth in
                    market share and customers.
                  </span>

                  <span>
                    We focus on creating long term value through excellent
                    service delivery and customer satisfaction, while ensuring
                    quality and constructive partnerships with our various
                    stakeholders.
                  </span>

                  <span>
                    We are continuously evolving to ensure that access to our
                    products and services is seamless, cost effective and safe.
                    We are highly driven to be recognized as market leaders the
                    Nigerian Oil and Gas Sector. We are renown for integrity,
                    our passion for excellence and sustainable growth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhoWeAre />
    </>
  );
};

export default Company;
