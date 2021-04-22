const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

const LoadStories = async () => {
  try {
    let stories = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{stories{storyID,sprintID,productID,storyDescription,pointEstimate,costEstimate}}`, 
      }),
    });

    let json = await stories.json();

    //console.log(json);

    return json.data.stories;
  } catch (error) {
    console.log(error);
  }
};

export default LoadStories;

/* const LoadStories = async (givenID) => {
  try {
    let stories = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query($sprintID: Int){stories(sprintID:$sprintID){storyID,sprintID,storyDescription,pointEstimate,costEstimate}}`, 
        variables: { sprintID: givenID }
      }),
    });

    let json = await stories.json();

    console.log(json);

    return json.data.stories;
  } catch (error) {
    console.log(error);
  }
};

export default LoadStories; */