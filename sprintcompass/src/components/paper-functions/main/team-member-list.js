import React, { useEffect, useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import theme from "../../../theme";
import styles from "./inner-main-styles/team-member-styles";

// TODO

//* If no teams exist, prompt create team
//* Sidebar list of teams
//*

import LoadTeams from "../grapql/loadTeams";

const Setup = async () => await LoadTeams();
  
//
const Navigator = (props) => {
  //TODO: Better names
  const redirect = (numVal) => props.redirect(numVal);

  switch (props.direct) {
    case 1:
      return <NoTeams redirect={redirect} />;
    case 2:
      return <CreateTeam />;
    default:
      return 0; //  
  }
};

const NoTeams = (props) => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.noTeamsPaper}>
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
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

const CreateTeam = () => {
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Typography className={classes.text}>Create Team</Typography>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

const CreateTeamMember = (props) => {};


const TeamMemberList = () => {
  const classes = styles();

  const [direct, setDirect] = useState(1);

  useEffect(() => {
    //* On the first render, I do a query to the database (using the loadTeams.js located in the paper-functions -> graphql folder.) to get the list of teams
    async function fetchTeams() {
      const Teams = await Setup();

      console.log(Teams);
      //* If the list is empty, I set the 'direct' to 1, meaning the Navigator component will direct to the NoTeams component
      if (!Teams.length) {
        setDirect(1);
        
      }
      //else
        //setDirect(2); //? Creates visual bug, a quick flash of I think '0' at the top of the paper. 
    }
    fetchTeams();
  }, []);

  const redirect = (num) => {
    setDirect(num);
  };

  //* Navigator takes a value (direct) and uses that in a switch statement that determines which component is going to be rendered.
  //* These components return redirect values that set the direct value in this state, and then are passed back to the switch statement in the Navigator.
  //* It's late and this was the best I could come up with.

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Navigator direct={direct} redirect={redirect} />
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

export default TeamMemberList;
