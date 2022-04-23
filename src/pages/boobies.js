import * as React from "react";
import bg from '../images/AdobeStock_234183776.jpg'
// markup

const card = {
  position:"absolute", 
  width: "60vmin", 
  height: "60vmin", 
  top: "15vmin", 
  left: "15vmin", 
  backgroundImage: "rgba(255,255,255, .5)", 
  border: "1px solid rgba(255,255,255)",
  padding: "6vmin 4vmin",
  textAlign: 'center', 
}

const copy = {
  fontWeight: "bold",
  fontFamily:"sans-serif",

}

const cta = {
  backgroundColor: "darkslategray",
  padding: "2vmin 4vmin",
  color: "white",
  fontWeight: "bold",
  fontFamily:"sans-serif",
}

const Background = () => {
  return (
    <div style={{ 
      height: "100vmin", 
      backgroundImage: `url(${bg})`,
      backgroundSize: `cover`
    }}>
      <div style={card}>
        <h1 style={{fontFamily: "sans-serif", fontWeight: "bold"}}>Mount Grace Spa</h1>
        <div style={copy}><p style={{margin: "4vmin 0"}}>A hilltop offering spectacular sweeping views of the beautiful Magaliesberg mountains...</p></div>
        <div style={cta}>Find out more now</div>
      </div>
    </div>
    );
  };
  
  export default Background;
