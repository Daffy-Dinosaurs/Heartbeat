
import { combineReducers } from 'redux'
import { REQUEST_COUNTRIES, POST_COUNTRIES } from './actions'

const countryList = (state = { isFetching: false, countryList: [] } , action) => {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case POST_COUNTRIES:
      return Object.assign({}, state, {
        isFetching: false,
        countryList: action.payload
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  countryList
})

export default rootReducer
