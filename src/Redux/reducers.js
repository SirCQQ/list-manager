import {combineReducers} from 'redux'
import {listReducer} from './ListReducer'
import {itemReducer} from './ItemReducer'

export default combineReducers({
  list:listReducer,
  item:itemReducer
})