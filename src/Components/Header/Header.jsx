import { useRef, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import HeaderBurgerPopUp from "./HeaderBurgerPopUp";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "../../Style/header.css";
import axios from "axios";

const Header = () => {
  const [aboutHover, setAboutHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [menuPop, setMenuPop] = useState(false);
  const { pathname } = useLocation();
  const nav = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [userProfileImage, setUserProfileImage] = useState(null);

  const handleMouseDown = (e) => {
    const dropdown = dropdownRef.current;
    const shiftX = e.clientX - dropdown.getBoundingClientRect().left;
    const shiftY = e.clientY - dropdown.getBoundingClientRect().top;

    const onMouseMove = (e) => {
      dropdown.style.left = `${e.clientX - shiftX}px`;
      dropdown.style.top = `${e.clientY - shiftY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleAbout = () => {
    setServicesHover(false);
    setAboutHover(true);
    nav("/company");
  };
  const handleService = () => {
    setAboutHover(false);
    setServicesHover(true);
    nav("/offshore");
  };
  const handleNav = (val) => {
    if (val === "/product") {
      nav("/product");
    } else if (val === "/") {
      nav("/");
    } else if (val === "/contact") {
      nav("/contact");
    }
  };

  const handleTrack = () => {
    nav("/track");
  };

  const handleGoogleLogin = async () => {
    try {
      const response = await axios.get("https://asianpacificexpress-api.onrender.com/googlelogin");
      console.log(response.data)
      nav('/')
      if (response.data && response.data.profileImage) {
        setUserProfileImage(response.data.profileImage);
      }
    } catch (error) {
      console.error("Google login error: ", error);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      const response = await axios.get("https://asianpacificexpress-api.onrender.com/twitterlogin");
      if (response.data && response.data.profileImage) {
        setUserProfileImage(response.data.profileImage);
      }
    } catch (error) {
      console.error("Twitter login error: ", error);
    }
  };

  return (
    <>
      <div
        className="headerContainer"
        style={
          pathname === "/" || pathname === "/contact"
            ? {}
            : { backgroundColor: "#192437" }
        }
      >
        <div className="headerWrapper">
          <div className="headerLogo">
            <div className="headerh3" onClick={() => handleNav("/")}>
              <img src="/icons/APE2.png" alt="" className="max-[700px]:w-[100px]" />
            </div>
          </div>
          <div className="headerNavs">
            <p className="headerNavsText" onClick={() => handleNav("/")}>
              Home
            </p>
            <p className="headerNavsText aboutUsHover" onClick={handleTrack}>
              Track
            </p>
            <p className="headerNavsText aboutUsHover" onClick={handleAbout}>
              About Us
            </p>
            <p className="headerNavsText aboutUsHover" onClick={handleService}>
              Our Services
            </p>
            <p className="headerNavsText" onClick={() => handleNav("/contact")}>
              Contact Us
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="headerButton">
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {userProfileImage ? (
                  <img
                    src={userProfileImage}
                    alt="User"
                    className="cursor-pointer rounded-full"
                    width={24}
                    height={24}
                  />
                ) : (
                  <FaUser className="text-[#FF6600] cursor-pointer" size={24} />
                )}
                {showDropdown && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50"
                    onMouseDown={handleMouseDown}
                    style={{ cursor: "move" }}
                  >
                    <p className="text-gray-600">
                      Welcome to Asian Pacific Express!
                    </p>
                    <p className="text-center my-2 text-gray-600">
                      Continue with:
                    </p>
                    <div className="flex justify-center space-x-4 my-2">
                      <FaGoogle
                        className="cursor-pointer text-xl text-gray-700"
                        onClick={handleGoogleLogin}
                      />
                      <FaTwitter
                        className="cursor-pointer text-xl text-gray-700"
                        onClick={handleTwitterLogin}
                      />
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2">
                      By signing in via social media, I agree to the Asian
                      Pacific Express Free Membership Agreement and Privacy
                      Policy, and to receive emails about the platform’s
                      products and services.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="HeaderMenu" onClick={() => setMenuPop(true)}>
              <HiOutlineMenuAlt4 />
            </div>
          </div>
        </div>
      </div>
      {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
    </>
  );
};

export default Header;















// import { useRef, useState } from "react";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import HeaderBurgerPopUp from "./HeaderBurgerPopUp";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   FaSearch,
//   FaUser,
//   FaGoogle,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";
// import "../../Style/header.css";

// // import { CSSProperties } from "react";
// const Header = () => {
//   const [aboutHover, setAboutHover] = useState(false);
//   const [servicesHover, setServicesHover] = useState(false);
//   const [menuPop, setMenuPop] = useState(false);
//   const { pathname } = useLocation();
//   const nav = useNavigate();
//   console.log(pathname);

//   const [showDropdown, setShowDropdown] = useState(false);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const timeoutRef = useRef(null);

//   const handleMouseDown = (e) => {
//     const dropdown = dropdownRef.current;
//     const shiftX = e.clientX - dropdown.getBoundingClientRect().left;
//     const shiftY = e.clientY - dropdown.getBoundingClientRect().top;

//     const onMouseMove = (e) => {
//       dropdown.style.left = `${e.clientX - shiftX}px`;
//       dropdown.style.top = `${e.clientY - shiftY}px`;
//     };

//     const onMouseUp = () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutRef.current);
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setShowDropdown(false);
//     }, 200);
//   };

//   const handleAbout = () => {
//     setServicesHover(false);
//     setAboutHover(true);
//     nav("/company");
//   };
//   const handleService = () => {
//     setAboutHover(false);
//     setServicesHover(true);
//     nav("/offshore");
//   };
//   const handleNav = (val) => {
//     if (val === "/product") {
//       nav("/product");
//     } else if (val === "/") {
//       nav("/");
//     } else if (val === "/contact") {
//       nav("/contact");
//     }
//   };

//   const handleTrack = () => {
//     nav("/track");
//   };
//   return (
//     <>
//       <div
//         className="headerContainer"
//         style={
//           pathname === "/" || pathname === "/contact"
//             ? {}
//             : { backgroundColor: "#192437" }
//         }
//       >
//         <div className="headerWrapper">
//           <div className="headerLogo">
//             <div className="headerh3" onClick={() => handleNav("/")}>
//               {/* Asian Pacific Express */}
//               <img src="/icons/APE2.png" alt="" className="max-[700px]:w-[100px]" />
//             </div>
//           </div>
//           <div className="headerNavs">
//             <p className="headerNavsText" onClick={() => handleNav("/")}>
//               Home
//             </p>
//             <p className="headerNavsText aboutUsHover" onClick={handleTrack}>
//               Track
//             </p>
//             <p className="headerNavsText aboutUsHover" onClick={handleAbout}>
//               About Us
//             </p>
//             <p className="headerNavsText aboutUsHover" onClick={handleService}>
//               Our Services
//             </p>
//             <p className="headerNavsText" onClick={() => handleNav("/contact")}>
//               Contact Us
//             </p>
//           </div>
//           <div className="flex gap-4 justify-center">
//             <div className="headerButton">
//               {/* <button className="headerbtn hover:bg-orange-400" onClick={()=>handleNav("/product")}>Buy Product</button> */}
//               <div
//                 className="relative"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <FaUser className="text-[#FF6600] cursor-pointer" size={24} />
//                 {showDropdown && (
//                   <div
//                     ref={dropdownRef}
//                     className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50"
//                     onMouseDown={handleMouseDown}
//                     style={{ cursor: "move" }}
//                   >
//                     <p className="text-gray-600">
//                       Welcome to Asian Pacific Express!
//                     </p>
//                     <p className="text-center my-2 text-gray-600">
//                       continue with:
//                     </p>
//                     <div className="flex justify-center space-x-4 my-2">
//                       <FaGoogle className="cursor-pointer text-xl text-gray-700" />
//                       <FaTwitter className="cursor-pointer text-xl text-gray-700" />
//                     </div>
//                     <p className="text-xs text-gray-500 text-center mt-2">
//                       By signing in via social media, I agree to the Asian
//                       Pacific Express Free Membership Agreement and Privacy
//                       Policy, and to receive emails about the platform’s
//                       products and services.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="HeaderMenu" onClick={() => setMenuPop(true)}>
//               <HiOutlineMenuAlt4 />
//             </div>
//           </div>
//         </div>
//       </div>
//       {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
//     </>
//   );
// };

// export default Header;
