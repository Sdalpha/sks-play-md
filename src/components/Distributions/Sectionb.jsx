import React from 'react'
import "./Sectionb.css"
import secb from "../../asset/secb.png"
function Sectionb() {
  return (
   <>
            <section id="about">
        <div className="about_row">



            <div className="about_left_col">
                <h3>YouTube & Facebook Content ID</h3>

                <p>distributing your release to Facebook will mean that videos on Facebook which utilise all or part your audio within it will be claimed on, which will generate you earnings. </p>
                <a href="/" className="c_btn" >Explore More</a>
            </div>



            <div className="about_right_col">
                <img src={secb} alt=""/>

            </div>

        </div>

    </section>
   </>
  )
}

export default Sectionb
