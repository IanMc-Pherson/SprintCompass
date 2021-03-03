import React from "react";
import Link from "@material-ui/core/Link";

import styles from "../../../styles/footer-styles";

const FooterLink = ({title, link}) => {
    const style = styles();

    return (
        <Link color="black" component="button" className={style.link} href={link}>{title}</Link>
    )
};

export default FooterLink;