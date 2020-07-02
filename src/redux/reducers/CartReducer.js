import {CARTINS,CARTDEL,CARTITEMS} from '../actions/ImactionTypes'


export const CartReducer=(state=[],action)=>{
       console.log(state)

       switch (action.type) {
           case CARTDEL:
           
             return state.filter(item=>item.id!==action.payload)
            case CARTINS:
                console.log(action.payload)
                //cartItems.push(action.payload)
                return [...state,action.payload]
            default:
               return state
       }
} 
export default CartReducer