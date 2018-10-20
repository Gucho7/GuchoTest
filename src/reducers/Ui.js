const ui = (state = { redirect: "list" }, action) => {
  switch (action.type) {
    case "AddGucho":
      return Object.assign({}, state, {
        redirect: "list"
      });
    case "AddGuchoView":
      return Object.assign({}, state, {
        redirect: "addGucho"
      });
    default:
      return state;
  }
};

export default ui;
