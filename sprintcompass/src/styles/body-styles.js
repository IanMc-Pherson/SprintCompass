import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({


  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    width: "98%", //? Yeah not sure
    height: "100%",
    padding:"1%"
    //maxWidth: "200vh",
    //maxHeight: "79.5vh"
  },
  leftContainer: {    
    display: "flex",
    flex: 2,
    //backgroundColor: "blue",
    flexDirection: "column",
    paddingRight: "2%"
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
    flex: 12,
    padding: "1%",
    backgroundColor: "white",
    borderRadius: 10
  },

  statusBarPaper: {
    display: "flex",
    flex: 1,
    padding: "1%",
    backgroundColor: "white",
    borderRadius: 10
  },


  calendarPaper: {
    display: "flex",
    flex: 1,
    padding: "1%",
    marginBottom: "5%",
    backgroundColor: "white",
    borderRadius: 10
  },

  activityPaper: {
    display: "flex",
    flex: 1,
    padding: "1%",
    backgroundColor: "white",
    borderRadius: 10
  },



  text: {
      fontSize: 26,
      padding: "1%"
  }
}));

export default styles;
