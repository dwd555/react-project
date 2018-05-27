import * as cash from './action-type';
// export function init(data){
//   return{
//     type:cash.INIT,
//     data:data
//   }
// }
export const init=data=>{
  return{
    type:cash.INIT,
    data:data
  }
}
