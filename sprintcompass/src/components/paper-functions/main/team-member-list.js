import React, { useEffect, useState, useReducer } from "react";
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

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import theme from "../../../theme";
import styles from "./inner-main-styles/team-member-styles";

// TODO

//* If no teams exist, prompt create team
//* Sidebar list of teams
//*

import LoadTeams from "../grapql/loadTeams";
import CreateTeam from "../grapql/createTeam";

const LoadTeamSetup = async () => await LoadTeams();

//
const Navigator = (props) => {
  //TODO: Better names
  const redirect = (numVal) => props.redirect(numVal);

  switch (props.direct) {
    case 1:
      return <NoTeams redirect={redirect} />;
    case 2:
      return <CreateTeamPage redirect={redirect} />;
    case 3:
      return <MainPage redirect={redirect} />;
    default:
      return 0; //
  }
};

const NoTeams = (props) => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.noTeamsContainer}>
            <Typography className={classes.noTeamsText}>
              No Teams have been created.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => props.redirect(2)}
            >
              Create Team
            </Button>
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

const CreateTeamPage = (props) => {
  const classes = styles();

  const initialState = {
    teamName: "",
    product: "",
    startDate: null,
    hoursPerPoint: "",
    totalPoints: "",
    totalCost: "",
    snackBar: false,
    snackBarMsg: "",
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  const dateChangeHandler = (date) => {
    setState({ startDate: date });
  };

  const snackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      snackBar: false,
    });
  };

  const graphqlCreateTeam = async () => {
    console.log("Creating Team...");

    await CreateTeam(
      state.teamName,
      state.product,
      state.startDate,
      state.hoursPerPoint,
      state.totalPoints,
      state.totalCost
    );

    setState({ snackBarMsg: `${state.teamName} created`, snackBar: true });

    // Refresh teams in local storage
    let teams = await LoadTeamSetup();
    localStorage.setItem("teams", JSON.stringify(teams));

    // Clear inputs
    clearInputs();
  };

  const clearInputs = () => {
    setState({
      teamName: "",
      product: "",
      startDate: null,
      hoursPerPoint: "",
      totalPoints: "",
      totalCost: "",
    });
  };

  const emptyornull =
    state.teamName === null ||
    state.teamName === "" ||
    state.product === null ||
    state.product === "" ||
    state.startDate === null ||
    state.startDate === "" ||
    state.hoursPerPoint === null ||
    state.hoursPerPoint === "" ||
    state.totalPoints === null ||
    state.totalPoints === "" ||
    state.totalCost === null ||
    state.totalCost === "";

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.headerContainer}>
            <Typography className={classes.createTeamText}>
              Create Team
            </Typography>
            <Divider
              variant="fullWidth"
              style={{ height: "2px", background: theme.palette.primary.main }}
            />
          </div>
          <div className={classes.bodyContainer}>
            <div className={classes.leftContainer}>
              <div className={classes.createTeamInputContainer}>
                <TextField
                  label="Team Name"
                  style={{ width: "100%" }}
                  value={state.teamName}
                  onChange={(e) => setState({ teamName: e.target.value })}
                />
                <TextField
                  label="Product"
                  style={{ width: "100%" }}
                  value={state.product}
                  onChange={(e) => setState({ product: e.target.value })}
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="date-picker"
                    label="Start Date"
                    value={state.startDate}
                    onChange={dateChangeHandler}
                    style={{ width: "100%" }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  label="Hours/Point"
                  style={{ width: "100%" }}
                  value={state.hoursPerPoint}
                  onChange={(e) => setState({ hoursPerPoint: e.target.value })}
                />
                <TextField
                  label="Total Points"
                  style={{ width: "100%" }}
                  value={state.totalPoints}
                  onChange={(e) => setState({ totalPoints: e.target.value })}
                />
                <TextField
                  label="Total Cost"
                  style={{ width: "100%" }}
                  value={state.totalCost}
                  onChange={(e) => setState({ totalCost: e.target.value })}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={emptyornull}
                  className={classes.createTeamButton}
                  onClick={graphqlCreateTeam}
                >
                  Create Team
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.createTeamButton}
                  onClick={() => props.redirect(3)}
                >
                  Return
                </Button>
              </div>
            </div>
            <div className={classes.rightContainer}>
              <img
                style={{ width: "85%", height: "100%", alignSelf: "center" }}
                src={process.env.PUBLIC_URL + "/team2.png"}
              />
            </div>
            <Snackbar
              open={state.snackBar}
              message={state.snackBarMsg}
              autoHideDuration={3000}
              onClose={snackbarClose}
            />
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

