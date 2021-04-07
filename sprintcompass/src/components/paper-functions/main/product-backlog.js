import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import AddCircleIcon from '@material-ui/icons/AddCircle';

import theme from "../../../theme";
import styles from "./inner-main-styles/product-backlog-styles";
//import styles from "../../../styles/main-paper-func-styles";

//! Creating Basic outline to satisfy the following requirements

//* Capture & maintain the product backlog including relative estimates (2)
//* Capture & maintain the list of stories included in a given Sprint (2)
//* Capture & maintain subtasks for each user story that is included in a Sprint Plan (2)
//* Capture the hours worked and an esitmate of time to complete each subtask (2)

//*  Header
//*  List of Product Name Links
//*  List of Sprint Number Links of Product selected
//*  Body
//*  Nested list of Stories for Sprint, on click load subtasks and dropdown showing estimates, on hover scroll story description
//*  Nested list of Subtasks for Story, on click load dropdown showing hours worked / left, on hover scroll task description

const ProductBacklog = () => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.headerContainer}>
            <div className={classes.headerLineContainer}>
              <div className={classes.arrowLeft}>
                <IconButton className={classes.navButton} disabled={true}>
                  <NavigateBefore fontSize="large" />
                </IconButton>
              </div>
              <div className={classes.headerButtonContainer}>
                <Button className={classes.headerButtons}>
                  Sprint Compass
                </Button>
                <Button className={classes.headerButtons}>
                  ToiletPaper.com
                </Button>
                <Button className={classes.headerButtons}>
                  Froogle
                </Button>
              </div>
              <div className={classes.arrowRight}>
                <IconButton className={classes.navButton} disabled={true}>
                  <NavigateNext fontSize="large" />
                </IconButton>
                <IconButton className={classes.navButton}>
                  <AddCircleIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
            <Divider
              variant="fullWidth"
              style={{ height: "2px", background: theme.palette.primary.main }}
            />
            <div className={classes.headerLineContainer}>
              <div className={classes.arrowLeft}>
                <IconButton className={classes.navButton} disabled={true}>
                  <NavigateBefore fontSize="large" />
                </IconButton>
              </div>
              <div className={classes.headerButtonContainer}>
                <Button className={classes.headerButtons}>
                  Sprint 1
                </Button>
                <Button className={classes.headerButtons}>
                  Sprint 2
                </Button>
                <Button className={classes.headerButtons}>
                  Sprint 3
                </Button>
                <Button className={classes.headerButtons}>
                  Sprint 4
                </Button>
              </div>
              <div className={classes.arrowRight}>
                <IconButton className={classes.navButton} disabled={true}>
                  <NavigateNext fontSize="large" />
                </IconButton>
                <IconButton className={classes.navButton}>
                  <AddCircleIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
            <Divider
              variant="fullWidth"
              style={{ height: "2px", background: theme.palette.primary.main }}
            />
          </div>
          <div className={classes.bodyContainer}>
            <div className={classes.leftContainer}>
              <Typography className={classes.text}>List of Stories</Typography>
            </div>
            <Divider orientation="vertical" flexItem variant="fullWidth" style={{width: "2px" }} />
            <div className={classes.rightContainer}>
             <Typography className={classes.text}>List of Subtasks</Typography>
            </div>
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default ProductBacklog;
// orientation="vertical"