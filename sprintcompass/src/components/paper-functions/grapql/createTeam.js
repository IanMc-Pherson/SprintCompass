const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

const CreateTeam = async (name, product, startDate, hoursToPoint, totalPoints, totalCost) => {
  try {
    await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {addteam(name: "${name}", product: "${product}", startDate: "${startDate}", hoursToPoint: ${hoursToPoint}, totalPoints: ${totalPoints}, totalCost: ${totalCost}) {name,product,startDate,hoursToPoint,totalPoints,totalCost}}`
      })
    });
  }
  catch (error) {
    console.log(error);
  }
}

export default CreateTeam;