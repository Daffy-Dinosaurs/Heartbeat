export function selectCountry(country) {

  return {
    type: 'COUNTRY_SELECTED',
    payload: country,
  };
}
