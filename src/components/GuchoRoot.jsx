import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import GuchoList from "../containers/GuchoListContainer";
import AddGucho from "../containers/AddGuchoContainer";

class GuchoRoot extends React.Component {
  componentDidMount() {
    if (this.props.redirect === null) return;

    this.props.resetRedirect();
  }

  componentDidUpdate() {
    if (this.props.redirect === null) return;

    this.props.resetRedirect();
  }

  render() {
    let redirectPath = `/${this.props.redirect}`;
    return (
      <Router>
        <div>
          <Route path="/(list)" render={() => <GuchoList />} />
          <Route path="/(addGucho)" render={() => <AddGucho />} />
          {this.props.redirect !== null && <Redirect to={redirectPath} />}
        </div>
      </Router>
    );
  }
}

export default GuchoRoot;
