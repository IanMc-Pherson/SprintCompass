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
    paddingTop: "1%",
    flexDirection: "row",
  },
  leftContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",   
    //backgroundColor: "green"
  },
  rightContainer: { 
    display: "flex",
    flex: 1.5,
    flexDirection: "column",
    //backgroundColor: "red"
  },

  //* The header is going to act like the navigator
  //* Arrow left and right, with a plus on right for adding new
  iconButton: {
    width: 25,
    height: 25
  },
  arrowLeft: {
    display: "flex",
    flex: 1,
  },
  arrowRight: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  },
  //* for hold headerButtonContainer and side buttons
  headerLineContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    padding:"1%",
    width: "100%",
  },
  //* for holding buttons
  headerButtonContainer: {
    display: "flex",
    flex: 18,
    justifyContent: "flex-start",
    alignSelf: "center",
  },

  navButton: {
    
  },

  headerButtons: {
    fontSize: 18, 
    width: "20%",
    color: theme.palette.primary.main,
  },

  testButton: {
    fontSize: 18, 
    width: "10%",
    color: theme.palette.primary.main,
    justifySelf: "flex-end"
  },

  text: {
    fontSize: 18,
    padding: "1%",
    justifySelf: "center",
    alignSelf: "center",
  }



}));

export default styles;
