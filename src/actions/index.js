export const PRODUCT_SELECT = 'PRODUCT_SELECT';

export default function productSelect(product, color, price, name) {
  let productURL = "images/" + color + ".jpg";
  return {
    type: PRODUCT_SELECT,
    payload: {
      products: product,
      color: color,
      price: price,
      name: name,
      productURL: productURL
    }
  };
}