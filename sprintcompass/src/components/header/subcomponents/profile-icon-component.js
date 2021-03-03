import { React, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import UserIcon from "../../../icons/priest.svg";
import DraftsIcon from "@material-ui/icons/Drafts";
import Power from "@material-ui/icons/Power";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";

import styles from "../../../styles/header-styles";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null} 
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center", 
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white, 
      },
    },
  },
}))(MenuItem);

const ProfileIcon = () => {
  const style = styles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={style.UserIcon} 
        borderRadius="30"
        onClick={handleClick}>
        <img src={UserIcon} alt="logo" width="50px" height="50px" />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <AccountCircle fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <SettingsApplicationsIcon fontSize="large" /> 
          </ListItemIcon>
          <ListItemText primary="Preferences" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Power fontSize="large" />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </StyledMenuItem>

      </StyledMenu>
    </div>
  );
};

export default ProfileIcon;
