const ui = (state = { redirect: "list" }, action) => {
  switch (action.type) {
    case "AddGucho":
      state.redirect = "list";
      return state;
    case "AddGuchoView":
      state.redirect = "addGucho";
    default:
      return state;
  }
};

export default ui;
