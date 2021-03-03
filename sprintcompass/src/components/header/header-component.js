import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//import {Logo, HeaderTitle, SearchBar, ProfileIcon} from "./subcomponents";

import Logo from "./subcomponents/logo-component";
import HeaderTitle from "./subcomponents/header-title-component";
import SearchBar from "./subcomponents/search-bar-component";
import ProfileIcon from "./subcomponents/profile-icon-component";
import Grid from "@material-ui/core/Grid";

import theme from "../../theme";
import styles from "../../styles/header-styles";

const Header = () => {
  const style = styles();

  
  return (
    <MuiThemeProvider theme={theme}>
      <div className={style.container}>
        <AppBar position="static" color="primary">
          <Toolbar className={style.toolbar}>
            <Logo />
            <Grid container className={style.titleContainer} wrap="nowrap">
              <HeaderTitle title="Sprints" link="#sprints" />
              <HeaderTitle title="Teams" link="#teams" />
              <HeaderTitle title="Reporting" link="#reporting" />
              <HeaderTitle title="Dashboard" link="#dashboard" />
            </Grid>
            <SearchBar />
            <ProfileIcon />
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
};

export default Header;
