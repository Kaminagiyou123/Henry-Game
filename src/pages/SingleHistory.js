import React, { useState } from "react";

const SingleHistory = ({ person }) => {
  const [full, setFull] = useState(false);
  const toggleReading = () => {
    setFull(!full);
  };

  const { name, img, text, number } = person;
  return (
    <div key={number}>
      <div className='name'>{name}</div>
      <div className='info-container'>
        <div key={number} className='image-container'>
          <img src={img} alt={name} className='personal-img-info' />
        </div>
        <div className={full ? "text-active" : "text"}>
          {full ? text : `${text.substring(0, 600)}...${" "}`}
          <button className='btn' onClick={toggleReading} id={number}>
            {" "}
            {full ? `Read Less` : `Read More`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHistory;
