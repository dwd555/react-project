import * as cash from './action-type';
let defaultState=[]
export const cashData=(state=defaultState,action)=>{
  switch(action.type){
    case cash.INIT:
      // return [...state,action.data]
      return action.data
    default:
      return state
  }
}
