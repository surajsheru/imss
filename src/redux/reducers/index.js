import {combineReducers} from 'redux'
import {ImReducer} from '../reducers/ImReducer'
const rootReducer=combineReducers({
 Items:ImReducer
});
export default rootReducer