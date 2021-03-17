import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
    root: {
        display: "flex",
        position: "relative",
        width: "100%",
    },

    appBar: {    
        background: 'linear-gradient(45deg, #bdbdbd 40%, #e0e0e0 90%)', 
        //background: 'linear-gradient(45deg, #2196f3 10%, #39f9fc 100%)', 
        //background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
        //background: 'linear-gradient(90deg, rgba(148,187,233,1) 0%, rgba(238,174,202,1) 100%)',
        //background: "rgba(162, 162, 162, 1)",
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