import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./ThirdSection.css";

const ThirdSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [warning, setWarning] = useState(false);
  const nav = useNavigate();

  const handleDeliveryType = (e) => {
    const type = e.target.value;
    setDeliveryType(type);
  };

  const handleOrderNow = () => {
    if (
      firstName &&
      lastName &&
      deliveryAddress &&
      postalCode &&
      email &&
      phoneNumber &&
      deliveryType &&
      pickupLocation
    ) {
      const userInfo = {
        firstName,
        lastName,
        deliveryAddress,
        postalCode,
        email,
        phoneNumber,
        deliveryType,
        pickupLocation
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      toast.success("Order placed successfully!");
      setTimeout(()=>{
        setFirstName("");
        setLastName("");
        setDeliveryAddress("");
        setPostalCode("");
        setEmail("");
        setPhoneNumber("");
        setDeliveryType("");
        setPickupLocation("");
      },3000)
    } else {
      setWarning(true);
    }
  };

  return (
    <div className="thirdSectionContainer" id="price">
      <ToastContainer />
      <div className="thirdSectionWrapper">
        <div className="thirdSectionformContainer">
          <h1 className="thirdSectionFormTitle">Start your delivery process here</h1>
          <form action="" method="post" className="thirdSectionForm">
            <div className="thirdSectionFormName">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <input
              className="thirdSectionFormInput"
              type="text"
              placeholder="Your Delivery Address"
              onChange={(e) => setDeliveryAddress(e.target.value)}
              value={deliveryAddress}
            />
            <input
              className="thirdSectionFormInput"
              type="text"
              placeholder="Postal/Zip Code"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
            />
            <div className="thirdSectionFormName">
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="number"
                placeholder="Phone No"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </div>
            <select
              className="thirdSectionFormInput"
              name="deliveryType"
              onChange={handleDeliveryType}
              value={deliveryType}
            >
              <option value="">Select delivery type</option>
              <option value="Air freight">Air freight</option>
              <option value="Ocean freight">Ocean freight</option>
              <option value="Road freight">Road freight</option>
              <option value="Rail freight">Rail freight</option>
            </select>
            <input
              className="thirdSectionFormInput"
              type="text"
              placeholder="Pickup Location"
              onChange={(e) => setPickupLocation(e.target.value)}
              value={pickupLocation}
            />
            <div className="thirdSectionFormBtnContainer hover:cursor-pointer">
              <p className="thirdSectionFormBtn rounded font-medium" onClick={handleOrderNow}>
                DONE
              </p>
            </div>
          </form>
          {warning && <p className="text-red-600">Please fill all inputs</p>}
        </div>
        <div className="thirdSectionExposure">
          <div className="thirdSectionFeatures">
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★★★★★ &nbsp;</span>
              Quality Driven
            </p>
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★★★★★ &nbsp;</span>
              Customer Focused
            </p>
            <p className="thirdSectionFeaturesContent">
              <span style={{ color: "#ff9900" }}>★★★★★ &nbsp;</span>
              Global Sourcing
            </p>
          </div>
          <h3 className="thirdSectionFeaturesHeader">
            We've navigated countless miles and delivered millions of packages, 
            earning a reputation for reliability and excellence that stands the 
            test of time.
          </h3>
          <p className="thirdSectionFeaturesdesc">
            We service global clients, in more than 20 countries in Europe & in
            USA.
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
                <p className="thirdSectionCardRightHeader">Short Time Delivery</p>
                <p className="thirdSectionCardRightContent">
                  Our Short Time Delivery service ensures your urgent packages arrive quickly and safely.
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
                  Our Affordable Delivery service ensures your packages arrive on time, every time, 
                  at prices that won’t stretch your budget.
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img src="./icons/profile.png" alt="" />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">
                  24/7 Customer care
                </p>
                <p className="thirdSectionCardRightContent">
                  Our dedicated customer care team is always ready to assist, ensuring a smooth and hassle-free experience from start to finish
                </p>
              </div>
            </div>
            <div className="thirdSectionCard">
              <div className="thirdSectionCardLeft">
                <img src="./icons/bus.png" alt="bus" />
              </div>
              <div className="thirdSectionCardRight">
                <p className="thirdSectionCardRightHeader">
                  Emergency service
                </p>
                <p className="thirdSectionCardRightContent">
                  We handle urgent requests with priority, ensuring your crucial packages reach their destination quickly and securely, no matter the situation.
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













// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import "./ThirdSection.css";

// const ThirdSection = () => {
//   const [fullName, setFullName] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [deliveryAddress, setDeliveryAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [productType, setProductType] = useState("");
//   const [warning, setWarning] = useState(false);
//   const nav = useNavigate();

//   const handleProductType = (e) => {
//     const product = e.target.value;
//     setProductType(product);
//   };

//   const handleOrderNow = () => {
//     if (
//       fullName &&
//       companyName &&
//       deliveryAddress &&
//       email &&
//       phoneNumber &&
//       productType
//     ) {
//       const userInfo = {
//         fullName,
//         companyName,
//         deliveryAddress,
//         email,
//         phoneNumber,
//         productType,
//       };
//       localStorage.setItem("userInfo", JSON.stringify(userInfo));
//       toast.success("Order placed successfully!");
//       setTimeout(()=>{
//         setCompanyName("")
//         setDeliveryAddress("")
//         setEmail("")
//         setFullName("")
//         setPhoneNumber("")
//         setProductType("")
//       },3000)
//     } else {
//       setWarning(true);
//     }
//   };

//   return (
//     <div className="thirdSectionContainer" id="price">
//       <ToastContainer />
//       <div className="thirdSectionWrapper">
//         <div className="thirdSectionformContainer">
//           <h1 className="thirdSectionFormTitle">Start your delivery process here</h1>
//           <form action="" method="post" className="thirdSectionForm">
//             <div className="thirdSectionFormName">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 onChange={(e) => setCompanyName(e.target.value)}
//               />
//             </div>
//             <input
//               className="thirdSectionFormInput"
//               type="Address"
//               placeholder="Your Delivery Address"
//               onChange={(e) => setDeliveryAddress(e.target.value)}
//             />
//             <div className="thirdSectionFormName">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="number"
//                 placeholder="Phone No"
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//             <select
//               className="thirdSectionFormInput"
//               name=""
//               id=""
//               onChange={handleProductType}
//             >
//               <option value="">
//                 Select delivery type 
//               </option>
//               <option value="Offshore intake/offtake Facilities">
//                 International 
//               </option>
//               {/* <option value="Storage Facilities">Storage Facilities</option> */}
//               <option value="Petroleum Service Station">
//                 National
//               </option>
//             </select>
//             <div className="thirdSectionFormBtnContainer hover:cursor-pointer">
//               <p className="thirdSectionFormBtn rounded font-medium" onClick={handleOrderNow}>
//                 DONE
//               </p>
//             </div>
//           </form>
//           {warning && <p className="text-red-600">Please fill all inputs</p>}
//         </div>
//         <div className="thirdSectionExposure">
//           <div className="thirdSectionFeatures">
//             <p className="thirdSectionFeaturesContent">
//               <span style={{ color: "#ff9900" }}>★★★★★ &nbsp;</span>
//               Quality Driven
//             </p>
//             <p className="thirdSectionFeaturesContent">
//               <span style={{ color: "#ff9900" }}>★★★★★ &nbsp;</span>
//               Customer Focused
//             </p>
//             <p className="thirdSectionFeaturesContent">
//               <span style={{ color: "#ff9900" }}>★★★★★ &nbsp;</span>
//               Global Sourcing
//             </p>
//           </div>
//           <h3 className="thirdSectionFeaturesHeader">
//             We've navigated countless miles and delivered millions of packages, 
//             earning a reputation for reliability and excellence that stands the 
//             test of time.
//           </h3>
//           <p className="thirdSectionFeaturesdesc">
//             We service global clients, in more than 20 countries in Europe & in
//             USA.
//           </p>
//           <div className="thirdSectionCardsContainer">
//             <div className="thirdSectionCard">
//               <div className="thirdSectionCardLeft">
//                 <img
//                   src="./icons/Lorry.png"
//                   alt=""
//                   id="thirdSectionCardLeftImage"
//                 />
//               </div>
//               <div className="thirdSectionCardRight">
//                 <p className="thirdSectionCardRightHeader">Short Time Delivery</p>
//                 <p className="thirdSectionCardRightContent">
//                 Our Short Time Delivery service ensures your urgent packages arrive quickly and safely.
//                 </p>
//               </div>
//             </div>
//             <div className="thirdSectionCard">
//               <div className="thirdSectionCardLeft">
//                 <img
//                   src="https://pinnacleoilandgas.com/wp-content/uploads/2020/09/gas-station2.png"
//                   alt=""
//                 />
//               </div>
//               <div className="thirdSectionCardRight">
//                 <p className="thirdSectionCardRightHeader">Low Prices</p>
//                 <p className="thirdSectionCardRightContent">
//                 Our Affordable Delivery service ensures your packages arrive on time, every time, 
//                 at prices that won’t stretch your budget.
//                 </p>
//               </div>
//             </div>
//             <div className="thirdSectionCard">
//               <div className="thirdSectionCardLeft">
//                 <img src="./icons/profile.png" alt="" />
//               </div>
//               <div className="thirdSectionCardRight">
//                 <p className="thirdSectionCardRightHeader">
//                   24/7 Customer care
//                 </p>
//                 <p className="thirdSectionCardRightContent">
//                   Our dedicated customer care team is always ready to assist, ensuring a smooth and hassle-free experience from start to finish
//                 </p>
//               </div>
//             </div>
//             <div className="thirdSectionCard">
//               <div className="thirdSectionCardLeft">
//                 <img src="./icons/bus.png" alt="bus" />
//               </div>
//               <div className="thirdSectionCardRight">
//                 <p className="thirdSectionCardRightHeader">
//                   Emergency service
//                 </p>
//                 <p className="thirdSectionCardRightContent">
//                 We handle urgent requests with priority, ensuring your crucial packages reach their destination quickly and securely, no matter the situation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <img
//         className="thirdSectionBgImage"
//         src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/bgoverlay3-scaled.jpg"
//         alt=""
//       />
//       <img
//         className="thirdSectionBgImage"
//         src="https://pinnacleoilandgas.com/wp-content/uploads/2021/02/bgoverlay3-scaled.jpg"
//         alt=""
//       />
//     </div>
//   );
// };

// export default ThirdSection;
