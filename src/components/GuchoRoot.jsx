import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import GuchoList from "../containers/GuchoListContainer";
import AddGucho from "../containers/AddGuchoContainer";

class GuchoRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let redirectPath = `/${this.props.redirect}`;
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Route path="/(list)" component={GuchoList} />
            <Route path="/(addGucho)" component={AddGucho} />
            <Redirect to={redirectPath} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default GuchoRoot;
