import { combineReducers } from "redux";
import guchos from "./Guchos";
import ui from "./Ui";

const god = combineReducers({
  guchos,
  ui
});

export default god;
