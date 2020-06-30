import {ACTION} from "../../utils/constant";

export const loadingDishes = (itemKey) => ({
    type: ACTION.loadingDishes,
    itemKey,
});