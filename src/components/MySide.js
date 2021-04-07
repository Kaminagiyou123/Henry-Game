import React, { useEffect } from "react";
import People2 from "../asset/People2";
import "../ css/MySide.css";
import { useProductsContext } from "../Context";

const MySide = () => {
  const {
    round,
    youPick,
    yourChoice,
    henryPick,
    winLoseTie,
    addRound,
  } = useProductsContext();
  useEffect(() => {
    winLoseTie();
  }, [round]);
  return (
    <div className='myside-container'>
      {People2?.map((person) => {
        const { img, name, number } = person;
        return (
          <div key={number} className='myside-img-container'>
            <div className='my-name'>{name}</div>{" "}
            <img
              src={img}
              alt={name}
              className={
                Number(yourChoice) === number
                  ? `myside-img-active`
                  : `myside-img`
              }
              onClick={() => {
                youPick(number);
                henryPick();
                addRound();
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MySide;
