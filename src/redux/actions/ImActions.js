import {ITEMS,SNEAKERS} from './ImactionTypes'
import {database} from '../../firebase/firebase'
import 'firebase/firestore'
import firebase from 'firebase/app'
const firestore=firebase.firestore()
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
export const setItem=(note)=>{
    return dispatch=>{
        database.push(note)
    }
     }
 
     //deleting the item from cart
      export const deleteItem=(id)=>{
         console.log(id)
         return dispatch=>{database.child(`${id}`).remove()}
 
     }