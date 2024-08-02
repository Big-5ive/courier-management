import { useState } from "react";
import "./ThirdSection.css";
import { useNavigate } from "react-router-dom";


const ThirdSection = () => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productType, setProductType] = useState("");
  const [warning, setWarning] = useState(false);
  const nav = useNavigate();

  const handleProductType = (e) => {
    const product = e.target.value;
    console.log(product);
    setProductType(product);
    // console.log(productType);
    // setUserInfo((p)=>({...p, productType:product}))
    // console.log(userInfo.productType); 
  };
  const handleOrderNow = () => {
    if (
      fullName &&
      companyName &&
      deliveryAddress &&
      email &&
      phoneNumber &&
      productType
    ) {
      const userInfo = {
        fullName,
        companyName,
        deliveryAddress,
        email,
        phoneNumber,
        productType,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      nav("/checkout");
    }
    setWarning(true)
  };
  return (
    <div className="thirdSectionContainer" id="price">
      <div className="thirdSectionWrapper">
        <div className="thirdSectionformContainer">
          <h1 className="thirdSectionFormTitle">Bulk Order</h1>
          <form action="" method="post" className="thirdSectionForm">
            <div className="thirdSectionFormName">
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <input
              className="thirdSectionFormInput"
              type="Address"
              placeholder="Your Delivery Address"
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
            <div className="thirdSectionFormName">
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone No"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <select
              className="thirdSectionFormInput"
              name=""
              id=""
              onChange={handleProductType}
            >
              <option value="Select Product Type" disabled>
                Select Product Type
              </option>
              <option value="Offshore intake/offtake Facilities">
                Offshore intake/offtake Facilities
              </option>
              <option value="Storage Facilities">Storage Facilities</option>
              <option value="Petroleum Service Station">
                Petroleum Service Station
              </option>
              <option value="Logistics & Haulage Services">
                Logistics & Haulage Services
              </option>
            </select>
            {/* <select className="thirdSectionFormInput" name="" id="">
              <option value="How Many Litres?">How Many Litres?</option>
            </select> */}
            <div className="thirdSectionFormBtnContainer hover:cursor-pointer">
              <p className="thirdSectionFormBtn rounded font-medium" onClick={handleOrderNow}>
                ORDER NOW
              </p>
            </div>
          </form>
          {warning && <p className="text-red-600">Please fill all inputs</p>}
        </div>
        <div className="thirdSectionExposure">
          <div className="thirdSectionFeatures">
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★ &nbsp;</span>
              Quality Driven
            </p>
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★★ &nbsp;</span>
              Customer Focused
            </p>
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★★★ &nbsp;</span>
              Global Sourcing
            </p>
          </div>
          <h1 className="thirdSectionFeaturesHeader">
            Leading the downstream oil & gas industry in Nigeria since 2004
          </h1>
          <p className="thirdSectionFeaturesdesc">
            We service global clients, in more than 20 countries in Africa & in
            Nigeria.
          </p>
          <div className="thirdSectionCardsContainer">
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img
                  src="./icons/Lorry.png"
                  alt=""
                  id="thirdSectionCardLeftImage"
                />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">Next Day Delivery</p>
                <p className="thirdSectionCardRightContent">
                  At Pinnacle Oil and Gas Company, 92% of our orders are
                  successfully delivered within 24 hours
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img
                  src="https://pinnacleoilandgas.com/wp-content/uploads/2020/09/gas-station2.png"
                  alt=""
                />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">Low Prices</p>
                <p className="thirdSectionCardRightContent">
                  Our aim is to buy fuel at the lowest price possible and pass
                  the savings on to you.
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img src="./icons/profile.png" alt="" />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">
                  Dedicated Account Managers
                </p>
                <p className="thirdSectionCardRightContent">
                  We will assign you an account manager who will be your point
                  of contact from day one.
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img src="./icons/bus.png" alt="bus" />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">
                  Same Day Emergency Delivery
                </p>
                <p className="thirdSectionCardRightContent">
                  At Pinnacle Oil and Gas Company, 92% of our orders are
                  successfully delivered within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="thirdSectionBgImage"
        src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/bgoverlay3-scaled.jpg"
        alt=""
      />
      <img
        className="thirdSectionBgImage"
        src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/bgoverlay3-scaled.jpg"
        alt=""
      />
    </div>
  );
};

export default ThirdSection;
