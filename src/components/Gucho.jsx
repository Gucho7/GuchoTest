import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Gucho extends React.Component {
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Paper elevation={1}>
            <Typography component="p">{this.props.text}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    );
  }
}
export default Gucho;
