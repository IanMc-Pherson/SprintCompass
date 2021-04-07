import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import theme from "../../../theme";
import styles from "../../../styles/main-paper-func-styles";

//! 06/04/21 Creating Basic outline to satisfy the following requirements

//* Capture & maintain the product backlog including relative estimates (2)

//* Capture & maintain the list of stories included in a given Sprint (2)

//* Capture & maintain subtasks for each user story that is included in a Sprint Plan (2)

//* Capture the hours worked and an esitmate of time to complete each subtask (2)

const ProductBacklog = () => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography className={classes.text}>Product Backlog</Typography>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default ProductBacklog;
