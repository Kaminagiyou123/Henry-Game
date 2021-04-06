import React from "react";
import People2 from "../asset/People2";
import "../ css/ComputerSide.css";
const ComputerSide = () => {
  return (
    <div className='computerside-container'>
      {People2?.map((person) => {
        const { img2, name, number } = person;
        return (
          <div key={number} className='myside-img-container'>
            <div className='my-name'>{name}</div>{" "}
            <img src={img2} alt={name} className={`myside-img`} />
          </div>
        );
      })}
    </div>
  );
};

export default ComputerSide;
