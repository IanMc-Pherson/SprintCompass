import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import styles from "../../../styles/header-styles";

const SearchBar = () => {
  const style = styles();

  return (
    <div className={style.search}>
      <div className={style.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        fullWidth={true}
        classes={{
          root: style.inputRoot,
          input: style.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default SearchBar;
