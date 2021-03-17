import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({

  root: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    width: "100%",
    //borderRadius: 10
  },

  header: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "100%"
  },

  body: {
    display: "flex",
    flex: 10,
    width: "100%"
  },  

  arrow: {
    width: 25,
    height: 25
  },

  arrowLeft: {
    display: "flex",
    flex: 1,
  },

  headerText: {
    display: "flex",
    flex: 18,
    justifyContent: "flex-start",
    alignSelf: "center",
    alignItems: "center"
  },

  arrowRight: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  },

  navigator: {
    display: "flex",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    //boxShadow: "inset 0 0 5px",
    borderRadius: "10px 10px 0px 0px",
    paddingLeft: "2%",
    paddingRight: "2%"
  },
  navButton: {
    color:"white",
    backgroundColor: 'transparent',
      "&:hover": {
        backgroundColor: 'transparent' 
      }
  },
  paper: {
    display: "flex",
    width: "100%",
    height: "20%",
    backgroundColor: "#4BA9FE",
    boxShadow: "inset 0 0 5px",
    //borderRadius: 3
  },
  text: {
    fontSize: 26,
    padding: "1%",
    color: "white"
  }


}));

export default styles;