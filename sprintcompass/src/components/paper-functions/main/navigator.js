import React, { useState, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";

import theme from "../../../theme";
import styles from "../../../styles/navigator-styles";

import ProductBacklog from "./product-backlog";

import FunctionSelector from "./functionSelector";

const Titles = [
  "",
  "Product Backlog",
  "Team Member List",
  "Basic Project Information"
]

// Increase when new selections are added
const numberOfSelections = 3;

const Navigator = () => {
  const classes = styles(theme);

  useEffect(() => {
    updateTitle(1);
  }, []);

  const [title, setTitle] = useState("");
  const [navSelection, setNavSelection] = useState(1);

  const onClickLeftArrow = () => {
    // Decrease or wrap
    if (navSelection === 1) {
      setNavSelection(numberOfSelections);
      updateTitle(numberOfSelections);
    } 
    else {
      setNavSelection(navSelection - 1);
      updateTitle(navSelection - 1);
    } 
  };
  const onClickRightArrow = () => {
    // Increase or wrap
    if (navSelection === numberOfSelections) { 
      setNavSelection(1);
      updateTitle(1);
    } 
    else {
      setNavSelection(navSelection + 1);
      updateTitle(navSelection + 1);
    } 
  };

  const updateTitle = (idx) => {
    setTitle(Titles[idx]);
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.header}>
          <Paper elevation={0} className={classes.navigator}>
            <div className={classes.arrowLeft}>
              <IconButton
                className={classes.navButton}
                onClick={onClickLeftArrow}
              >
                <NavigateBefore fontSize="large"/>
              </IconButton>
            </div>
            <div className={classes.headerText}>
              <Typography className={classes.text}>{title}</Typography>
            </div>
            <div className={classes.arrowRight}>
              <IconButton
                className={classes.navButton}
                onClick={onClickRightArrow}
              >
                <NavigateNext fontSize="large"/>
              </IconButton>
            </div>
          </Paper>
        </div>
        <div className={classes.body}>
          <FunctionSelector selection={navSelection} />
        </div>
      </div>
    </MuiThemeProvider>
  );
};


export default Navigator;
