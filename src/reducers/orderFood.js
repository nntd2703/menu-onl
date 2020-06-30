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


const foods = (state = initialStateDishes, action) => {
    switch (action.type) {
        case ACTION.loadingDishes:
            return {
                ...state,
                dishesList: [
                    ...state.dishesList,
                    ...loadingItem(action.itemKey),
                ]
            };
        default: return state;
    }
};

export default foods
