const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";


const CreateProduct = async (productID, productName) => {
  try {
    await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {addProduct(productID: ${productID}, productName: "${productName}") {productID, productName}}`
      })
    });
  }
  catch (error) {
    console.log(error);
  }
}

export default CreateProduct;