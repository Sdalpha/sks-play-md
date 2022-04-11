import React, {useState} from "react";
import { FaFacebookSquare,FaYoutube,FaInstagram,FaWhatsappSquare,FaPhoneAlt } from 'react-icons/fa';
import {MdMail,MdOutlineLocationOn} from "react-icons/md"
import "./About.css";
import {db} from '../../firebase.js'
import {collection,addDoc} from "firebase/firestore";
import sks from "../../asset/about-1.png"
import sksplayapp from "../../asset/sks-play-app.png"
import team from "./team"
import Teamcard from "./Teamcard";

function About() {


  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [msg,setMsg] = useState("");

  const handleSubmit = async(event) =>{
    event.preventDefault();
    await addDoc(collection(db,'contacts'),{
      name:name,
      email:email,
      msg:msg,
    })
    .then(()=>{
      alert('message has been submited ');
    })
    .catch((error) =>{
      alert(error.message);
    });
    setName('');
    setEmail('');
    setMsg('');
  }

  return (
    <>
    {/* SKS-ABOUT-SECTION============> */}
      <div className="container-fluide sks">
        <div className="row sks-row">
              <div className="col-lg-6 sks-left">
                <div>
                <h1>Saal Kather Sajaru</h1>
                <p>SKS(Saal Kather Sajaru) is a short film production house of bankura based on Jangalmahal.We are on a mission to introduce everyone to the language,culture amd heritage of Jangalmahal and above all Bangaliana through our platform.We also want to be the thorns of the road of all the negativity of our society.Within one year of time period we have created 7 short films,1 original song,1 cover song,1 comedy sketch and there is still a lot of creativity to present to you.So stay tuned and be subscribed to our you tube channel.</p>
                <button className="sks-btn-black" >Subscribe</button>
                </div>
              </div>
              <div className="col-lg-6 sks-right">
                {/* image */}
                <img src={sks} alt="" />
              </div>
        </div>
      </div>

    {/* SKSplay-ABOUT-SECTION============> */}


    <div className="container-fluide play-cont">
      <div className="row play-row">
        <div className="col-lg-6 play-left">
          {/* image */}
          <img src={sksplayapp} alt="" />
        </div>
        <div className="col-lg-6 play-right">
          {/* text */}
          <h1>sks play</h1>
          <p>SKS play is a online streaming and service platform of Saal Kather Sajaru where you can enjoy all of our content i.e. Short films,songs,comedy videoes at one platform.
          </p>
          <h3>Website Is Under Maintenance</h3>
        </div>
      </div>
    </div>


    {/* SKSplay-MD-ABOUT-SECTION============> */}



    <div className="container-fluide md-cont">
      <div className="row md-row">
        <h1>Saal Kather Sajaru</h1>
        <h2>Music Distribution & Record Label</h2>
        <p>SKS music distribution and record label is a music distribution company currently focusing on Jangalmahal area.Here you can label your music in very reasonable prices.
        </p>
        <div>
        <button className="sks-btn-black">Get Started</button>
        </div>
      </div>
    </div>

{/* ========= OUR TEAM-SECTION ============> */}

      <div className="container team-cont">
        <div className="row team-title">
          <h1>Our Team Members</h1>
        </div>
        <div className="row team-members">
          <div className="col-lg-3 ">
            <Teamcard url={team[0]} name="Satyajit Dutta" desc="Director, Cinematographer, Screenplay Writer, Editor & Developer (Tech Support)"/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[1]} name="Saswata Chowdhury" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[2]} name="Pritam Mallick" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[3]} name="Anirban Das" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[4]} name="Kasinath Mandal" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[5]} name="Sourav Singha" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[6]} name="Pritam Mandal" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[7]} name="Suvendu Mahata" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[8]} name="Sayak Deshmukh" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[9]} name="Mukul Saren" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          <div className="col-lg-3 ">
            <Teamcard url={team[10]} name="Subhadip Dutta" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi."/>
          </div>
          
          
        </div>
      </div>


    {/* <================CONTACT SECTION===============> */}
      <section className="contact-us">
      <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h1>contact</h1>
      <p>Fill free to contact with the team, our tech team will reply you as soon as possible.</p>
      <div className="links">
        <div className="link">
          <a className="icons-s" href="https://www.facebook.com/saalkathersajaru"  target="_" ><FaFacebookSquare/></a>
        </div>
        <div className="link">
          <a className="icons-s" href="https://www.youtube.com/channel/UCMvqVvcl8Yl8qNJBv2kaMuA?sub_confirmation=1" target="_" ><FaYoutube/></a>
        </div>
        <div className="link">
          <a className="icons-s" href="https://www.instagram.com/sks_production.official/?hl=en" target="_" ><FaInstagram/></a>
        </div>
        <div className="link">
          <a className="icons-s" href="https://wa.link/vbqy6a" target="_" ><FaWhatsappSquare/></a>
        </div>
        
      </div>
          <div className="address">
          <a href="tel:9734182775"><p><FaPhoneAlt/> +91 9734182775</p></a>
          <a href="/" target="_"><p><MdMail/> salkathersojaru@gmail.com</p></a>
          <p><MdOutlineLocationOn/>Ranibandh, Bnakura, West Bnegal</p>
          </div>
    </div>

    {/* ==================FORM SECTION=================== */}
    
      
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input type="text" name="sender" value={name} onChange={(event)=> setName(event.target.value)} required/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="email" value={email} onChange={(event)=> setEmail(event.target.value)} required/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="message" value={msg} onChange={(event)=> setMsg(event.target.value)} required></textarea>
          <label>Message:</label>
        </div>
        <button className="submit-btn sks-btn ">Send</button>  
      </form>
    </div>
  </div>
</section>
        
      </section>
    </>
  );
}

export default About;
