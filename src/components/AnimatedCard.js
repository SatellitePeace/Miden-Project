import CardATM from "../assets/images/cardATM.svg";
import Rectangle from "../assets/icons/smallScreenRectangle.svg";
import pattern from "../assets/icons/smallScreenPattern.svg";
import "./AnimatedCard.css";
import React from "react";

export default function AnimatedCard() {
  return (
   <>
    <img
    src={Rectangle}
    alt="Rectangle"
    style={{
      position: "absolute",
      bottom:0,
      width:"100%",
      padding:"0 1.5rem",
      zIndex:3,
    }}
    className="smallScreenDesign"
  />
   <img
            src={pattern}
            alt="pattern"
            style={{ 
            position: "absolute", 
            bottom: 0,    
            right: 0,
            left:0, 
            opacity:0.3,
            width:"100%",
            zIndex:1
          }}
            className="smallScreenPattern"  
          />
    <img
      className="updown-animation"
      src={CardATM}
      alt="ATM card"
      style={{
        width:"30rem",
        zIndex:4
    }}
    />
   </>
  );
}
