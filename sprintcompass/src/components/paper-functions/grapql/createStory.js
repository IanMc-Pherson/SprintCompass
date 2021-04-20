const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

// sprintID is 0 on creation because it doesn't start in a sprint
const CreateStory = async (storyID, storyDescription, pointEstimate, costEstimate) => {
    // PASS NEW ID USING THIS:
    // const lastStory = stories.slice(-1)
    // let newID = lastStory.storyID + 1

  try {
    await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {addStory(storyID: ${storyID}, sprintID: 0, storyDescription: "${storyDescription}", pointEstimate: ${pointEstimate}, costEstimate: ${costEstimate}) {storyID, sprintID, storyDescription, pointEstimate, costEstimate}}`
      })
    });
  }
  catch (error) {
    console.log(error);
  }
}

export default CreateStory;