import React from 'react'
import { FaChessKing,FaSpotify,FaFacebook } from 'react-icons/fa';
import './Promotion.css'
import promo1 from "../../asset/promo-1.svg"
import promo2 from "../../asset/promo-2.svg"
import promo3 from "../../asset/promo-3.svg"
import {Link} from "react-router-dom"
function Promotion() {
  return (
    <section id='promotion'>
          <header className="head">
                <h2  data-aos="fade-down">Promote Your Music through SKS Distribution</h2>
                <p>You are the expert in creating music,
	we are experts in getting your music out to a wider audience and building
	your music career.
</p>
          </header>

          
         <div className="promo-body my-5">
           <div className="promo-card">
             <span className="promo-icon"><FaChessKing/></span> <br />
           Promote Your Music through SKS Distribution
           </div>
           <div className="promo-card">
           <span className="promo-icon"><FaFacebook/></span> <br />
           Get Viral On <br /> Social Media
           </div>
           <div className="promo-card">
           <span className="promo-icon"><FaSpotify/></span> <br />
           Promote Your Music On Audio Platforms
           </div>
         </div>

         
         <div className="promo-tag my-5" >
           <div className="left"  data-aos="fade-right">
             <img src={promo1} alt="" />
           </div>
           <div className="right"  data-aos="fade-left">
             <h3>Promote Your Music through SKS Distribution</h3>
             <p>By using our free Social Media Promotional Support Service, artists can
	reach new fans and engage new audiences.</p>
        <Link className="sks-btn" to="/pricing#pricing">Get Sarted</Link>
           </div>
         </div>
         <div className="promo-tag my-5" >
           <div className="left"  data-aos="fade-right">
             <h3>Get Viral On Social Media</h3>
           <p>Whenever your fans search your song for make a Facebook Reels,
		Instagram Reels, YouTube Shorts , TikTok videos They can find your
		song immediately.</p>
    <Link className="sks-btn" to="/pricing#pricing">Get Sarted</Link>
           </div>
           <div className="right"  data-aos="fade-left">
  <img src={promo2} alt="" />
           </div>
         </div>
         <div className="promo-tag my-5" >
           <div className="left"  data-aos="fade-right">
             <img src={promo3} alt="" />
           </div>
           <div className="right"  data-aos="fade-left">
             <h3>Promote Your Music On Audio Platform</h3>
             <p>In addition to our promotional installations
	through song pitching, you can also advertise your song on 
	majors streaming platforms like Gaana, Wynk Music, JioSaavn, spotify etc.
	This gets your song ranked up on those 
	platforms algorithm and helps you gain new fans and earn more.
</p>
<Link className="sks-btn" to="/pricing#">Get Sarted</Link>
           </div>
         </div>
    </section>
  )
}

export default Promotion
