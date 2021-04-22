import React from "react";

import SprintPlan from "./sprint-plan";
import TeamMemberList from "./team-member-list";
import BasicProjectInfo from "./basic-project-information";
import ProductBacklogs from "./product-backlog";

const FunctionSelector = (props) => { 
  switch (props.selection) {
    case 1:
      return (<SprintPlan />);
    case 2:
      return (<TeamMemberList />);
    case 3:
      return (<ProductBacklogs />);
    default:
      return 0;
  }
};

export default FunctionSelector;
