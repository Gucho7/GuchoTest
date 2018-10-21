import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import GuchoList from "../containers/GuchoListContainer";
import AddGucho from "../containers/AddGuchoContainer";

class GuchoRoot extends React.Component {
  render() {
    let redirectPath = `/${this.props.redirect}`;
    return (
      <Router>
        <div>
          <Route path="/(list)" component={GuchoList} />
          <Route path="/(addGucho)" component={AddGucho} />
          <Redirect to={redirectPath} />
        </div>
      </Router>
    );
  }
}

export default withRouter(GuchoRoot);
