import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import God from "./reducers/God";
import Header from "./components/Header";
import Root from "./containers/GuchoRootContainer";

import "./styles.css";

let store = createStore(God);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <Route path="/:view" component={() => <Root store={store} />} />
        </Router>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
