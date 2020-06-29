import {CARTINS,CARTDEL,CARTITEMS} from '../actions/ImactionTypes'

const cartItems=[]
export const CartReducer=(state=cartItems,action)=>{
       console.log(state)

       switch (action.type) {
           case CARTDEL:
           
             return{
                   ...state,
                   cartitems:state.cartitems.filter(item=>item.id!==action.payload.id)
                   
               }               
            case CARTINS:
                console.log(action.payload)
                cartItems.push(action.payload)
                return{
                    ...cartItems                 
                }   
           case CARTITEMS:
                return state
           default:
               return state
       }
} 
export default CartReducer