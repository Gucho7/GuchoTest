import React from "react";
import Typography from "@material-ui/core/Typography";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Typography variant="display1" component="h1">
        Gucho's Test
      </Typography>
    );
  }
}

export default Header;
