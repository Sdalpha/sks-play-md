import React, {useState} from "react";
import { FaFacebookSquare,FaYoutube,FaInstagram,FaWhatsappSquare,FaPhoneAlt } from 'react-icons/fa';
import {MdMail,MdOutlineLocationOn} from "react-icons/md"
import "./About.css";
import {db} from '../../firebase.js'
import {collection,addDoc} from "firebase/firestore";

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
