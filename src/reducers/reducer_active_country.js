export default function(state = null, action) {
  switch (action.type) {
    case 'COUNTRY_SELECTED':
      return action.payload;
  }

  return state;
}
