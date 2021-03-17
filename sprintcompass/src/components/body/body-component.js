import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import theme from "../../theme";
import styles from "../../styles/body-styles";

//import ProductBacklog from "../paper-functions/main/product-backlog";
import Navigator from "../paper-functions/main/navigator";

import StatusBar from "../paper-functions/status-bar/status-bar-percentage";

//* ----------------------------- mainPaper Functions ----------------------------- *//
//* Capture & maintain basic project information

//* Capture & maintain a list of team members assigned to the project

//* Capture & maintain the product backlog including relative estimates

//* Capture & maintain the list of stories included in a given Sprint

//* Capture & maintain subtasks for each user story that is included in a Sprint Plan

//* Capture the hours worked and an esitmate of time to complete each subtask

//* Generate a Sprint summary report (in PDF, XLSX or Printed formats) that reports status, time spent and any re-estimates

//* Dashboard

//* -------------------------- statusBarPaper Functions --------------------------- *//
//* Calculate the % compelete of any story - should be done on the server

//* --------------------------- activityPaper Functions --------------------------- *//
//* TBD

//! Need controller for Main Paper


const Body = () => {
  const style = styles(theme);


  return (
    <MuiThemeProvider theme={theme}>
      <div className={style.root}>
        <div className={style.leftContainer}>
          <Paper elevation={3} className={style.mainPaper}>{<Navigator/>}</Paper>
          <Typography className={style.text}>Sprint Completion</Typography>
          <Paper elevation={3} className={style.statusBarPaper}>{<StatusBar progress={33} />}</Paper>
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
