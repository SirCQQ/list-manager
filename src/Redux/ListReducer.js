import {ADD_TO_LIST,CLEAR_LIST,REMOVE_ITEM_BY_ID, UPDATE_ITEM_BY_ID} from './ListAction'

const BASIC_STATE = [];

export const listReducer = (state = BASIC_STATE, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return [...state, action.payload];
    case REMOVE_ITEM_BY_ID:
      return state;
    case UPDATE_ITEM_BY_ID:
      return updateItem(state,action.payload)
    case CLEAR_LIST:
      return []
    default:
      return state;
  }
};


function updateItem(state,item){
  let new_state=[...state]
  for(let i=0; i <new_state.length;i++){
    if(new_state[i].id===item.id){
      new_state[i]={...item}
      break;
    }
  }
  return new_state;
}