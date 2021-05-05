export const SET_ITEM= 'set_item'
export const CLEAR_ITEM = 'clear_item'
export const setItem=(item)=>{

  return {
    type:SET_ITEM,
    payload:item
  }
}
export const clearItem=()=>{
  return {
    type:CLEAR_ITEM,
  }
}


