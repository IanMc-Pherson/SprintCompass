import React from "react";
import {MuiThemeProvider} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import FooterLink from "./subcomponents/footer-link-component";
import Copyright from "./subcomponents/copyright-component";

import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Reddit from "@material-ui/icons/Reddit";
import YouTube from "@material-ui/icons/YouTube";

import styles from "../../styles/footer-styles";
import theme from "../../theme";

const Footer = () => {
    const style = styles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={style.root}>
                <AppBar position="relative" className={style.appBar}>
                    <Toolbar>
                    <Grid containter className={style.copyrightContainer} wrap="nowrap">
                        <Copyright />
                    </Grid>
                    <Grid container className={style.socialsContainer} wrap="nowrap">
                        <IconButton className={style.socialsIcon}>
                            <Instagram />
                        </IconButton>

                        <IconButton className={style.socialsIcon}> 
                            <Twitter />
                        </IconButton>

                        <IconButton className={style.socialsIcon}>
                            <Reddit />
                        </IconButton>

                        <IconButton className={style.socialsIcon}>
                            <YouTube />
                        </IconButton>
                    </Grid>
                    <Grid container className={style.linksContainer} wrap="nowrap">
                        <FooterLink title="FAQ" link="#" />
                        <FooterLink title="Privacy Policy" link="#" />
                        <FooterLink title="Terms & Conditions" link="#" />
                        <FooterLink title="Contact Us" link="#" /> 
                    </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        </MuiThemeProvider>
    )
}

export default Footer;