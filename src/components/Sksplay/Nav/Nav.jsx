import React from 'react'
import "./Nav.css"
import logo from "../../../asset/logo_main.png"
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
        <nav>
            <ul className='navlinks'>
                <li><a className='sks-btn' href="/">Subscribe</a></li>
                <li><img src={logo} alt="" width={150} class="d-inline-block align-text-top"/></li>
                <li><Link className='sks-btn' to="/music">Music Distribution</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav
