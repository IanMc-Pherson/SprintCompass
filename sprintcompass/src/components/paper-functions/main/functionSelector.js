import React from "react";

import ProductBacklog from "./product-backlog";
import TeamMemberList from "./team-member-list";
import BasicProjectInfo from "./basic-project-information";

const FunctionSelector = (props) => { 
  switch (props.selection) {
    case 1:
      return (<ProductBacklog />);
    case 2:
      return (<TeamMemberList />);
    case 3:
      return (<BasicProjectInfo />);
  }
};

export default FunctionSelector;
