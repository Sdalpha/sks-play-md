import React,{useState} from 'react'
import './Footer.css'
import sksLogo from "../../asset/logo_main.png"
import {MdSend} from "react-icons/md"
import { FaFacebookSquare,FaYoutube,FaInstagram,FaWhatsappSquare } from 'react-icons/fa';
import {db} from '../../firebase.js'
import {collection,addDoc} from "firebase/firestore";
function Footer() {

    const [mail,setMail] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await addDoc(collection(db,'subscriptions'),{
            
            mail:mail,
            
          })
          .then(()=>{
            alert('message has been submited ');
          })
          .catch((error) =>{
            alert(error.message);
          });
          setMail('');
    }


  return (
    <div id='footer'>
       <footer className="footer-section">
        <div className="container">
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={sksLogo} className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>"আমরা একটা দৃঢ় পাটাতন বানানোর চেষ্টা করছি, যেখানে বাঙালিয়ানা ও জঙ্গলমহলের ভাষা,ঐতিহ্য, সংস্কৃতিকে একই টবে রেখে নতুন কোনো ধারার অঙ্কুরোরদগম করা যায় ।"</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/saalkathersajaru/"><FaFacebookSquare/></a>
                                <a href="/"><FaYoutube/> </a>
                                <a href="/"><FaInstagram/> </a>
                                <a href="https://wa.link/vbqy6a"><FaWhatsappSquare/></a>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">about</a></li>
                                <li><a href="/">services</a></li>
                                <li><a href="/">portfolio</a></li>
                                <li><a href="/">Contact</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Our Services</a></li>
                                <li><a href="/">Expert Team</a></li>
                                <li><a href="/">Contact us</a></li>
                                <li><a href="/">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form onSubmit={handleSubmit}>
                                    <input type="email" placeholder="Email Address" value={mail} onChange={(e)=> setMail(e.target.value)}/>
                                    <button><MdSend/></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <a href="/">SaalKathersajaru</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Terms</a></li>
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Policy</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
