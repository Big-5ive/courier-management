import "../../Style/footer.css";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__top--container">
            <div className="footer__title">About</div>
            <div className="footer__content">
              <a href="/#/company" className="footer__content--text">
                Our Company
              </a>
              <a href="/#/company" className="footer__content--text">
                Who We Are
              </a>
              <a href="/#/offshore" className="footer__content--text">
                What we Do
              </a>
              {/* <a href="/whoWeAre" className="footer__content--text">Who We Are</a> */}
            </div>
          </div>

          <div className="footer__top--container">
            <div className="footer__title">Our Service</div>
            <div className="footer__content">
              <a href="/#/company" className="footer__content--text">
                International shipping
              </a>
              <a href="/#/company" className="footer__content--text">
                Freight services
              </a>
              <a href="/#/company" className="footer__content--text">
                Real time tracking
              </a>
              <a href="/#/company" className="footer__content--text">
                Custom logistic solutions
              </a>
              {/* <p className="footer__content--text"></p> */}
            </div>
          </div>

          <div className="footer__top--container">
            <div className="footer__title">Support</div>
            <div className="footer__content">
              <a href="/#/contact" className="footer__content--text">
                support@asianpacificexpress.com
              </a>
              <a href="/#/contact" className="footer__content--text">
                
                117 Seongchang Bldg jung-gu Seol KR, South Korea
              </a>
              <a href="/#/contact" className="footer__content--text">
                +82 1577-0484
              </a>
              {/* <p className="footer__content--text">Terms And conditions</p> */}
            </div>
          </div>
        </div>
        <div className="footer__down">
          <a href="/" className="footer__logo">
            <p style={{fontSize: "25px", fontWeight: "700"}}>Asian Pacific Express</p>
          </a>
        </div>
        <div className="footer__footer">
          <p className="footer__footer--text">© 2024 Asian Pacific Express.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
