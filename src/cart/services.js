export const getShipping = async () => {
  const response = await fetch(`${window.location.origin}/data.json`).catch(e =>
    console.log(`Error: ${e}`)
  );
  const { shipping } = await response.json().catch(e => console.log(`Error: ${e}`));
  return shipping;
};
