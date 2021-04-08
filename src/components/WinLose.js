import React, { useState, useEffect } from "react";
import "../ css/WinLose.css";
import { Link } from "react-router-dom";
import { useProductsContext } from "../Context";
const WinLose = () => {
  const {
    round,
    yourScore,
    henryScore,
    setMsg,
    msg,
    setNewGame,
    saveRecord,
    record,
  } = useProductsContext();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (round > 9) {
      setHidden(false);

      setMsg();
    }
  }, [round]);

  useEffect(() => {
    localStorage.setItem("record", JSON.stringify(record));
  }, [record]);
  const playAgain = () => {
    setHidden(true);
    saveRecord();
    setNewGame();
  };
  const backHome = () => {
    saveRecord();
  };

  return (
    <div className={hidden ? "game-container-hidden" : "game-container"}>
      <div className='winner-info-container'>
        <div className='game'>{msg}</div>
        <div className='score'>Henry Scored:{henryScore}</div>
        <div className='score'>You Scored:{yourScore}</div>
        <button className='game-btn' onClick={playAgain}>
          Play Again
        </button>

        <Link to='/' className='link-btn' onClick={backHome}>
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default WinLose;
