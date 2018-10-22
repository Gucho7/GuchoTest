import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Gucho from "./Gucho";

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
      <Grid container spacing={16}>
        <Grid item xs={12}>
          {this.props.guchos.map((gucho, i) => <Gucho key={i} {...gucho} />)}
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onClickAddGucho}
          >
            Add Gucho
          </Button>
        </Grid>
      </Grid>
    );
  }
}
export default GuchoList;
