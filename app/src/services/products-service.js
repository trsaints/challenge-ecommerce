async function getProducts(path, type) {
  const binURL = `https://api.jsonbin.io/v3/b/630a3993a1610e6386119477/`;
  const apiKey = "$2b$10$IZVLAix31GSpjITpSAO8ketbp/8/A2MXyuqhVejENVI9aJxOvnvRy";

  const options = {
    abridged: {
      method: "GET",
      headers: {
        "X-Access-Key": `${apiKey}`,
        "X-Bin-Meta": false,
        "X-JSON-Path": `$..${path}[:6]`,
        "Content-Type": "application/json",
      },
    },
    full: {
      method: "GET",
      headers: {
        "X-Access-Key": `${apiKey}`,
        "X-Bin-Meta": false,
        "X-JSON-Path": `$..${path}.*`,
        "Content-Type": "application/json",
      },
    },
  };

  const response = await fetch(binURL, options[type]);

  if (response.ok) {
    return response.json();
  }

  throw new Error("Não foi possível listar os produtos.");
}

export const productsService = {
  getProducts,
};
