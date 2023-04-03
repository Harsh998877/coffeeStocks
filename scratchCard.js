import React from "react";
import ScratchCard from "react-scratchcard-v2";
import shrey from "shrey.jpg";

const App = () => {
  return (
    <div>
      <ScratchCard
        width={500}
        height={400}
        image={shrey}
        finishPercent={20}
        onComplete={() => console.log("complete")}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h1>Prize!!!!</h1>
        </div>
      </ScratchCard>
    </div>
  );
};

export default App;
