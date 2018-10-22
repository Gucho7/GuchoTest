const ui = (state = { redirect: null }, action) => {
  switch (action.type) {
    case "AddGucho":
      return Object.assign({}, state, {
        redirect: "list"
      });
    case "AddGuchoView":
      return Object.assign({}, state, {
        redirect: "addGucho"
      });
    case "ResetView":
      return Object.assign({}, state, {
        redirect: null
      });
    default:
      return state;
  }
};

export default ui;
