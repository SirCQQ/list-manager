import {SET_ITEM,CLEAR_ITEM} from './ItemAction'
  const BASIC_STATE = {
    id: "",
    name: "",
    price: "",
    created: Date.now(),
    update:'',
    status:'create' // create/update
  };

export const itemReducer = (state = BASIC_STATE, action) => {
  switch (action.type) {
    case SET_ITEM:
      return {...action.payload}
    case CLEAR_ITEM:
      return BASIC_STATE;
    default:
      return state;
    }
};
