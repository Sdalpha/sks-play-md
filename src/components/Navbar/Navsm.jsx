import React from 'react'
import "./Navbar"
import {NavLink} from "react-router-dom";
import { FaHome,FaHeadphonesAlt,FaCartPlus,FaInfoCircle} from "react-icons/fa";
import {IoShareSocialSharp} from "react-icons/io5";

function Navsm() {
  return (
    <div className='mobile-nav'>
      <ul className='my-2'>
            <div className="main">
              <div className="upper">
              <li><NavLink to="/" style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}><FaHome/></NavLink></li>
              </div>
              <div className="lowe">
                    <p>Home</p>
              </div>
            </div>
            <div className="main">
              <div className="upper">
              <li><NavLink to="/distribution" style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}><FaHeadphonesAlt/></NavLink></li>
              </div>
              <div className="lowe">
                    <p>Distribution</p>
              </div>
            </div><div className="main">
              <div className="upper">
              <li><NavLink to="/pricing" style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}><FaCartPlus/></NavLink></li>
              </div>
              <div className="lowe">
                    <p>pricing</p>
              </div>
            </div><div className="main">
              <div className="upper">
              <li><NavLink to="/promotion" style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}><IoShareSocialSharp/></NavLink></li>
              </div>
              <div className="lowe">
                    <p>promotion</p>
              </div>
            </div><div className="main">
              <div className="upper">
              <li><NavLink to="/about" style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}><FaInfoCircle/></NavLink></li>
              </div>
              <div className="lowe">
                    <p>About</p>
              </div>
            </div>
      </ul>
    </div>
  )
}

export default Navsm
