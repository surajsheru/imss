import { ITEMS,SNEAKERS } from '../actions/ImactionTypes'

const items={}
export const ImReducer=(state=items,actoin)=>{
  
    switch(actoin.type){
    case ITEMS:
        console.log(actoin.payload)
            return   actoin.payload
     default:
         return state
        
    }
}