import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import GuchoList from "../containers/GuchoListContainer";
import AddGucho from "../containers/AddGuchoContainer";

class GuchoRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  getRedirectUrl() {
    return `/${this.props.redirect}`;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Route path="/(list)" component={GuchoList} />
          <Route path="/(addGucho)" component={AddGucho} />
          <Redirect to={this.getRedirectUrl()} />
        </div>
      </Provider>
    );
  }
}

export default GuchoRoot;
