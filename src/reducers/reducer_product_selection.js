import { PRODUCT_SELECT } from '../actions';

const initialState = {
  products: "normal",
  color: "normal",
  price: "Very Expensive",
  name: "Premium Normal Cat",
  productURL:"images/normal.jpg"
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_SELECT:
      return action.payload
  }
  return state;
}