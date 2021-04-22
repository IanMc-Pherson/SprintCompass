const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

const LoadSprints = async () => {
  try {
    let sprints = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{sprints {sprintID, productID, sprintNumber}}`, 
      }),
    });

    let json = await sprints.json();

    //console.log(json);

    return json.data.sprints;
  } catch (error) {
    console.log(error);
  }
};

export default LoadSprints;

/* const LoadSprints = async () => {
  try {
    let sprints = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query($productID: Int){sprints (productID: $productID) {sprintID, productID, sprintNumber}}`, 
        variables: { productID: givenID }
      }),
    });

    let json = await sprints.json();

    console.log(json);

    return json.data.sprints;
  } catch (error) {
    console.log(error);
  }
};

export default LoadSprints; */