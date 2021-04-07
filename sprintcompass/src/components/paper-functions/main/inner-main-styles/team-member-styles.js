import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({

  //* Template-able container stuff
  root: {
    display: "flex",
    width: "100%",
    borderRadius: 10,
  },
  paper: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    paddingTop: "1.5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingBottom: "1.5%",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 0",
    borderRadius: "0px 0px 10px 10px;",
  },

  headerContainer: {
    //! Can't display flex because it makes the Divider disappear. Not sure why. So I guess nothing goes here
  },
  bodyContainer: {
    display: "flex",
    flex: 8,
    flexDirection: "row",
  },
  leftContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",   
  },
  rightContainer: { 
    display: "flex",
    flex: 2,
    flexDirection: "column",
  },

  //* Create Team Stuff

  createTeamInputContainer: {
    display: "flex",
    flex: 1,
    minHeight: "100%",
    flexDirection: "column",
    justifyContent: "space-around",

  },
  createTeamText: {
    fontSize: 22,
    paddingBottom: "1%",
  },
  createTeamButton: {
    width: "100%",
    fontSize: "14",
    color: "white",
  },

  //* Main Page Stuff
  teamListContainer: {
    display: "flex",
    padding: "1%",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
  },

  teamContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    padding: "1%"
  },

  createTeamMainButton: {
    display: "flex",
    width: "100%",
    fontSize: "14",
    color: "white",
    alignSelf: "flex-end"
  },

  topColumnContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1
  },

  bottomColumnContainer: {
    display: "flex",
    flex:2,
    flexDirection: "row",
    
    backgroundColor: "green"
  },

  leftRowContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around"
  },

  rightRowContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 4,
    justifyContent: "space-around"
  },


  //* No Teams Stuff 

  noTeamsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "20%",
    width: "100%",
  },
  noTeamsText: {
    fontSize: 20,
    paddingBottom: "2%",
    alignSelf: "center",
  },




  //* General, reusable
  tableContainer: {
    maxHeight: "40%"
  },
  table: {
    dispaly: "flex",
    
  },
  tableHead: {

  },
  tableBody: {

  },
  tableCell: {
    width: "50%"
  },
  tableText: {
    fontSize: 18,
    padding: "1%",
    width:"100%"
  },


  button: {
    alignSelf: "center",
    width: "12%",
    fontSize: 14,
  },
  text: {
    fontSize: 18,
    padding: "1%",
  },
}));

export default styles;
