const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";


const CreateMember = async (teamName, name) => {
  try {
    await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {addmember(teamName: "${teamName}", name: "${name}") {teamName, name}}`
      })
    });
  }
  catch (error) {
    console.log(error);
  }
}

export default CreateMember;