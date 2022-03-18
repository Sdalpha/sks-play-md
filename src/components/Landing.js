import React from 'react'
import '../App.css';
import image from '../asset/hero-img.png';
export default function Landing() {
  return (
    <div>
      <div className="container-fluid">
          <div className="row hero-row">
              <div className="col-6 hero-left mx-auto my-auto col-lg-6 col-12">
                    <h1>Saal Kather Sajaru</h1>
                    <h3>Music Distribution</h3>
                    <button className="sks-btn" href="/">Get Sarted</button>
              </div>
              <div className="col-6 hero-right col-xl-6 col-12 p-0">
                            <img src={image} alt="hero right img-fluid" />
              </div>
          </div>
          <div className="vector-01">
          <svg width="1920" height="652" viewBox="0 0 1920 652" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.5245L97.3333 90.9012C194.667 161.495 389.333 301.465 584 301.465C778.667 301.465 973.333 161.495 1168 79.9469C1362.67 -2.81818 1557.33 -25.9437 1752 32.4787C1946.67 90.9012 2141.33 230.872 2238.67 301.465L2336 372.059V652H2238.67C2141.33 652 1946.67 652 1752 652C1557.33 652 1362.67 652 1168 652C973.333 652 778.667 652 584 652C389.333 652 194.667 652 97.3333 652H0V21.5245Z" fill="url(#paint0_linear_317_360)"/>
<defs>
<linearGradient id="paint0_linear_317_360" x1="1168" y1="732.5" x2="1146.99" y2="263.001" gradientUnits="userSpaceOnUse">
<stop stop-color="#4ECB71"/>
<stop offset="1" stop-color="#0099FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

          </div>
      </div>
    </div>
  )
}
