export const GET_COLOR = 'GET_COLOR';

export function getColor(color) {
  console.log(color)
  return {
    type: GET_COLOR,
    payload: { color: color }
  };
}