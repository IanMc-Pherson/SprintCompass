import "./App.css";
import React from "react";
import Header from "./components/header/header-component"; 
import Body from "./components/body/body-component";
import Footer from "./components/footer/footer-component";

import styles from "./styles/main-styles";

/*
  TODO:   Figure out the difference between makeStyles and useStyles 
  TODO:   Figure out how to make multiline TODO comments
*/

// Normal Comment
//* Important
//? What the heck?
//! Warning
//TODO: Make a TODO list

function App() {  
  const style = styles();

  return (
      <div className={style.root}>
        <Header />
        <Body />
        <Footer />
      </div>
    )
}

export default App;
  