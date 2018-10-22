import React from "react";
import PropTypes from "prop-types";

class AddGucho extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleClickButton() {
    this.props.onAddGucho(this.input.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.input} />
        <input onClick={this.handleClickButton} type="button" value="Add" />
      </div>
    );
  }
}

AddGucho.propTypes = {
  onAddGucho: PropTypes.func.isRequired
};

export default AddGucho;
