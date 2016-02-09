import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions'

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(completeTodo(0))
store.dispatch(completeTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()


// import { loadCountries, setVisibilityFilter, VisibilityFilters } from './actions'

// console.log(store);

// // Log the initial state
// console.log(store.getState())
// console.log('CONSOLE LOG FROM STORES FILE')

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // Dispatch some actions
// store.dispatch(loadCountries('about actions'))
// store.dispatch(loadCountries('about reducers'))
// store.dispatch(loadCountries('about store'))
// //store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_TEN))

// // Stop listening to state updates
// unsubscribe()