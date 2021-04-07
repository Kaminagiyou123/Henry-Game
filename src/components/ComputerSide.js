import React from "react";
import People2 from "../asset/People2";
import "../ css/ComputerSide.css";
import { useProductsContext } from "../Context";
const ComputerSide = () => {
  const { henryChoice } = useProductsContext();
  return (
    <div className='computerside-container'>
      {People2?.map((person) => {
        const { img2, name, number } = person;
        return (
          <div key={number} className='myside-img-container'>
            <div className='my-name'>{name}</div>{" "}
            <img
              src={img2}
              alt={name}
              className={
                Number(henryChoice) === number
                  ? `myside-img-active`
                  : `myside-img`
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default ComputerSide;
