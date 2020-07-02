import { ITEMS } from '../actions/ImactionTypes'
import { Items } from '../actions/ImActions'

 

 

export const ImReducer=(state=[],action)=>{
  
    switch(action.type){
    case ITEMS:
        console.log(action.payload)
        //    state.items.push(action.payload)    
        //    console.log(state.items)
         return action.payload
                                
        default:
         return state
        
    }
}