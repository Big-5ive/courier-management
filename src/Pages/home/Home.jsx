import React, { useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaBorderAll } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";
import { SlLogout } from "react-icons/sl";
import { GrUserAdmin } from "react-icons/gr";

const Home = ({props, one, two, three, name}) => {
  const [burgerMenu, setBurgerMenu] = useState(false)
  const nav = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("admindata")
    nav("/adminlogin")
  }
  return (
    <div className='adminparent'>
      <div className="adminhold">
        <div className="adminHead">
          <div className="headloggo">
            <GrUserAdmin color='orangered' fontSize={"30px"}/>
            <p>Admin</p>
          </div>
          <div className="headnav">
            {/* {name} */}
            <div className='navxx' style={{backgroundColor: one}} onClick={()=> nav("/allpackage")}>
              <h1>All packages</h1>
            </div>
            <div className='navxx' style={{backgroundColor: two}} onClick={()=> nav("/createpackage")}>
              <h1>Create a package</h1>
            </div>
            <div className='navxx' style={{backgroundColor: three}} onClick={()=> nav("/blockauser")}>
              <h1>Change user status</h1>
            </div>
            <aside className='navmap' style={{color: "white", fontSize: "20px", fontWeight: "600"}}>{name}</aside>
          </div>
          <div className="headset">
            <div onClick={handleLogOut}>
              <h1>logout</h1>
            </div>
            <div className='burger' onClick={()=> setBurgerMenu(!burgerMenu)}>
              <TiThMenu />
            </div>
          </div>
        </div>
        {
          burgerMenu ? 
          <div className="burgermenu">
            <div className="menulog" onClick={()=> {
              nav("/allpackage")
              setBurgerMenu(false)
            }}>
              <FaBorderAll />
              <p>All Packages</p>
            </div>
            <div className="menulog" onClick={()=> {
              nav("/createpackage")
              setBurgerMenu(false)
            }}>
              <MdCreateNewFolder />
              <p>Create a package</p>
            </div>
            <div className="menulog" onClick={()=> {
              nav("/blockauser")
              setBurgerMenu(false)
              }}>
              <TbStatusChange />
              <p>Change user ststus</p>
            </div>
            <div className="menulog" onClick={handleLogOut}>
              <SlLogout />
              <p>Log out</p>
            </div>
          </div>
          : null
        }
        <div className="adminbody">
          {props}
        </div>
      </div>
    </div>
  )
}

export default Home