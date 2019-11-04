export const getProducts = async () => {
  const response = await fetch(`${window.location.origin}/data.json`).catch(e =>
    console.log(`Error: ${e}`)
  );
  const { products } = await response.json().catch(e => console.log(`Error: ${e}`));
  return products;
};
