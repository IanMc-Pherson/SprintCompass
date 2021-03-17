import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import theme from "../../../theme";
import styles from "../../../styles/main-paper-func-styles";

const TeamMemberList = () => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
        <Typography className={classes.text}>Team Member List</Typography>
        </Paper>

      </div>
    </MuiThemeProvider>
  );
};

export default TeamMemberList;
