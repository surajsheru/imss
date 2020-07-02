import {ITEMS,CARTINS,CARTDEL,CARTITEMS} from './ImactionTypes'
import {database} from '../../firebase/firebase'
// import 'firebase/firestore'
// import firebase from 'firebase/app'
// const firestore=firebase.firestore()
//load items for shopping
export const Items=()=>{
    return dispatch=>{
             database.on('value',snapshot=>{
             console.log(snapshot.val())
                dispatch({
                type:ITEMS,
                payload:snapshot.val()
            })
        })
        
    }
}

//inser into cart
export const CartItem=(item)=>{
    return{
        type:CARTINS,
        payload:item
    }
}
 
     //deleting the item from cart
      export const deleteItem=(item)=>{
         console.log(item)
         return{
            type:CARTDEL,
            payload:item
        }
 
     }

     //displaying cart items
     export const CartDisplay=()=>{
         return{
             type:CARTITEMS
         }
     }