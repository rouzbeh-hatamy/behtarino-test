export async function loadItem(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const item = await res.json();

  return item;
}
