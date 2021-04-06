import React, { useState, useEffect } from "react";
import People from "../asset/People";
import "../ css/Slider.css";

const Slider = () => {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    const lastIndex = People.length;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, People]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 1000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className='slider'>
      {People?.map((person) => {
        const { img, name, number } = person;
        return (
          <div key={number} className='image-container'>
            <img
              src={img}
              alt={name}
              className={number === index ? `person-img-active` : `person-img`}
            />
            <div className='main-name'>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
