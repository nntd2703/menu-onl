import {DISHES_DATA} from "../utils/dishes-utils";
import {ACTION} from "../utils/constant";

const firstItemKey = 'SA';

const loadingItem = (itemKey) => {
    return DISHES_DATA.Menu.reduce((c, n) => n.parentKey === itemKey ? [...c, n] : c, []);
};

const initialStateDishes = {
    dishesList: loadingItem(firstItemKey),
    type: DISHES_DATA.Type.map((item, index) => ({
        ...item,
        isSelected: index === 0,
    })),
};

const editQuantityItem = (itemKey, dishesList, action) => {
    const data = [...dishesList];
    const item = data.find(item => item.Code === itemKey);
    item.quantity = action === ACTION.increaseQuantity ? item.quantity + 1 : item.quantity - 1;
    return data;
};

const foods = (state = initialStateDishes, action) => {
    switch (action.type) {
        case ACTION.dishesTypeClicked:
            return {
                type: [...state.type].reduce((c, n) => [...c, {...n, isSelected: n.Code === action.itemKey}], []),
                dishesList: [
                    ...state.dishesList,
                    ...loadingItem(action.itemKey),
                ]
            };
        case ACTION.increaseQuantity:
            return {
                ...state,
                dishesList: editQuantityItem(action.itemKey, state.dishesList, ACTION.increaseQuantity),
            };
        case ACTION.decreaseQuantity:
            return {
                ...state,
                dishesList: editQuantityItem(action.itemKey, state.dishesList, ACTION.decreaseQuantity),
            };
        default: return state;
    }
};

export default foods
