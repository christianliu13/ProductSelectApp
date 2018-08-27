import { combineReducers } from 'redux';

import ProductSelect from './reducer_product_selection';
import Product from './reducer_products';

const rootReducer = combineReducers({
  select: ProductSelect,
  products: Product
})

export default rootReducer;
