import React from "react";
import People from "../asset/People";
import "../ css/History.css";
import "./SingleHistory";
import SingleHistory from "./SingleHistory";

const History = () => {
  return (
    <main>
      <div className='container'>
        <h3>Six Queens of Henry VIII</h3>
        <section class='info'>
          {People.map((person) => {
            return <SingleHistory person={person} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default History;
