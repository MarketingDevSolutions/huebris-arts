import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  cart: [],
  paintings: []
}

export const actionTypes = {
  FILL_PAINTINGS: 'FILL_PAINTINGS'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_PAINTINGS:
      return Object.assign({}, state, {
        paintings: action.paintings
      })
    default:
      return state
  }
}

// ACTIONS
export const savePaintingsData = (paintings) => {
  return { type: actionTypes.FILL_PAINTINGS, paintings: paintings}
}

export function initializeStore (initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}