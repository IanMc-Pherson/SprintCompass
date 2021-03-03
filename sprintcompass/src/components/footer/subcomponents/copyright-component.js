import React from "react";
import Typography from "@material-ui/core/Typography";

import styles from "../../../styles/footer-styles";


const Copyright = () => {
  const style = styles();

  return (
    <div>
        <Typography color="textPrimary" className={style.copyright}>© Sprint Compass 2020</Typography>
    </div>
  );
};

export default Copyright; 