import React from "react";
import Button from "@material-ui/core/Button";
import styles from "../../../styles/header-styles";

const HeaderTitle = ({ title, link }) => {
  const style = styles();

  return (
    <Button color="inherit" className={style.title} href={link}>{title}</Button>
  )
};

export default HeaderTitle;
 