import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  cart: [],
  paintings: [],
  smallCanvases: [],
  prints: [],
  stickers: [],
  combos: [],
  isCartOpen: false
}

export const actionTypes = {
  FILL_PAINTINGS: 'FILL_PAINTINGS',
  FILL_PRINTS: 'FILL_PRINTS',
  FILL_CANVASES: 'FILL_CANVASES',
  FILL_STICKERS: 'FILL_STICKERS',
  FILL_COMBOS: 'FILL_COMBOS',
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART',
  EMPTY_CART: 'EMPTY_CART',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM'
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILL_PAINTINGS:
      return Object.assign({}, state, {
        paintings: action.paintings
      })
    case actionTypes.FILL_PRINTS:
      return Object.assign({}, state, {
        prints: action.prints
      })
    case actionTypes.FILL_CANVASES:
      return Object.assign({}, state, {
        smallCanvases: action.canvases
      })
    case actionTypes.FILL_STICKERS:
      return Object.assign({}, state, {
        stickers: action.stickers
      })
    case actionTypes.FILL_COMBOS:
      return Object.assign({}, state, {
        combos: action.combos
      })
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.item)
      }
    case actionTypes.OPEN_CART:
      return Object.assign({}, state, {
        isCartOpen: true
      })
    case actionTypes.CLOSE_CART:
      return Object.assign({}, state, {
        isCartOpen: false
      })
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: []
      }
    case actionTypes.REMOVE_CART_ITEM:
      const { product } = action
      return {
        ...state,
        cart: state.cart.filter(element =>
          !(element.type === product.type && element.item.id === product.item.id)
        )
      }
    default:
      return state
  }
}

// ACTIONS
export const savePaintingsData = (paintings) => {
  return { type: actionTypes.FILL_PAINTINGS, paintings }
}

export const savePrintsData = (prints) => {
  return { type: actionTypes.FILL_PRINTS, prints }
}

export const saveCanvasesData = (canvases) => {
  return { type: actionTypes.FILL_CANVASES, canvases }
}

export const saveStickersData = (stickers) => {
  return { type: actionTypes.FILL_STICKERS, stickers }
}

export const saveCombosData = (combos) => {
  return { type: actionTypes.FILL_COMBOS, combos }
}

export const addItemToCart = (item) => {
  return { type: actionTypes.ADD_ITEM_TO_CART, item }
}

export const openCart = () => {
  return { type: actionTypes.OPEN_CART }
}

export const closeCart = () => {
  return { type: actionTypes.CLOSE_CART }
}

export const emptyCart = () => {
  return { type: actionTypes.EMPTY_CART }
}

export const removeCartItem = (product) => {
  return { type: actionTypes.REMOVE_CART_ITEM, product }
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
