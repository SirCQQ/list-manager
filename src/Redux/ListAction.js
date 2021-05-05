export const ADD_TO_LIST = "add_to_list";
export const CLEAR_LIST = "clear_list";
export const REMOVE_ITEM_BY_ID = "remove_item_from_list";
export const UPDATE_ITEM_BY_ID = 'update_item_by_id'
export const addToList = (item) => {
  return {
    type: ADD_TO_LIST,
    payload: item,
  };
};
export const updateItemById= (item) => {
  return {
    type: UPDATE_ITEM_BY_ID,
    payload: item,
  };
};
export const clearItemsList = () => {
  return {
    type: CLEAR_LIST,
  };
};
export const removeFromListById = (itemId) => {
  return {
    type: REMOVE_ITEM_BY_ID,
    payload: itemId,
  };
};


