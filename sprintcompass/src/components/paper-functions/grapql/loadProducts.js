const GRAPHURL = "http://localhost:5000/graphql";
//const GRAPHURL = "/graphql";

const LoadProducts = async () => {
  try {
    let products = await fetch(GRAPHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query:
          "{products { productID, productName} }",
      }),
    });

    let json = await products.json();

    //console.log(json);

    return json.data.products;
  } catch (error) {
    console.log(error);
  }
};

export default LoadProducts;