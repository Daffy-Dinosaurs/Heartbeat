



/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}





// /*
//  * action types
//  */
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// export const LOAD_COUNTRIES = 'LOAD_COUNTRIES'

// /*
//  * other constants
//  */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_TEN: 'SHOW_TEN'
// }

// /*
//  * action creators
//  */
// export function setVisibilityFilter() {
//   return {
//     type: SET_VISIBILITY_FILTER, filter
//   }
// }

// export function loadCountries(text) {
//   return { type: LOAD_COUNTRIES, text }
// }

// /////////////////
// //STATE EXAMPLE
// // {
// //   visibilityFilter: 'SHOW_ALL',
// //   countries: [{
// //     countryName: 'country',
// //     localeId: 5
// //   }]
// // }