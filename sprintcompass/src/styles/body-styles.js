import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    width: "97%", 
    height: "100%",
    padding: "1%",
    paddingLeft: "1.5%",
    paddingRight: "1.5%"
    //maxWidth: "200vh",
    //maxHeight: "79.5vh"
  },
  leftContainer: {    
    display: "flex",
    flex: 3,
    //backgroundColor: "blue",
    flexDirection: "column",
    paddingRight: "1.5%"
    //padding: "2%"
  },
  rightContainer: {  
    display: "flex",
    flex: 1,    
    //backgroundColor: "green",
    flexDirection: "column",
    //padding: "2%"
  },

  // TODO - Have other paper's inherit main paper style
  paper: {
    display: "flex",
    padding: "1%",
    backgroundColor: "white",
    borderRadius: 10
  },

  mainPaper: {
    display: "flex",
    flex: 20,
    padding: "1.3%",
    backgroundColor: "white",
    borderRadius: 10
  },

  statusBarPaper: {
    display: "flex",
    flex: 1,
    padding: "0.8%",
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10
  },


  calendarPaper: {
    display: "flex",
    flex: 1,
    padding: "2%",
    marginBottom: "6%",
    backgroundColor: "white",
    borderRadius: 10
  },

  activityPaper: {
    display: "flex",
    flex: 1,
    padding: "2%",
    backgroundColor: "white",
    borderRadius: 10
  },



  text: {
      fontSize: 26,
      padding: "1%"
  }
}));

export default styles;
