const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

const LoadTeams = async () => {
  try {
    let teams = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query:
          "{teams { name, product, startDate, hoursToPoint, totalPoints, totalCost} }",
      }),
    });

    let json = await teams.json();

    return json.data.teams;
  } catch (error) {
    console.log(error);
  }
};

export default LoadTeams;
