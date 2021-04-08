import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
  round: 0,
  yourChoice: "",
  henryChoice: "",
  yourScore: 0,
  henryScore: 0,
  record: {},
  msg: "",
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setMsg = () => {
    dispatch({ type: "MSG" });
  };
  const setNewGame = () => {
    dispatch({ type: "NEW_GAME" });
  };
  const youPick = (number) => {
    dispatch({ type: "YOU_PICK", payload: number });
  };
  const henryPick = () => {
    dispatch({ type: "HENRY_PICK" });
  };
  const youWin = () => {
    dispatch({ type: "YOU_WIN" });
  };

  const youLose = () => {
    dispatch({ type: "YOU_LOSE" });
  };

  const youTie = () => {
    dispatch({ type: "YOU_TIE" });
  };
  const addRound = () => {
    dispatch({ type: "ADD_ROUND" });
  };

  const winLoseTie = () => {
    if (Number(state.yourChoice) === 0) {
      if (Number(state.henryChoice) === 0) {
        youTie();
      } else if (
        Number(state.henryChoice) === 4 ||
        Number(state.henryChoice) === 6
      ) {
        youLose();
      } else {
        youWin();
      }
    } else if (Number(state.yourChoice) === 1) {
      if (Number(state.henryChoice) === 0 || Number(state.henryChoice) === 2) {
        youLose();
      } else if (state.henryChoice === 1) {
        youWin();
      } else {
        youTie();
      }
      return;
    } else if (Number(state.yourChoice) === 2) {
      if (Number(state.henryChoice) === 1) {
        youWin();
      } else if (
        Number(state.henryChoice) === 0 ||
        Number(state.henryChoice) === 3
      ) {
        youLose();
      } else {
        youTie();
      }
      return;
    } else if (Number(state.yourChoice) === 3) {
      if (Number(state.henryChoice) === 2) {
        youWin();
      } else if (
        Number(state.henryChoice) === 0 ||
        Number(state.henryChoice) === 4
      ) {
        youLose();
      } else {
        youTie();
      }
      return;
    } else if (Number(state.yourChoice) === 4) {
      if (Number(state.henryChoice) === 3 || Number(state.henryChoice) === 0) {
        youWin();
      } else if (Number(state.henryChoice) === 5) {
        youLose();
      } else {
        youTie();
      }
      return;
    } else if (Number(state.yourChoice) === 5) {
      if (Number(state.henryChoice) === 4) {
        youWin();
      } else if (
        Number(state.henryChoice) === 6 ||
        Number(state.henryChoice) === 0
      ) {
        youLose();
      } else {
        youTie();
      }
      return;
    } else {
      if (Number(state.henryChoice) === 5 || Number(state.henryChoice) === 0) {
        youWin();
      } else if (Number(state.henryChoice) === 6) {
        youLose();
      } else {
        youTie();
      }
      return;
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        youPick,
        henryPick,
        winLoseTie,
        addRound,
        setMsg,
        setNewGame,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
