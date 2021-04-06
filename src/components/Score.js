import React from "react";
import "../ css/Score.css";
const Score = () => {
  return (
    <>
      <div className='section-container'>
        <div className='you-choose'>
          Henry choose: <span>Anne Boleyn</span>
        </div>

        <div className='your-score'>
          His Score: <span>02</span>
        </div>
      </div>
      <div className='section-container-2'>
        <div className='you-choose'>
          You choose: <span>Anne Boleyn</span>
        </div>

        <div className='your-score'>
          Your Score: <span>02</span>
        </div>
      </div>
    </>
  );
};

export default Score;