//! Better name
const MainPage = (props) => {
  const classes = styles();

  //* Get list of teams from the local storage
  let teams = localStorage.getItem("teams");
  teams = JSON.parse(teams);

  const initialTeam = {
    teamName: "",
    product: "",
    startDate: null,
    hoursPerPoint: "",
    totalPoints: "",
    totalCost: "",
    showTeam: true,
  };

  // State will hold selected team
  const reducer = (team, newTeam) => ({ ...team, ...newTeam });
  const [team, setTeam] = useReducer(reducer, initialTeam);

  const setSelectedTeam = (teamName) => {
    // find team
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].name === teamName) {
        setTeam({
          teamName: teams[i].name,
          product: teams[i].product,
          startDate: teams[i].startDate,
          hoursPerPoint: teams[i].hoursToPoint,
          totalPoints: teams[i].totalPoints,
          totalCost: teams[i].totalCost,
          showTeam: false,
        });
        break;
      }
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.headerContainer}>
            <Typography className={classes.createTeamText}>
              Team List
            </Typography>
            <Divider
              variant="fullWidth"
              style={{ height: "2px", background: theme.palette.primary.main }}
            />
          </div>
          <div className={classes.bodyContainer}>
            <div className={classes.leftContainer}>
              <div className={classes.teamListContainer}>
                <TableContainer style={{ maxHeight: "80%" }}>
                  <Table
                    stickyHeader
                    aria-label="simple table"
                    className={classes.table}
                  >
                    <TableBody>
                      {teams.map((res) => (
                        <TableRow hover={true} key={res.name}>
                          <TableCell
                            className={classes.tableCell}
                            onClick={() => {
                              setSelectedTeam(res.name);
                            }}
                          >
                            <Typography className={classes.tableText}>
                              {res.name}: {res.product}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.createTeamMainButton}
                  onClick={() => props.redirect(2)}
                >
                  Create Team
                </Button>
              </div>
            </div>
            <div className={classes.rightContainer}>
              <div className={classes.teamContainer}>
                <div className={classes.topColumnContainer}>
                  <div className={classes.leftRowContainer}>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      Team Name:
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      Product:
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      Start Date:
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      Hours Per Point:
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      Total Points:
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      Total Cost:
                    </Typography>
                  </div>
                  <div className={classes.rightRowContainer}>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      {team.teamName}
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      {team.product}
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      {team.startDate}
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      {team.hoursPerPoint}
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      {team.totalPoints}
                    </Typography>
                    <Typography className={classes.text} hidden={team.showTeam}>
                      {team.totalCost}
                    </Typography>
                  </div>
                </div>
                <div className={classes.bottomColumnContainer}>
                            
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

const TeamMemberList = () => {
  const [direct, setDirect] = useState();

  useEffect(() => {
    //* On the first render, I do a query to the database (using the loadTeams.js located in the paper-functions -> graphql folder.) to get the list of teams
    async function fetchTeams() {
      let json = await LoadTeamSetup();
      //* Set local storage. Even if json is empty it just sets up the key to be used later.
      localStorage.setItem("teams", JSON.stringify(json));
      //* If the list is empty, I set the 'direct' to 1, meaning the Navigator component will direct to the NoTeams component
      if (!json.length) {
        setDirect(1);
      } else {
        setDirect(3);
      }
    }
    fetchTeams();
  }, []);

  const redirect = (num) => {
    setDirect(num);
  };

  //* Navigator takes a value (direct) and uses that in a switch statement that determines which component is going to be rendered.
  //* These components return redirect values that set the direct value in this state, and then are passed back to the switch statement in the Navigator.
  //* It's late and this was the best I could come up with.

  return <Navigator direct={direct} redirect={redirect} />;
};

export default TeamMemberList;
