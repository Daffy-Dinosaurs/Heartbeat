export function globeAction(country) {

  return {
    type: 'GLOBE_ACTION_SELECTED',
    payload: country,
  };
}
