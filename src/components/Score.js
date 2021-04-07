import React from "react";
import "../ css/Score.css";
import { useProductsContext } from "../Context";
import People2 from "../asset/People2";
const Score = () => {
  const {
    henryScore,
    henryChoice,
    yourScore,
    yourChoice,
  } = useProductsContext();
  return (
    <>
      <div className='section-container'>
        <div className='you-choose'>
          Henry choose: <span>{People2[Number(henryChoice)].name}</span>
        </div>

        <div className='your-score'>
          His Score: <span>{henryScore}</span>
        </div>
      </div>
      <div className='section-container-2'>
        <div className='you-choose'>
          You choose: <span>{People2[Number(yourChoice)].name}</span>
        </div>

        <div className='your-score'>
          Your Score: <span>{yourScore}</span>
        </div>
      </div>
    </>
  );
};

export default Score;
