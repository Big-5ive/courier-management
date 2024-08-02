import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div className="firstSecContainer">
      <div className="firstSecWrapper">
        <div className="firstSecLeft">
          <p className="firstSecLeftTitle">
            Welcome to Pinnacle Oil & Gas Ltd.
          </p>
          <p className="firstSecLeftHeader">
            We are a Leading Downstream Oil & Gas Company in Nigeria
          </p>
          <p className="firstSecLeftText">
            Pinnacle is an Indigenous Oil and Gas Company active across the
            entire downstream value chain, with emphasis on the petroleum
            trading, marketing, distribution and retail segments of the Nigerian
            Oil and Gas Sector.
          </p>
          <p className="firstSecLeftText">
            The company was founded in 2004 with Head Quarters in Lagos, one of
            Africa’s largest business hubs. Our performance within the sector
            has resulted in significant growth in market share and customers…
          </p>
          <div className="firstSecLeftBtn">More About Us</div>
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
              Petroleum Product Importation
            </div>
          </div>
          <div className="firstSecRightCont">
            <div className="firstSecRightContimg">
              <img
                src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/1-Petroleum-Product-Marketing.jpg"
                alt=""
              />
            </div>
            <div className="firstSecRightContBtn">
              Petroleum Product Marketing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
