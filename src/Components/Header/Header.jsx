import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import HeaderBurgerPopUp from "./HeaderBurgerPopUp";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaGoogle, FaTwitter } from "react-icons/fa";
import "../../Style/header.css";
import axios from "axios";

const Header = () => {
  const [menuPop, setMenuPop] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [userprofilePicture, setUserprofilePicture] = useState(null);

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
    navigate("/company");
  };
  const handleService = () => {
    setAboutHover(false);
    setServicesHover(true);
    navigate("/offshore");
  };
  const handleNav = (val) => {
    if (val === "/product") {
      navigate("/product");
    } else if (val === "/") {
      navigate("/");
    } else if (val === "/contact") {
      navigate("/contact");
    }
  };

  const handleTrack = () => {
    navigate("/track");
  };

  const handleoogle = () => {
    // const url = "https://asianpacificexpress-api.onrender.com/auth/google/success"
    return(
      <a href={url}></a>
    )
  }

  // useEffect(() => {
  //   const handleAuthentication = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://asianpacificexpress-api.onrender.com/auth/google/success",
  //         {
  //           withCredentials: true, // Important for cookie-based authentication
  //         }
  //       );

  //       if (response.data && response.data.data) {
  //         // Assuming the user data is in response.data.data
  //         const user = response.data.data;

  //         // Store user data in local storage or a context
  //         localStorage.setItem("user", JSON.stringify(user));
  //         setUserprofilePicture(user.profilePicture.url);

  //         // Redirect to the homepage
  //         navigate("/"); // Change to your actual homepage route
  //       } else {
  //         // Redirect to login page on failure
  //         navigate("/login"); // Adjust this route as necessary
  //       }
  //     } catch (error) {
  //       console.error("Error during authentication:", error.message);
  //       navigate("/login"); // Redirect to login page on error
  //     }
  //   };

  //   handleAuthentication();
  // }, [navigate]);

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
              <img
                src="/icons/APE2.png"
                alt=""
                className="max-[700px]:w-[100px]"
              />
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
                {userprofilePicture ? (
                  <img
                    src={userprofilePicture}
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
                      <div>
                        <FaGoogle className="cursor-pointer text-xl text-gray-700" />
                      </div>
                      <FaTwitter className="cursor-pointer text-xl text-gray-700" />
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

// import { useEffect, useRef, useState } from "react";
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
// import axios from "axios";

// const Header = () => {
//   const [aboutHover, setAboutHover] = useState(false);
//   const [servicesHover, setServicesHover] = useState(false);
//   const [menuPop, setMenuPop] = useState(false);
//   const { pathname } = useLocation();
//   const nav = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const timeoutRef = useRef(null);
//   const [userprofilePicture, setUserprofilePicture] = useState(null);

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

//   useEffect(() => {
//     const handleAuthentication = async () => {
//       try {
//         const response = await axios.get('https://asianpacificexpress-api.onrender.com/auth/google/success', {
//           withCredentials: true // Important for cookie-based authentication
//         });

//         if (response.data && response.data.data) {
//           // Assuming the user data is in response.data.data
//           const user = response.data.data;

//           // Store user data in local storage or a context
//           localStorage.setItem('user', JSON.stringify(user));

//           // Redirect to the homepage
//           nav('/'); // Change to your actual homepage route
//         } else {
//           // Redirect to login page on failure
//           nav('/'); // Adjust this route as necessary
//         }
//       } catch (error) {
//         console.error('Error during authentication:', error.message);
//         nav('/'); // Redirect to login page on error
//       }
//     };

//     handleAuthentication();
//   }, [nav]);

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
//               <img
//                 src="/icons/APE2.png"
//                 alt=""
//                 className="max-[700px]:w-[100px]"
//               />
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
//               <div
//                 className="relative"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {userprofilePicture ? (
//                   <img
//                     src={userprofilePicture}
//                     alt="User"
//                     className="cursor-pointer rounded-full"
//                     width={24}
//                     height={24}
//                   />
//                 ) : (
//                   <FaUser className="text-[#FF6600] cursor-pointer" size={24} />
//                 )}
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
//                       Continue with:
//                     </p>
//                     <div className="flex justify-center space-x-4 my-2">
//                      <a href="https://asianpacificexpress-api.onrender.com/googlelogin">
//                      <FaGoogle
//                         className="cursor-pointer text-xl text-gray-700"
//                         // onClick={handleGoogleLogin}
//                       />
//                      </a>
//                       <FaTwitter
//                         className="cursor-pointer text-xl text-gray-700"
//                         // onClick={handleTwitterLogin}
//                       />
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
