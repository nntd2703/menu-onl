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