import {ACTION} from "../../utils/constant";

export const loadingDishes = (itemKey) => ({
    type: ACTION.dishesTypeClicked,
    itemKey,
});

export const increaseQuantity = (itemKey) => ({
    type: ACTION.increaseQuantity,
    itemKey,
});

export const decreaseQuantity = (itemKey) => ({
    type: ACTION.decreaseQuantity,
    itemKey,
});

export const updatePhoneNumber = (value) => ({
    type: ACTION.updateReceiverPhoneNumber,
    value,
});

export const updateReceiverName = (value) => ({
    type: ACTION.updateReceiverName,
    value,
});

export const updateDeliveryInformation = (pickUpBranch, deliveryInformation) => ({
    type: ACTION.updateReceiverInformation,
    pickUpBranch,
    deliveryInformation,
});

export const updateDeliveryType = (orderType) => ({
    type: ACTION.updateDeliveryType,
    orderType,
});