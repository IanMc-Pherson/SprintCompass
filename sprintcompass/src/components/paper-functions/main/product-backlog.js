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

import LoadStories from "../grapql/loadStories";
import CreateTeam from "../grapql/createTeam";
import CreateStory from "../grapql/createStory";
import LoadProducts from "../grapql/loadProducts";

const LoadProductSetup = async () => await LoadProducts();

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
    let products = await LoadProductSetup();
    localStorage.setItem("products", JSON.stringify(products));

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
  let products = localStorage.getItem("products");
  products = JSON.parse(products);

  

  const initialProduct = {
    productID: 0,
    productName: "",
    showStory: true,
  };

  // State will hold selected team
  const reducer = (product, newProduct) => ({ ...product, ...newProduct });
  const [product, setProduct] = useReducer(reducer, initialProduct);

  const [stories, setStories] = useState([]);
  const [storyDescription, setStoryDescription] = useState("");
  const [pointEstimate, setPointEstimate] = useState("");
  const [costEstimate, setCostEstimate] = useState("");

  const setSelectedProduct = (productName) => {
    // find team
    for (let i = 0; i < products.length; i++) {
      if (products[i].productName === productName) {
        setProduct({
          productID: products[i].productID,
          productName: products[i].productName,
          showStory: false,
        });
        getStories(products[i].productID);
        break;
      }
    };
  };

  const getStories = async (productID) => 
  {

    let stories = await LoadStories();

    let userStories = [];
    
    for (let i = 0; i < stories.length; i++) {
      if (stories[i].productID === productID) {
        userStories.push(stories[i]);
      }
    };

    setStories(userStories);
  };

   const graphqlCreateStory = async () => {
     console.log("Creating Story...");

     let stories = await LoadStories();

     let lastStory = stories.slice(-1)

     let newID = lastStory[0].storyID + 1

     let point = parseInt(pointEstimate);
     let cost = parseInt(costEstimate);

     if (storyDescription !== "" && !isNaN(point) && !isNaN(cost))
     {
      await CreateStory(
        newID, 
        product.productID, 
        storyDescription, 
        point, 
        cost
       );
  
       // Refresh teams in local storage
       getStories(product.productID);
  
       // Clear inputs
       setStoryDescription("");
       setPointEstimate("");
       setCostEstimate("");
     }
   };

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.headerContainer}>
            <Typography className={classes.createTeamText}>
              Products
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
                      {products.map((res) => (
                        <TableRow hover={true} key={res.productName}>
                          <TableCell
                            className={classes.tableCell}
                            onClick={() => {
                              setSelectedProduct(res.productName);
                            }}
                          >
                            <Typography className={classes.text}>
                              Product: {res.productName}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
            <div className={classes.rightContainer}>
              <div className={classes.teamContainer}>
                <div className={classes.topColumnContainer}>
                  <div className={classes.leftRowContainer}> 
                    <Typography className={classes.text} align='center' hidden={product.showStory}>
                      Stories:
                    </Typography> 
                    <div>
                  </div>                  
                  </div>
                  <div className={classes.rightRowContainer}>
                    <div>
                    <Typography className={classes.text} hidden={product.showStory}>
                    </Typography> 
                    <Typography className={classes.text} hidden={product.showStory}>
                    </Typography> 
                    <Typography className={classes.text} hidden={product.showStory}>
                    </Typography> 
                    <Typography className={classes.text} hidden={product.showStory}>
                    </Typography> 
                    <TableContainer style={{ maxHeight: "80%" }} hidden={product.showStory}>
                      <Table stickyHeader>
                        <TableBody>
                          {stories.map(mem => {
                            return (
                              <TableRow key={mem.storyID}>
                                <TableCell>
                                  <Typography className={classes.text} hidden={product.showStory}>
                                    {mem.storyDescription} - {mem.pointEstimate} points @ ${mem.costEstimate}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    </div>

                  </div>
                </div>
                <div className={classes.bottomColumnContainer}>
                  <div>
                  <div className={classes.leftRowContainer}>
                    <div hidden={product.showStory}>
                      <TextField
                        label="I want to:"
                        style={{ width: "50%" }}
                        value={storyDescription}
                        onChange={(e) => setStoryDescription(e.target.value)}
                      />
                    </div> 
                  </div>  
                  <div className={classes.middleRowContainer}>
                    <div hidden={product.showStory}>
                        <TextField
                          label="Point Estimate"
                          style={{ width: "50%" }}
                          value={pointEstimate}
                          onChange={(e) => setPointEstimate(e.target.value)}
                        />
                    </div> 
                  </div>
                  <div className={classes.rightRowContainer2}>
                    <div hidden={product.showStory}>
                        <TextField
                          label="Cost Estimate"
                          style={{ width: "50%" }}
                          value={costEstimate}
                          onChange={(e) => setCostEstimate(e.target.value)}
                        />
                    </div> 
                  </div>
                  </div>
                  <Typography className={classes.text} hidden={product.showStory}>
                  </Typography> 
                  <div hidden={product.showStory}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.createTeamButton}
                        onClick={graphqlCreateStory}
                      >
                        Add Story
                      </Button> 
                  </div>        
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

const ProductBacklogs = () => {
  const [direct, setDirect] = useState();

  useEffect(() => {
    //* On the first render, I do a query to the database (using the loadTeams.js located in the paper-functions -> graphql folder.) to get the list of teams
    async function fetchProducts() {
      let json = await LoadProductSetup();
      //* Set local storage. Even if json is empty it just sets up the key to be used later.
      localStorage.setItem("products", JSON.stringify(json));
      //* If the list is empty, I set the 'direct' to 1, meaning the Navigator component will direct to the NoTeams component
      if (!json.length) {
        setDirect(1);
      } else {
        setDirect(3);
      }
    }
    fetchProducts();
  }, []);

  const redirect = (num) => {
    setDirect(num);
  };

  //* Navigator takes a value (direct) and uses that in a switch statement that determines which component is going to be rendered.
  //* These components return redirect values that set the direct value in this state, and then are passed back to the switch statement in the Navigator.
  //* It's late and this was the best I could come up with.

  return <Navigator direct={direct} redirect={redirect} />;
};

export default ProductBacklogs;