import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
    },

    overlay: {
      background:"transparent",
      boxShadow: "none",
      width: "100%",
      height: "100%"
    }
  }));

  export default styles;