import { useRef, useState } from "react";
import "../../Style/header.css";
import DropDown from "./DDAboutUs";
import DDOurServices from "./DDOurServices";
import HeaderBurgerPopUp from "./HeaderBurgerPopUp";
import { useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { CSSProperties } from "react";
const Header = () => {
  const [aboutHover, setAboutHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [menuPop, setMenuPop] = useState(false);
  const { pathname } = useLocation();
  const nav = useNavigate()
  console.log(pathname);

  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleProfileClick = () => {
    navigate('/login');
  };

  const handleMouseDown = (e) => {
    const dropdown = dropdownRef.current;
    const shiftX = e.clientX - dropdown.getBoundingClientRect().left;
    const shiftY = e.clientY - dropdown.getBoundingClientRect().top;

    const onMouseMove = (e) => {
      dropdown.style.left = `${e.clientX - shiftX}px`;
      dropdown.style.top = `${e.clientY - shiftY}px`;
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
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
  };
  const handleService = () => {
    setAboutHover(false);
    setServicesHover(true);
  };
  const handleNav =(val)=>{
    if (val==="/product"){
      nav("/product")
    }else  if (val==="/"){
      nav("/")
    }else  if (val==="/contact"){
      nav("/contact")
    }
  }
  return (
    <>
      <div
        className="headerContainer"
        style={pathname === "/" || pathname === "/contact" ? {}:{ backgroundColor: "#192437" }}
      >
        <div className="headerWrapper">
          <div className="headerLogo">
            <h3 className="headerh3" onClick={()=>handleNav("/")}>Asian Pacific Express</h3>
          </div>
          <div className="headerNavs">
            <p className="headerNavsText" onClick={()=>handleNav("/")}>Home</p>
            <p
              className="headerNavsText aboutUsHover"
              onMouseOver={handleAbout}
            >
              About Us
              {aboutHover && <DropDown setAboutHover={setAboutHover} />}
            </p>
            <p
              className="headerNavsText aboutUsHover"
              onMouseOver={handleService}
            >
              Our Services
              {servicesHover && (
                <DDOurServices setServicesHover={setServicesHover} />
              )}
            </p>
            <p className="headerNavsText" onClick={()=>handleNav("/contact")}>
              Contact Us
            </p>
          </div>
          <div className="headerButton">
            {/* <button className="headerbtn hover:bg-orange-400" onClick={()=>handleNav("/product")}>Buy Product</button> */}
            <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaUser
              className="text-[#FF6600] cursor-pointer"
              size={24}
              onClick={handleProfileClick}
            />
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-50"
                onMouseDown={handleMouseDown}
                style={{ cursor: 'move' }}
              >
                <p className="text-gray-600">Welcome to Asian Pacific Express!</p>
                <button
                  onClick={handleProfileClick}
                  className="bg-[#FF6600] text-white py-2 px-4 rounded-md w-full my-2"
                >
                  Sign In
                </button>
                <p className="text-center my-2 text-gray-600">Or, continue with:</p>
                <div className="flex justify-center space-x-4 my-2">
                  <FaGoogle className="cursor-pointer text-xl text-gray-700" />
                  <FaLinkedin className="cursor-pointer text-xl text-gray-700" />
                  <FaTwitter className="cursor-pointer text-xl text-gray-700" />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  By signing in via social media, I agree to the Asian Pacific Express Free Membership Agreement and Privacy Policy, and to receive emails about the platform’s products and services.
                </p>
               
              </div>
            )}
          </div>
          </div>
          <div className="HeaderMenu" onClick={() => setMenuPop(true)}>
            <img src="/icons/Menu.png" alt="" />
          </div>
        </div>
      </div>
      {menuPop ? <HeaderBurgerPopUp setMenuPop={setMenuPop} /> : null}
    </>
  );
};

export default Header;
