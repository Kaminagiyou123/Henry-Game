import React from "react";
import MySide from "../components/MySide";
import ComputerSide from "../components/ComputerSide";
import Score from "../components/Score";
import WinLose from "../components/WinLose";

const Game = () => {
  return (
    <main>
      <ComputerSide />
      <Score />
      <WinLose />
      <MySide />
    </main>
  );
};

export default Game;
