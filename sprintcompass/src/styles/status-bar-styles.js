import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 3
  },
  statusBar: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
  },
  label: {
    fontSize: 15,
    alignSelf: "center",
    paddingLeft: "1%"
  }
}));

export default styles;