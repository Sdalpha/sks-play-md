
import React,{useState} from "react";
import "./SendDemo.css";
import {db} from '../../firebase.js'
import {collection,addDoc} from "firebase/firestore";
function SendDemo() {

    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [number,setNumber] = useState("");
    const [work,setPrevWork] = useState("");
    const [fb,setFb] = useState("");
    const [yt,setYt] = useState("");
    const [desc,setDesc] = useState("");
    const [link,setLink] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await addDoc(collection(db,'Demo'),{
            Name:name,
            Mail:mail,
            Phone_Number:number,
            Previous_work:work,
            Facebook:fb,
            YouTube:yt,
            Description:desc,
            Work_Link:link
        })
        .then(()=>{
            alert("Your Demo Has Been Submited 👍"); 
        })
        .catch((error)=>{
            alert(error.message);
        });
        setName('');
        setMail('');
        setNumber('');
        setPrevWork('');
        setFb('');
        setYt('');
        setDesc('');
        setLink('');
        
    }

  return (
    <section id="sendDemo">
      <div className="container">
        <div className="row title-row">
          <div className="col-lg-12  demo-title">
            <h1>Send Your Demo Music</h1>
            <p>
              you are in the right place. Let's submit your Demo here. <br /> We
              value your submition and we will make every effort to contact you
              as soon as possible.
            </p>
          </div>
        </div>
        <div className="row demo-form">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <p htmlFor="exampleInputEmail1" className="form-label">
                  Artist Name
                </p>
                <input
                  type="text"
                  
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
                
              </div>
              <div className="mb-3">
                <p htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </p>
                <input
                  type="mail"
                  value={mail}
                  onChange={(e)=> setMail(e.target.value)}
                  id="exampleInputPassword1"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <p htmlFor="exampleInputEmail1" className="form-label">
                  Contact Number
                </p>
                <input
                  type="text"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={number}
                  onChange={(e)=> setNumber(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleInputEmail1" className="form-label">
                  Previous Work Link (if any)
                </p>
                <input
                  type="text"
                  value={work}
                  onChange={(e)=> setPrevWork(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleInputEmail1" className="form-label">
                  Facebook Profile Link (if any)
                </p>
                <input
                  type="text"
                  value={fb}
                  onChange={(e)=> setFb(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleInputEmail1" className="form-label">
                  YouTube Channel Link (if any)
                </p>
                <input
                  type="text"
                  value={yt}
                  onChange={(e)=> setYt(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3">
                <p htmlFor="exampleInputEmail1" className="form-label">
                  Describe About Your Music
                </p>
                <textarea
                  type="text"
                  value={desc}
                  onChange={(e)=> setDesc(e.target.value)}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-5">
                <p htmlFor="exampleInputEmail1" className="form-label">
                  Upload Your Work On Google Drive And Paste The Link Here * <br/> (Only .mp3 and .wav format are acceptable)
                </p>
                <input
                  type="text"
                  className=""
                  value={link}
                  onChange={(e)=> setLink(e.target.value)}
                  aria-describedby="emailHelp"
                  required
                />
              
              </div>
              
              <button type="submit" className="btn sks-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendDemo;
