import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  cart: [],
  openPainting: null,
  paintings: [],
  smallCanvases:[],
  prints:[]
}

export const actionTypes = {
  FILL_PAINTINGS: 'FILL_PAINTINGS',
  FILL_PRINTS: 'FILL_PRINTS',
  FILL_CANVASES: 'FILL_CANVASES',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  OPEN_PAINTING_MODAL: 'OPEN_PAINTING_MODAL',
  CLOSE_PAINTING_MODAL: 'CLOSE_PAINTING_MODAL',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_PAINTINGS:
      return Object.assign({}, state, {
        paintings: action.paintings
      })
      break;
    case actionTypes.FILL_PRINTS:
      return Object.assign({}, state, {
        prints: action.prints
      })
      break;
    case actionTypes.FILL_CANVASES:
      return Object.assign({}, state, {
        smallCanvases: action.canvases
      })
      break;
    case actionTypes.ADD_ITEM_TO_CART:
       return { 
        ...state,
        cart: state.cart.concat(action.item)
    }
      break;
    case actionTypes.OPEN_PAINTING_MODAL:
       return Object.assign({}, state, {
        openPainting: action.painting
      })
      break;
    case actionTypes.CLOSE_PAINTING_MODAL:
       return Object.assign({}, state, {
        openPainting: null
      })
      break;
    default:
      return state
  }
}

// ACTIONS
export const savePaintingsData = (paintings) => {
  return { type: actionTypes.FILL_PAINTINGS, paintings}
}

export const savePrintsData = (prints) => {
  return { type: actionTypes.FILL_PRINTS, prints}
}

export const saveCanvasesData = (canvases) => {
  return { type: actionTypes.FILL_CANVASES, canvases}
}

export const addItemToCart = (item) => {
  return { type: actionTypes.ADD_ITEM_TO_CART, item}
}

export const openPaintingModal = (painting) => {
  return { type: actionTypes.OPEN_PAINTING_MODAL, painting}
}

export const closePaintingModal = () => {
  return { type: actionTypes.CLOSE_PAINTING_MODAL }
}

export function initializeStore (initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}