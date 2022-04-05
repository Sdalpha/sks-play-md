import React from "react";
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
        <div className="row card-row">
          <div className="col-lg-4 col-sm-12 col">
            <div className="card">
              

              <div className="card-body">
                <h5 className="card-title">Basic</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn sks-btn text-black">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col">
            <div className="card">
              

              <div className="card-body">
                <h5 className="card-title">Standerd</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn sks-btn text-black">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card">
              

              <div className="card-body">
                <h5 className="card-title">Priemiam</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn sks-btn text-black">
                  Buy Now
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
