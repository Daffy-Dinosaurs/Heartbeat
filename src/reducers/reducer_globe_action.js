export default function(state = null, action) {
  switch (action.type) {
    case 'GLOBE_ACTION_SELECTED':
      return action.payload;
  }
  return state;
}
