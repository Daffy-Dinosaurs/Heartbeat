import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp



// import { combineReducers } from 'redux'
// import { VisibilityFilters, SET_VISIBILITY_FILTER, LOAD_COUNTRIES } from './actions'

// const { SHOW_ALL } = VisibilityFilters

// console.log('Visibility Filters', VisibilityFilters, 'SET_VISIBILITY', SET_VISIBILITY_FILTER,'LOAD_COUNTRIES', LOAD_COUNTRIES)

// function visibilityFilter(state = SHOW_ALL, action) {
//   // console.log('action type', action.type, 'action filter', action.filter)
  
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }

// function countries(state = [], action) {
//   // console.log('countries action.type', action.type, 'state', state)
//   switch (action.type) {
//     case LOAD_COUNTRIES:
//       return [
//         ...state,
//         {
//           text: action.text,
//         }
//       ]
//     default:
//       return state
//   }
// }


// const countryList = combineReducers({
//   visibilityFilter,
//   countries
// })

// export default countryList