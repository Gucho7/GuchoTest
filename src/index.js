import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import God from "./reducers/God";
import Header from "./components/Header";
import Root from "./containers/GuchoRootContainer";
import Grid from "@material-ui/core/Grid";

import "./styles.css";

let store = createStore(God);

function App() {
  const pathName = global.location.pathname;
  return (
    <Provider store={store}>
      <Grid container spacing={40}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Header />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={12}>
          <Router>
            <div>
              <Route exact path="/:view" render={() => <Root />} />
              {pathName === "/" && <Redirect from="/" to="/list" />}
            </div>
          </Router>
        </Grid>
      </Grid>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
