import React from "react";
import People2 from "../asset/People2";
import "../ css/MySide.css";

const MySide = () => {
  return (
    <div className='myside-container'>
      {People2?.map((person) => {
        const { img, name, number } = person;
        return (
          <div key={number} className='myside-img-container'>
            <div className='my-name'>{name}</div>{" "}
            <img src={img} alt={name} className={`myside-img`} />
          </div>
        );
      })}
    </div>
  );
};

export default MySide;
