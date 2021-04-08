const products_reducer = (state, action) => {
  if (action.type === "YOU_PICK") {
    return { ...state, yourChoice: action.payload };
  }
  if (action.type === "HENRY_PICK") {
    const newNumber = Math.floor(Math.random() * 7);

    return { ...state, henryChoice: newNumber };
  }

  if (action.type === "YOU_LOSE") {
    return { ...state, henryScore: state.henryScore + 1 };
  }
  if (action.type === "YOU_WIN") {
    return { ...state, yourScore: state.yourScore + 1 };
  }
  if (action.type === "YOU_TIE") {
    return { ...state };
  }
  if (action.type === "ADD_ROUND") {
    return { ...state, round: state.round + 1 };
  }
  if (action.type === "MSG") {
    let newMsg;
    if (state.yourScore > state.henryScore) {
      newMsg = "You Win";
    } else if (state.yourScore < state.henryScore) {
      newMsg = "You Lose";
    } else {
      newMsg = "You Tie";
    }
    return { ...state, msg: newMsg };
  }
  if (action.type === "NEW_GAME") {
    return {
      ...state,
      round: 0,
      yourChoice: "",
      henryChoice: "",
      yourScore: 0,
      henryScore: 0,
      record: {},
      msg: "",
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
