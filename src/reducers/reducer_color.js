import { GET_COLOR } from '../actions';

const initialState = {
  color: "normal"
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COLOR:
   return action.payload
  }
  return state;
}