import { ITEMS,CARTINS,CARTDEL,CARTITEMS } from '../actions/ImactionTypes'

export  const items={
    items:[],
    orders:[]
}

export const ImReducer=(state=items,action)=>{
  
    switch(action.type){
    case ITEMS:
        console.log(action.payload)
           state.items.push(action.payload)    
           console.log(state.items)
            return state.items
            case CARTDEL:
                items.orders=items.orders.filter(item=>item.name!==action.payload)
                return{
                      ...state,
                                            
                  }               
               case CARTINS:
                   console.log(action.payload)
                   items.orders.push(action.payload)
                   console.log(items.orders)
                   return{...state
                                                         
                   }   
              case CARTITEMS:
                   return state
     
        default:
         return state
        
    }
}