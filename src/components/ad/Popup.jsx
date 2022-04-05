import React, {useState} from 'react'
import {MdCancel} from "react-icons/md";
import ad from "../../asset/ad/ad1.png"
import "./Popup.css"
function Popup() {

  const [action,setAction] = useState("");

  window.onload = ()=> {
      setTimeout(() => {
        setAction("visible");
      }, 3000);
  }
  console.log(action);
  return (
    <div className='ad-bg' style={{visibility: action }}>
        <div className="ad-body" >
          <img src={ad} alt="" />
          <button onClick={()=>setAction("hidden")} ><MdCancel/></button>
        </div>
    </div>
  )
}

export default Popup
