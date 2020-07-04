import {ACTION, OPTION_TYPE} from "../utils/constant";

const initialInformation = {
  name: null,
  phoneNumber: null,
  orderType: OPTION_TYPE.PickUp,
  pickUpBranch: null,
  deliveryInformation: null,
};

const deliveryInformation = (state = initialInformation, action) => {
    switch (action.type) {
        case ACTION.updateReceiverPhoneNumber: {
            return {
                ...state,
                phoneNumber: action.value,
            }
        }
        case ACTION.updateReceiverName: {
            return {
                ...state,
                name: action.value,
            }
        }
        case ACTION.updateReceiverInformation: {
            console.log('action', action)
            return {
                ...state,
                pickUpBranch: action.pickUpBranch,
                deliveryInformation: {
                    ...action.deliveryInformation
                }
            }
        }
        case ACTION.updateDeliveryType: {
            return {
                ...state,
                orderType: action.orderType,
            }
        }
        default: return state;
    }
};

export default deliveryInformation