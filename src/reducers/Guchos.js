const guchos = (state = [], action) => {
  switch (action.type) {
    case "AddGucho":
      state.push({ text: action.text });
      return state;
    default:
      return state;
  }
};

export default guchos;
