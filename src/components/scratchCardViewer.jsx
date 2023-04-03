import React, { useState } from 'react';
import "./scratchCard.css";
import ScratchCard from "react-scratchcard";
import couponCover from "./mazed_logo.jpg";
import QrCode from './qrGenerator';


function ScratchCardViewer(props) {
    const [scratchedText, setScratchedText] = useState("");
    const [scratchProduct,setScratchedProduct] = useState("");
    const [scratchInstruction, setScratchedInstruction] = useState("");
    const handleScratchComplete = () => {
      console.log("The card is now clear!");
        setScratchedText(<QrCode CouponCode = {props.Product.CouponCode}/>);
        setScratchedProduct(`Congratulations! You have won ${props.Product.Product}`);
        setScratchedInstruction("Show the Code to Barista to claim your Coffee!")
    };
  
    const settings = {
      width: 500,
      height: 500,
      image: couponCover,
      finishPercent: 50,
      onComplete: () => handleScratchComplete()
    };
    return (
      <div className="ScratchApp">
        <ScratchCard {...settings}>
            {scratchProduct}
            {scratchedText}
            {scratchInstruction}
        </ScratchCard>
      </div>
    );
}

export default ScratchCardViewer;