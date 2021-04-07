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
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
