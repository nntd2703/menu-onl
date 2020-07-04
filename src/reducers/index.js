import { combineReducers } from 'redux'
import foods from "./orderFood";
import deliveryInformation from "./deliveryInformation";

export default combineReducers({
    foods,
    deliveryInformation,
})