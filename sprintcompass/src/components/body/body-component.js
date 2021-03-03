import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import theme from "../../theme";
import styles from "../../styles/body-styles";

const Body = () => {
  const style = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={style.root}>
        <div className={style.leftContainer}>
          <Paper elevation={3} className={style.mainPaper}>Main Paper</Paper>
          <Typography className={style.text}>Sprint Completion</Typography>
          <Paper elevation={3} className={style.statusBarPaper}>Status Bar Paper</Paper>
        </div>
        <div className={style.rightContainer}>
          <Paper elevation={3} className={style.calendarPaper}>Calendar Paper</Paper>
          <Paper elevation={3} className={style.activityPaper}>Activity Paper</Paper>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Body;
