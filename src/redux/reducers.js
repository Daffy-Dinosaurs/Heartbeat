
import { combineReducers } from 'redux'
import { REQUEST_COUNTRIES } from './actions'

const countryList = (state = [] , action) => {
  switch (action.type) {
    case REQUEST_COUNTRIES:
      console.log('payload data:', action.payload.data)
      return [
        action.payload.data, ...state
      ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  countryList
})

export default rootReducer
