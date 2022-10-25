export async function loadItems() {
  const res = await fetch(`https://fakestoreapi.com/products?limit=6`);
  const items = await res.json();

  return items;
}
