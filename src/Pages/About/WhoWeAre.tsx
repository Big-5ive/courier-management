import "./WhoWeAre.css";

const WhoWeAre: React.FC = () => {
  return (
    <div className="heropage max-[700px]:h-max">
      <div className="HeroPageWrapper max-[700px]:flex-col max-[700px]:h-max  ">
        <div className="HeroPageWrapperLeft max-[700px]:w-full ">
          <div className="HeroPageLeftSideUp">
            <img
              src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/Our-Core-Values2.jpg"
              alt=""
            />
          </div>
          <div className="HeroPageLeftSideMid">
            <div className="MiddleSide">
              <div className="MiddleSideUp">
                {/* <div className="MiddleSideUpLeft">
                  <img src="./dot.svg" alt="" />
                  
                </div> */}
                <div className="MiddleSideUpRight">
                  <h1><span style={{ color: "#df6512", fontSize: "30px" }}>⦿</span>Our Vision</h1>
                </div>
              </div>
              <p>
                  To become the dominant downstream oil and gas player in Africa.
              </p>
            </div>
            <div className="MiddleSide">
              <div className="MiddleSideUp">
                {/* <div className="MiddleSideUpLeft">
                  <img src="./dot.svg" alt="" />
                </div> */}
                <div className="MiddleSideUpRight">
                  <h1><span style={{ color: "#df6512", fontSize: "30px" }}>⦿</span>Our Mission</h1>
                </div>
              </div>
              <p>
                “We play a lead role in petroleum product trading, marketing and
                distribution in Africa, through a well structured and strategic
                channel that delivers unbeatable pricing and efficiency of
                service.”.
              </p>
            </div>
            <div className="MiddleSide">
              <div className="MiddleSideUp">
                {/* <div className="MiddleSideUpLeft">
                  <img src="./dot.svg" alt="" />
                </div> */}
                <div className="MiddleSideUpRight">
                  <h1><span style={{ color: "#df6512", fontSize: "30px" }}>⦿</span>Our Philosophy</h1>
                </div>
              </div>
              <p>
                We are driven by the “Pinnacle Spirit” which is highly resilient
                and optimistic about Africa’s economic future.
              </p>
            </div>
          </div>
          <div className="HeroPageLeftSideUp">
            <img
              src="https://pinnacleoilandgas.com/wp-content/uploads/2021/03/Vision.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="HeroPageWrapperRight max-[700px]:w-full max-[700px]:h-full max-[700px]:mt-[50px] ">
          <div className="HeroPageRightSideUp">
            <div className="HeroPageRightSideUpWrap">
              <div className="HeroRightUpperSide">
                <h1>Our Core Values</h1>
              </div>
              <div className="HeroRightMidSide">
                <div className="HeroRightMidSideUp">
                  <div className="HeroRightMidSideUpLeft">
                    <img
                      src="https://s.w.org/images/core/emoji/14.0.0/svg/2611.svg"
                      alt=""
                    />
                  </div>
                  <div className="HeroRightMidSideUpRight">
                    <h1>Integrity</h1>
                  </div>
                </div>
                <p>
                  At Pinnacle, our word is our bond. That is why we value
                  transparency and honesty in all we do. We measure ourselves
                  against the highest standards of integrity and fiscal
                  responsibility.
                </p>
              </div>
              <div className="HeroRightMidSide">
                <div className="HeroRightMidSideUp">
                  <div className="HeroRightMidSideUpLeft">
                    <img
                      src="https://s.w.org/images/core/emoji/14.0.0/svg/2611.svg"
                      alt=""
                    />
                  </div>
                  <div className="HeroRightMidSideUpRight">
                    <h1>Innovation</h1>
                  </div>
                </div>
                <p>
                  We are constantly developing and implementing new ideas. To
                  ensure our products and services remain top tier in a fast
                  paced and changing environment, our minds are always
                  conditioned towards innovative ways to reshape operations and
                  create enormous value
                </p>
              </div>
              <div className="HeroRightMidSide">
                <div className="HeroRightMidSideUp">
                  <div className="HeroRightMidSideUpLeft">
                    <img
                      src="https://s.w.org/images/core/emoji/14.0.0/svg/2611.svg"
                      alt=""
                    />
                  </div>
                  <div className="HeroRightMidSideUpRight">
                    <h1> Team Spirit</h1>
                  </div>
                </div>
                <p>
                  The foundation of Pinnacle’s success is its people. Our code
                  is “driven by innovation, sustained by people”. In line with
                  this, we ensure everyone is a part of the internal movement.
                  With over 9 active departments, our team spirit keeps us all
                  geared towards one goal, one mission, one vision and one
                  strategic objective.
                </p>
              </div>
              <div className="HeroRightMidSide">
                <div className="HeroRightMidSideUp">
                  <div className="HeroRightMidSideUpLeft">
                    <img
                      src="https://s.w.org/images/core/emoji/14.0.0/svg/2611.svg"
                      alt=""
                    />
                  </div>
                  <div className="HeroRightMidSideUpRight">
                    <h1>Customer-Centric</h1>
                  </div>
                </div>
                <p>
                  We believe customer satisfaction is not just an event, or an
                  isolated action, it is our culture and our professional
                  ideology. We aim at meeting and exceeding customers’
                  expectations in all aspects of our business, without
                  compromising on quality, which is why our solutions, products
                  and services are the best.
                </p>
              </div>
              <div className="HeroRightMidSide">
                <div className="HeroRightMidSideUp">
                  <div className="HeroRightMidSideUpLeft">
                    <img
                      src="https://s.w.org/images/core/emoji/14.0.0/svg/2611.svg"
                      alt=""
                    />
                  </div>
                  <div className="HeroRightMidSideUpRight">
                    <h1>Care For Safety Health And Environment</h1>
                  </div>
                </div>
                <p>
                  Pinnacle is committed to providing a healthy and safe work
                  environment for its workers. We ensure compliance with all
                  health and environmental safety standards. To express that
                  commitment, we have taken adequate steps to ensure care for
                  safety, health and environment is articulated and considered
                  in all our operations. To this end, we adhere strictly to all
                  safety regulations in line with the Oil and Gas Industry’s
                  standards and the international standards.
                </p>
              </div>
            </div>
          </div>
          <div className="HeroPageRightSideDown">
            <div className="HeroPageRightSideDownLeft">
              <div className="Left">
                <div className="Leftty">
                  <img src="./icons/Award.png" alt="" />
                </div>
              </div>
              <div className="Right">
                <h1>AWARD WINNING</h1>
                <p>Company of the Year</p>
              </div>
            </div>
            <div className="HeroPageRightSideDownLeft">
              <div className="Left">
                <div className="Leftty">
                  <img src="./icons/Ducument.png" alt="" />
                </div>
              </div>
              <div className="Right">
                <h1>GLOBAL CERTIFICATE</h1>
                <p>ISO 9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
