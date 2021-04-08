import React from "react";
import "../ css/about.css";
const About = () => {
  return (
    <main>
      <div className='container'>
        <h3>Rule of the Game</h3>
        <section class='record-container'>
          <div className='record-info'>
            Henry was outlived by no other than Anne of Cleves and Catherine
            Parr.So Henry wins all but loses to those two.
          </div>
          <div className='record-info'>
            Previous wives lose the game to the next wives
          </div>
          <div className='record-info'>
            Catherine of Aragon died on her own. So Catherine will win herself{" "}
          </div>
        </section>
      </div>
      <div className='footer'>Game made by Ran Y.</div>
    </main>
  );
};

export default About;
