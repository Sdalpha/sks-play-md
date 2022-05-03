import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import logo from "../../asset/logo_main.png"
import Navsm from "./Navsm";
export default function Navbar() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img src={logo} alt="" width={150} class="d-inline-block align-text-top"/>
          </a>
          <span className="beta">Beta Version</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page"  to='/' style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to='/distribution' style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}>
                  Distributions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/pricing' style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}>
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/promotion" style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}>
                  Promotion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" style={({isActive})=>{return{color: isActive ? 'rgba(47, 203, 110, 1)' : 'white'}}}>
                  About & Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="sks-btn" href="https://www.youtube.com/channel/UCMvqVvcl8Yl8qNJBv2kaMuA?sub_confirmation=1" target='_'>
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <Navsm/>
    </>
  );
}
