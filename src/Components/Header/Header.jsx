// import { useState } from "react";
// import "../Style/header.css";
// import DropDown from "./DDAboutUs";
// import DDOurServices from "./DDOurServices";
// import HeaderBurgerPopUp from "./HeaderBurgerPopUp";
// import { useLocation, useNavigate } from "react-router-dom";
// // import { CSSProperties } from "react";
// const Header = () => {
//   const [aboutHover, setAboutHover] = useState(false);
//   const [servicesHover, setServicesHover] = useState(false);
//   const [menuPop, setMenuPop] = useState(false);
//   const { pathname } = useLocation();
//   const nav = useNavigate()
//   console.log(pathname);

//   const handleAbout = () => {
//     setServicesHover(false);
//     setAboutHover(true);
//   };
//   const handleService = () => {
//     setAboutHover(false);
//     setServicesHover(true);
//   };
//   const handleNav =(val)=>{
//     if (val==="/product"){
//       nav("/product")
//     }else  if (val==="/"){
//       nav("/")
//     }else  if (val==="/contact"){
//       nav("/contact")
//     }
//   }
//   return (
//     <>
//       <div
//         className="headerContainer"
//         style={pathname === "/" || pathname === "/contact" ? {}:{ backgroundColor: "#192437" }}
//       >
//         <div className="headerWrapper">
//           <div className="headerLogo">
//             <h3 className="headerh3" onClick={()=>handleNav("/")}>Rigrail Oil & Gas</h3>
//           </div>
//           <div className="headerNavs">
//             <p className="headerNavsText" onClick={()=>handleNav("/")}>Home</p>
//             <p
//               className="headerNavsText aboutUsHover"
//               onMouseOver={handleAbout}
//             >
//               About Us
//               {aboutHover && <DropDown setAboutHover={setAboutHover} />}
//             </p>
//             <p
//               className="headerNavsText aboutUsHover"
//               onMouseOver={handleService}
//             >
//               Our Services
//               {servicesHover && (
//                 <DDOurServices setServicesHover={setServicesHover} />
//               )}
//             </p>
//             <p className="headerNavsText" onClick={()=>handleNav("/contact")}>
//               Contact Us
//             </p>
//           </div>
//           <div className="headerButton">
//             <button className="headerbtn hover:bg-orange-400" onClick={()=>handleNav("/product")}>Buy Product</button>
//           </div>
//           <div className="HeaderMenu" onClick={() => setMenuPop(true)}>
//             <img src="/icons/Menu.png" alt="" />
//           </div>
//         </div>
//       </div>
//       {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
//     </>
//   );
// };

// export default Header;

import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header