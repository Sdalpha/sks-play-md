import React from 'react'

function Teamcard(props) {
  return (
    <>
    <div class="card" style={{width: "18rem", alignItems: "center"}}>
  <img src={props.url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-text">{props.name}</h5>
    <p>{props.desc}</p>
  </div>
    </div>
    </>
  )
}

export default Teamcard
