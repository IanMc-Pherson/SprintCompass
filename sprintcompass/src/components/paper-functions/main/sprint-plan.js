import React, { useEffect, useState, useReducer } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import Modal from "@material-ui/core/Modal";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
import AddCircleIcon from "@material-ui/icons/AddCircle";

import theme from "../../../theme";
import styles from "./inner-main-styles/product-backlog-styles";

import LoadAll from "../grapql/loadAll";
import LoadStories from "../grapql/loadStories";

import CreateProduct from "../grapql/createProduct";
import CreateSprint from "../grapql/createSprint";
import CreateSubtask from "../grapql/createSubtask";
import LoadTeamMembers from "../grapql/loadTeamMembers";



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

//  TODO
//* Get all the data

const LoadMasterTree = async () => await LoadAll();

const ActualSprintPlan = () => {
  const classes = styles();

  let masterTree = localStorage.getItem("masterTree");
  masterTree = JSON.parse(masterTree);

  let allStories = localStorage.getItem("stories");
  allStories = JSON.parse(allStories);

  let allTeamMembers = localStorage.getItem("teammembers");
  allTeamMembers = JSON.parse(allTeamMembers);

  const [sprintList, setSprintList] = useState(masterTree.products[0].sprints);
  const [storyList, setStoryList] = useState(
    masterTree.products[0].sprints[0].stories
  );
  const [subtaskList, setSubtaskList] = useState(masterTree.products[0].sprints[0].stories[0].subtasks);

  const [selectedProduct, setSelectedProduct] = useState("SprintCompass");
  const [selectedSprint, setSelectedSprint] = useState(1);
  const [selectedStory, setSelectedStory] = useState(0);

  const handleSelectedProduct = (name) => {
    if (name === selectedProduct) return "outlined";
  };
  const handleNewSelectedProduct = (name) => {
    setSelectedProduct(name);

    for (let i = 0; i < masterTree.products.length; i++) {
      if (name === masterTree.products[i].productName) {
        setSprintList(masterTree.products[i].sprints);
        setSelectedSprint(1);
        // Reset Story & Subtask lists
        setStoryList(masterTree.products[i].sprints[0].stories);
      }
    }
  };

  const handleSelectedSprint = (num) => {
    if (num === selectedSprint) return "outlined";
  };
  const handleNewSelectedSprint = (id) => {
    setSelectedSprint(id);

    for(let i = 0; i < masterTree.products.length; i++) 
    {
      for (let j = 0; j < masterTree.products[i].sprints.length; j++)
      {
        if (id === masterTree.products[i].sprints[j].sprintID)
        {
          setStoryList(masterTree.products[i].sprints[j].stories);
          setSelectedSprint(masterTree.products[i].sprints[j].sprintNumber);
        }
      }
    }
  };

  const handleSelectedStory = (num) => {
    if (num === selectedStory) return true;
  }

  //! Doesn't work properly !!!

  const handleNewSelectedStory = (num) => {
    setSelectedStory(num);

    // Load Subtask using index of Story
    for (let i = 0; i < masterTree.products.length; i++)
    {
      if (masterTree.products[i].productName === selectedProduct)
      {
        for (let j = 0; j < masterTree.products[i].sprints.length; j++)
        {
          if (masterTree.products[i].sprints[j].sprintNumber === selectedSprint)
          {
            // num passed is index
            console.log("Product = " + masterTree.products[i].productName);
            console.log("StoryID = " + masterTree.products[i].sprints[j].stories[num].storyID);

            setSubtaskList(masterTree.products[i].sprints[j].stories[num].subtasks);
          }
        }
      }
    }
  }


  //! Dialog Stuff 
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [prodValue, setProdValue] = useState("");

  const [openAddSprint, setOpenAddSprint] = useState(false);

  const [openAddStory, setOpenAddStory] = useState(false);

  const [openAddSubtask, setOpenAddSubtask] = useState(false);
  const [dioTaskDescription, setDioTaskDescription] = useState("");
  const [dioHoursWorked, setDioHoursWorked] = useState("");
  const [dioHoursLeft, setDioHoursLeft] = useState("");

  const [openAssignTM, setOpenAssignTM] = useState(false);
  const [openUpdateTask, setOpenUpdateTask] = useState(false);

  const handleAddProduct = (product) => {

  }

  //! Story stuff
  const [selectedStoryToAdd, setSelectedStoryToAdd] = useState();

  const handleSelectedStoryToAdd = (story) => {
    if (story === selectedStoryToAdd) return true;
  }
  const handleNewSelectedStoryToAdd = (story) => {
    setSelectedStoryToAdd(story);
  }


  //! Subtask Stuff 

  const [selectedTeamMember, setSelectedTeamMember] = useState();

  const handleSelectedTeamMember = (name) => {
    if (name === selectedTeamMember) return true;
  }

  const handleNewSelectedTeamMember = (name) => {
    setSelectedTeamMember(name);
  }


  const handleAddSubtask = () => {
    //? Need: (subtaskID, storyID, taskDescription, hoursWorked, hoursLeft, assignedTo)
    //! Just going to create an RNG ID
    let subtaskID = Math.floor(Math.random() * 1000000);

    

    //! Create the subtask

    //! Add to the current selected story by assigning it the current story id



  }


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
              {masterTree !== null && (
                <div className={classes.headerButtonContainer}>
                  {masterTree.products.map((prod) => (
                    <Button
                      className={classes.headerButtons}
                      variant={handleSelectedProduct(prod.productName)}
                      onClick={() => {
                        handleNewSelectedProduct(prod.productName);
                      }}
                    >
                      {prod.productName}
                    </Button>
                  ))}
                </div>
              )}
              <div className={classes.arrowRight}>
                <IconButton className={classes.navButton} disabled={true}>
                  <NavigateNext fontSize="large" />
                </IconButton>
                <IconButton className={classes.navButton} onClick={() => {setOpenAddProduct(true)}}>
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
                {sprintList.map((sprint) => (
                  <Button
                    className={classes.headerButtons}
                    variant={handleSelectedSprint(sprint.sprintNumber)}
                    onClick={() => {
                      handleNewSelectedSprint(sprint.sprintID);
                    }}
                  >
                    Sprint {sprint.sprintNumber}
                  </Button>
                ))}
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
              <TableContainer style={{ maxHeight: 350 }}>
                <Table>
                  <TableBody>
                    {storyList.map((story) => {
                      return (
                        <TableRow hover={true} key={story.storyID} selected={handleSelectedStory(storyList.indexOf(story))} onClick={() => {handleNewSelectedStory(storyList.indexOf(story))}} >
                          <TableCell>
                            <Typography>{story.storyDescription}</Typography>
                            <Typography>Point Estimate: {story.pointEstimate}</Typography>
                            <Typography>Cost Estimate: ${story.costEstimate}</Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="outlined" color="secondary" onClick={() => {setOpenAddStory(true)}}>Add Story</Button>
            </div>
            <Divider
              orientation="vertical"
              flexItem
              variant="fullWidth"
              style={{ width: "2px" }}
            />
            <div className={classes.rightContainer}>
              <Typography className={classes.text}>List of Subtasks</Typography>
              <TableContainer style={{ maxHeight: 300 }}>
                <Table>
                  <TableBody>
                    {subtaskList.map((task) => {
                      return (
                        <TableRow hover={true} key={task.subtaskID} >
                          <TableCell>
                            <Typography>{task.taskDescription}</Typography>
                            <Typography>Hours Worked: {task.hoursWorked}</Typography>
                            <Typography>Hours Left: {task.hoursLeft}</Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="outlined" color="secondary" onClick={() => {setOpenAddSubtask(true)}}>Add Subtask</Button>
            </div>
          </div>
          
          <Dialog open={openAddProduct} onClose={() => {setOpenAddProduct(false)}} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
            <DialogContent>
              <TextField autoFocus margin="dense" label="Product Name" fullWidth />
            </DialogContent> 
            <DialogActions>
              <Button onClick={() => {setOpenAddProduct(false)}} color="primary">
                Cancel
              </Button>
              <Button onClick={() => {setOpenAddProduct(false)}} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={openAddStory} onClose={() => {setOpenAddStory(false)}} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Select Story to Add to Sprint {selectedSprint}</DialogTitle>
            <DialogContent>
            <TableContainer style={{ maxHeight: 300 }}>
                <Table>
                  <TableBody>
                    {allStories.map((story) => {
                      return (
                        <TableRow hover={true} key={story.storyID} selected={handleSelectedStoryToAdd(story.storyID)} onClick={() => {handleNewSelectedStoryToAdd(story.storyID)}}>
                          <TableCell>
                            <Typography>{story.storyDescription}</Typography>
                            <Typography>Point Estimate: {story.pointEstimate}</Typography>
                            <Typography>Cost Estimate: ${story.costEstimate}</Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
                
            </DialogContent> 
            <DialogActions>
              <Button onClick={() => {setOpenAddStory(false)}} color="primary">
                Cancel
              </Button>
              <Button onClick={() => {setOpenAddStory(false)}} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={openAddSubtask} onClose={() => {setOpenAddSubtask(false)}} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New Subtask</DialogTitle>
            <DialogContent>
              <TextField autoFocus margin="dense" label="Task Description" fullWidth value={dioTaskDescription} onChange={(e) => setDioTaskDescription(e.target.value)} />
              <TextField margin="dense" label="Hours Worked on Task" fullWidth  value={dioHoursWorked} onChange={(e) => setDioHoursWorked(e.target.value)}/>
              <TextField margin="dense" label="Hours Left to Complete" fullWidth  value={dioHoursLeft} onChange={(e) => setDioHoursLeft(e.target.value)}/>
              <Typography>Assign a Team Member to this Task</Typography>
              <TableContainer style={{ maxHeight: 300 }}>
                <Table>
                  <TableBody>
                    {allTeamMembers.map((member) => {
                      return (
                        <TableRow hover={true} key={member.name} selected={handleSelectedTeamMember(member.name)} onClick={() => {handleNewSelectedTeamMember(member.name)}}>
                          <TableCell>
                            <Typography>{member.teamName}</Typography>
                            <Typography>{member.name}</Typography>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContent> 
            <DialogActions>
              <Button onClick={() => {setOpenAddSubtask(false)}} color="primary">
                Cancel
              </Button>
              <Button onClick={() => {setOpenAddSubtask(false)}} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>
    </MuiThemeProvider>
  );

  //return <Typography>Its all fucked</Typography>
};

const SprintPlan = () => {
  useEffect(() => {
    async function fetchMasterTree() {
      let masterTree = await LoadMasterTree();

      let allStories = await LoadStories();

      let allTeamMembers = await LoadTeamMembers();

      localStorage.setItem("teammembers", JSON.stringify(allTeamMembers));

      localStorage.setItem("stories", JSON.stringify(allStories));

      localStorage.setItem("masterTree", JSON.stringify(masterTree));
    }
    fetchMasterTree();
  }, []);

  return <ActualSprintPlan />;
};

export default SprintPlan;
