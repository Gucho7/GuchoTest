import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Gucho extends React.Component {
  render() {
    return (
      <Grid item xs={12}>
        <Paper elevation={1}>
          <Typography component="p">{this.props.text}</Typography>
        </Paper>
      </Grid>
    );
  }
}
export default Gucho;
