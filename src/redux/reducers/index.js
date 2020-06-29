import {combineReducers} from 'redux'
import {ImReducer} from '../reducers/ImReducer'
import {CartReducer} from '../reducers/CartReducer'
const rootReducer=combineReducers({
 Items:ImReducer,
 Cart:CartReducer
});
export default rootReducer