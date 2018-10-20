import React from "react";
import { NavLink } from "react-router-dom";

class GuchoList extends React.Component {
  constructor(props) {
    super(props);

    this.onClickAddGucho = this.onClickAddGucho.bind(this);
  }

  onClickAddGucho() {
    this.props.onClickAddGucho();
  }

  render() {
    return (
      <div>
        {this.props.guchos.map(gucho => <div>{gucho.text}</div>)}
        <button onClick={this.onClickAddGucho}>Add Gucho</button>
      </div>
    );
  }
}
export default GuchoList;
