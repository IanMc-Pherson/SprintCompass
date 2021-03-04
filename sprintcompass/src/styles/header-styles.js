import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  toolbar: {
    paddingLeft: "2%"
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: "5%",
    flexWrap: "nowrap"
  },
  title: {
    fontFamily: 'Roboto',
    backgroundColor: 'transparent' ,
    "&:hover": {
        backgroundColor: 'transparent' 
    },
    fontSize: 24,
    marginRight: "7%"
  },
  search: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: "white",
    marginRight: 15,
    height: "3.8ch",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "40ch",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    color: "#343434",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#424242",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    paddingLeft: "14%",
    //transition: theme.transitions.create("width"),
    width: "100%",
    /*[theme.breakpoints.up("sm")]: {
        width: "40ch",
        "&:focus": {
          width: "40ch",
        },
    },*/
  },
  LogoIcon: {
    height: "40px",
    width: "40px",
  },
  UserIcon: {
    height: "40px",
    width: "40px",
  },
}));

export default styles;
