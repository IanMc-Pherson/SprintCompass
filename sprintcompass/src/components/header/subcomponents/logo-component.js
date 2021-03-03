import React from "react";
import Button from "@material-ui/core/Button";

import styles from "../../../styles/header-styles";
import logo from "../../../icons/drafting.svg";

const Logo = () => {

 const style = styles();

  return (
    <Button>
      <img src={logo} alt="logo" className={style.LogoIcon} />
    </Button>
  );
};

export default Logo;
