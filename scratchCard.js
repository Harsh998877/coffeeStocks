import React from "react";
import "./styles.css";
import ScratchCard from "react-scratchcard";
import couponCover from "./card.jpg";

const { useState } = React;
export default function App() {
  const [scratchedText, setScratchedText] = useState("");
  const handleScratchComplete = () => {
    console.log("The card is now clear!");
    setScratchedText("Congratulations! You WON!");
  };

  const settings = {
    width: 300,
    height: 300,
    image: couponCover,
    finishPercent: 50,
    onComplete: () => handleScratchComplete()
  };
  return (
    <div className="App">
      <ScratchCard {...settings}>
        <div className="scratchedDiv">{scratchedText}</div>
      </ScratchCard>
    </div>
  );
}
