import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import God from "./reducers/God";
import Header from "./components/Header";
import Root from "./containers/GuchoRootContainer";

import "./styles.css";

let store = createStore(God);

function App() {
  const pathName = global.location.pathname;
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route path="/:view" render={() => <Root />} />
            {pathName === "/" && <Redirect from="/" to="/list" />}
          </div>
        </Router>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
