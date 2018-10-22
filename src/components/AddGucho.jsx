import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

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
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={4}>
          <TextField inputProps={{ ref: this.input }} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClickButton}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    );
  }
}

AddGucho.propTypes = {
  onAddGucho: PropTypes.func.isRequired
};

export default AddGucho;
