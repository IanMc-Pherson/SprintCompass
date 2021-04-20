const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

// sprintID is 0 on creation because it doesn't start in a sprint
const CreateSubtask = async (subtaskID, storyID, taskDescription, hoursWorked, hoursLeft, assignedTo) => {
    // PASS NEW ID USING THIS:
    // const lastSubtask = subtasks.slice(-1)
    // let newID = lastSubtask.subtaskID + 1

  try {
    await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {addSubtask(subtaskID: ${subtaskID}, storyID: ${storyID}, taskDescription: "${taskDescription}", hoursWorked: ${hoursWorked}, hoursLeft: ${hoursLeft}, assignedTo: "${assignedTo}") {subtaskID, storyID, taskDescription, hoursWorked, hoursLeft, assignedTo}}`
      })
    });
  }
  catch (error) {
    console.log(error);
  }
}

export default CreateSubtask;