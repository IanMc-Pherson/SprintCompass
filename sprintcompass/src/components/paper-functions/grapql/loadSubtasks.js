const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

const LoadSubtasks = async () => {
  try {
    let subtasks = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{subtasks{subtaskID,storyID,taskDescription,hoursWorked,hoursLeft}}`, 
      }),
    });

    let json = await subtasks.json();

    //console.log("inside loadsubtask");
    //console.log(json);

    return json.data.subtasks;
  } catch (error) {
    console.log(error);
  }
};

export default LoadSubtasks;

/* const LoadSubtasks = async (givenID) => {
  try {
    let subtasks = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({
        query: `query($storyID: Int){subtasks(storyID:$storyID){subtaskID,storyID,taskDescription,hoursWorked,hoursLeft}}`, 
        variables: { storyID: givenID }
      }),
    });

    let json = await subtasks.json();

    console.log(json);

    return json.data.subtasks;
  } catch (error) {
    console.log(error);
  }
};

export default LoadSubtasks; */