import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import HeaderBurgerPopUp from "./HeaderBurgerPopUp";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaGoogle, FaTwitter } from "react-icons/fa";
import "../../Style/header.css";
import axios from "axios";
import { TbToolsKitchen2Off } from "react-icons/tb";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const [menuPop, setMenuPop] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [userprofilePicture, setUserprofilePicture] = useState(null);
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  console.log(token);

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
    navigate("/company");
  };
  const handleService = () => {
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

  const handleLogout = () => {  
    localStorage.removeItem("personInfo");
    window.location.href =
      "https://asianpacificexpress-api.onrender.com/logout";
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("personInfo"));

    if (userData) {
      setUserprofilePicture(userData?.profilePicture.url);
    }
    if (!token) {
      return;
    }
    const handleAuthentication = async () => {
      try {
        const response = await axios.get(
          "https://asianpacificexpress-api.onrender.com/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data && response.data.data) {
          const user = response.data.data;
          console.log(user);
          localStorage.setItem("personInfo", JSON.stringify(user));
          setUserprofilePicture(user.profilePicture.url);
        }
      } catch (error) {
        console.error("Error during authentication:", error.message);
      }
    };

    // const timer = setTimeout(() => {
    //   handleAuthentication();
    // }, 10000);

    // return () => clearTimeout(timer);
    handleAuthentication();
  }, [token]);

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
                    alt=""
                    className="cursor-pointer rounded-full"
                    width={50}
                    height={50}
                  />
                ) : (
                  <FaUser className="text-[#FF6600] cursor-pointer" size={24} />
                )}
                {showDropdown &&
                  (userprofilePicture ? (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-2 w-max bg-white border rounded-lg shadow-lg p-3 z-[99] cursor-pointer"
                      onClick={handleLogout}
                    >
                      <div className="text-gray-600 flex gap-2 items-center">
                        {" "}
                        <MdLogout />
                        Logout
                      </div>
                    </div>
                  ) : (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-[99]"
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
                        <a href="https://asianpacificexpress-api.onrender.com/googlelogin">
                          <FaGoogle className="cursor-pointer text-xl text-gray-700" />
                        </a>
                        <a href="https://asianpacificexpress-api.onrender.com/twitterlogin">
                        <FaTwitter className="cursor-pointer text-xl text-gray-700" />
                        </a>
                        
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        By signing in via social media, I agree to the Asian
                        Pacific Express Free Membership Agreement and Privacy
                        Policy, and to receive emails about the platform’s
                        products and services.
                      </p>
                    </div>
                  ))}
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
