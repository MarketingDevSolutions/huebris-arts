import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  cart: [],
  paintings: [],
  smallCanvases:[],
  prints:[],
  isCartOpen: false
}

export const actionTypes = {
  FILL_PAINTINGS: 'FILL_PAINTINGS',
  FILL_PRINTS: 'FILL_PRINTS',
  FILL_CANVASES: 'FILL_CANVASES',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART',
  EMPTY_CART: 'EMPTY_CART',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
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
    case actionTypes.OPEN_CART:
      return Object.assign({}, state, {
        isCartOpen: true
      })
      break;
    case actionTypes.CLOSE_CART:
      return Object.assign({}, state, {
        isCartOpen: false
      })
      break;
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: []
      }
      break; 
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: []
      }
      break;
    case actionTypes.REMOVE_CART_ITEM:
      const { product } = action;
      return {
        ...state,
        cart: state.cart.filter(element => 
          !(element.type === product.type && element.item.id === product.item.id) 
          )
      }
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

export const openCart = () => {
  return { type: actionTypes.OPEN_CART}
}

export const closeCart = () => {
  return { type: actionTypes.CLOSE_CART}
}

export const emptyCart = () => {
  return { type: actionTypes.EMPTY_CART}
}

export const removeCartItem = (product) => {
  return { type: actionTypes.REMOVE_CART_ITEM , product}
}

export function initializeStore (initialState = initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}