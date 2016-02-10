import axios from 'axios'
/*
 * action types
 */
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


/*
 * action creators
 */
// Send action to server
export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES'
export const requestCountries = () => {
  console.log("inside request countries")
  const url = '//localhost:3001/api/countries'
  const request = axios({
    url: url,
    timeout: 20000,
    method: 'get',
    responseType: 'json'
  }).then(function(data){
    console.log(data)
  }).catch()

  console.log("Action request", request)

  return {
    type: REQUEST_COUNTRIES,
    payload: request
  }
}

requestCountries();
// Recieved Action from server
// export const RECEIVED_COUNTRIES = 'RECEIVED_COUNTRIES'
// export const receivedCountries = (countryList, json) => {
//   return {
//     type: RECEIVED_COUNTRIES,
//     countryList,
//     list: json.data.children.map(child => child.data),
//   }
// }


// Thunk action creator
// export const fetchCountries = () => {
//   return (dispatch) => {
//     console.log(dispatch);
//     dispatch(requestCountries( ))
//     return fetch('http://localhost:3000/api/countries.json')
//         .then(response => response.json())
//         .then(json =>
//           dispatch(receivedCountries(countryList, json))
//         )
//   }
// }
/////////////////
//STATE EXAMPLE
// {
//   visibilityFilter: 'SHOW_ALL',
//   countries: [{
//     countryName: 'country',
//     localeId: 5
//   }]
// }
