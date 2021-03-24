import {makeStyles} from "@material-ui/core/styles";

//! Deprecated

const styles = makeStyles((theme) => ({

  root: {
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10
  },
  paper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    //backgroundColor: "white",
    boxShadow: " 0 0 0",
    borderRadius: "0px 0px 10px 10px;",
  },
  noTeamsPaper: {
    display: "flex",
    width: "100%",
    paddingTop:"20%",
    backgroundColor: "#f5f5f5",
    boxShadow: " 0 0 0 0",
    borderRadius: "0px 0px 10px 10px;",
    flexDirection: "column"
  },
  noTeamsText: {
    fontSize: 20,
    paddingBottom: "2%",
    alignSelf: "center"
  },
  button: {
    alignSelf: "center",
    width: "12%",
    fontSize: 14
  },
  text: {
    fontSize: 18,
    padding: "1%",
    alignSelf: "center"
}


}));

export default styles;