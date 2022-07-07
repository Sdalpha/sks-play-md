import React from "react";
import { BsPatchCheckFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import promo from '../../asset/ad/JLO.jpg';
import "./Pricing.css";
function Pricing() {
  return (
    <section id="pricing">
      <div className="container pricing-container">
        <div className="row pricing-title">
          <div className="col-lg-12">
          <h1>Pricing</h1>
          <p> Our Lite and Premium plans offer the most flexible pricing for music distribution </p>
          </div>
        </div>
        <div className="row card-row text-center">
          <div className="col-lg-4 col-sm-12 col">
            <div className="card  " data-aos="flip-right">
              

              <div className="card-body">
                <h5 className="card-title">Basic</h5>
                <p className="card-text">
                <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> No Yearly Fees.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Lifetime Royalty.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Revenue Share 50% </p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Piracy Protection.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Worldwide Monetization.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span>  Song Released on All Major Stores Worldwide.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Covered All Indian Domestic, Bangaldeshi Domestic & International Apps.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Caller Tune in India & Bangladesh.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span>Available in TikTok, Facebook, Facebook Shorts, Instagram, Instagram Reels, YouTube, YouTube Shorts etc.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Free Promo Link.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span>Free Promotional Content.</p>
                 
                </p>
                <a href="/" className="btn sks-btn text-black">
                  <BiRupee/>199
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col">
            <div className="card  " data-aos="flip-right">
              

              <div className="card-body">
                <h5 className="card-title">Jangalmahal Lonching</h5>
                <p className="card-text">
                  Distribute Your Music At Rs. 1/-
                </p>
                <img className="card-img-top mb-3" src={promo} alt="" />
                <a href="/" className="btn sks-btn text-black">
                 Get The Offer
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card " data-aos="flip-right">
              

              <div className="card-body">
                <h5 className="card-title">Premium</h5>
                <p className="card-text">
                 {/* code here */}
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> No Yearly Fees.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Lifetime Royalty.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Revenue Share 70%</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Piracy Protection.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Worldwide Monetization.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span>  Song Released on All Major Stores Worldwide.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Covered All Indian Domestic, Bangaldeshi Domestic & International Apps.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Caller Tune in India & Bangladesh.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span>Available in TikTok, Facebook, Facebook Shorts, Instagram, Instagram Reels, YouTube, YouTube Shorts etc.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span> Free Promo Link.</p>
                 <p className="card-line"> <span className="icon-c"><BsPatchCheckFill/></span>Free Promotional Content.</p>
                 



                </p>
                <a href="/" className="btn sks-btn text-black">
                <BiRupee/>399
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
