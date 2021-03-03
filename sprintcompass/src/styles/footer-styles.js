import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
    root: {
        display: "flex",
        position: "relative",
        width: "100%",
    },

    appBar: {
        background: 'linear-gradient(45deg, #bdbdbd 60%, #e0e0e0 90%)', 
        border: 0,
    },
    copyrightContainer: {
        flex: 1,
        marginLeft: "2%"
    },
    socialsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    linksContainer: {
        flex: 1,
        justifyContent: 'space-around',
        marginRight: "2%"
    },

    copyright: {
        fontSize: 18
    },
    socialsIcon: {
        color: "#424242",
        height: "40px",
        width: "40px",
        marginLeft: "4%",
        marginRight: "4%"
    },
    link: {
        color: "#424242",
        fontSize: 14
    }
});

export default styles;