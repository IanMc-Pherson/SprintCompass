import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import theme from "../../../theme";
import styles from "../../../styles/status-bar-styles";

const StatusBar = (props) => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <LinearProgress
          color="secondary"
          className={classes.statusBar}
          variant="determinate"
          value={props.progress}
        />
        <Typography className={classes.label}>{props.progress}%</Typography>
      </div>
    </MuiThemeProvider>
  );
};

export default StatusBar;
