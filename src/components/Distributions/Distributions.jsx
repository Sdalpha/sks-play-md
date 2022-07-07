import React from "react";
import "./Distributions.css";
import ap from "../../asset/ap.png";
// Stores logo
import r1 from "../../asset/logo/gana.png"
import r2 from "../../asset/logo/amazon.png"
import r3 from "../../asset/logo/hungama.png"
import r4 from "../../asset/logo/spoti.png"
import r5 from "../../asset/logo/resso.png"
import r6 from "../../asset/logo/savan.png"
import r7 from "../../asset/logo/apple.png"
import r8 from "../../asset/logo/tt.png"
import r9 from "../../asset/logo/wink.png"
import r10 from "../../asset/logo/ytm.png"
import r11 from "../../asset/logo/soundcloud.png"
import r12 from "../../asset/logo/pandora.png"
import r13 from "../../asset/logo/napstar.png"
import r14 from "../../asset/logo/audible.png"
//telecoms logo
import t1 from "../../asset/telicom/airtel.png"
import t2 from "../../asset/telicom/bsnl.png"
import t3 from "../../asset/telicom/jio.png"
import t4 from "../../asset/telicom/vi.png"
import Sectionb from "./Sectionb";
function Distributions() {
  return (
    <>
    <section id="distributions">
      <div className="container">

        {/* =============FIRST ROW================= */}

        <div className="row firstRow my-2">
          
          <div className="col-lg-6 col-sm-12 left">
              <div className="upper my-2">
                <img data-aos="fade-right" src={ap} alt="" />
              </div>
              <div className="lower">
                <div className="logo-container">
                <ul className="store-row">
                    <li><img data-aos="zoom-in" src={r1} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r2} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r3} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r4} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r5} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r6} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r7} alt="" /></li>
                </ul>
                <ul className="store-row">
                    <li><img data-aos="zoom-in" src={r8} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r9} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r10} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r11} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r12} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r13} alt="" /></li>
                    <li><img data-aos="zoom-in" src={r14} alt="" /></li>
                </ul>
                </div>
                
              </div>
          </div>

        <div className="col-lg-6 col-sm-12 right-text">
            
              <h1>Spread your</h1>
              <h3>Music Worldwide</h3>
              <div>
                <button className="sks-btn my-3">Get Started</button>
            </div>

          </div>
        </div>

        {/* ============2nd row=============== */}

        <div className="row secondRow my-2">
          <div className="col-lg-6 col-sm-12 left-text">
        
              <h1>Caller Tune</h1>
              <h3>Facilities for india</h3>
              <div>
                <button className="sks-btn my-3">Get Started</button>
              </div>
      
          </div>

          <div className="col-lg-6 col-sm-12 right">

            <div className="logo-container">
                 <ul className="telecom">
                   <li><img data-aos="zoom-in" src={t1} alt="" /></li>
                   <li><img data-aos="zoom-in" src={t2} alt="" /></li>
                   <li><img data-aos="zoom-in" src={t3} alt="" /></li>
                   <li><img data-aos="zoom-in" src={t4} alt="" /></li>
                 </ul>
            </div>

          </div>
            
  
        </div>
      </div>
    </section>
      <div className="container-flude">
      <Sectionb/>
      </div>
    </>
  );
}

export default Distributions;
