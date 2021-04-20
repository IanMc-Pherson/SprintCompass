const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

const LoadTeamMembers = async () => {
  try {
    let teamMembers = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "{team_members { teamName, name} }",
      }),
    });

    let json = await teamMembers.json();

    console.log(json);

    return json.data.team_members;
  } catch (error) {
    console.log(error);
  }
};

export default LoadTeamMembers;