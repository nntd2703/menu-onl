import React from "react";
import {Item} from "./Item";
import {NavigationItem} from "./NavItem";
import {DISHES_DATA} from "../../../../utils/dishes-utils";
import {connect} from "react-redux";
import {loadingDishes, decreaseQuantity, increaseQuantity} from "../../OrderFoodAction";

class MenuItem extends React.Component {
    render() {
        const {type, dishesList, loadingDishes, decreaseQuantity, increaseQuantity, findDishesKey} = this.props;

        const listCate = findDishesKey ? [{
            isSelected: true,
            dishesList: DISHES_DATA.Menu.filter((item) => {
                const name = item.Name ? item.Name.toLowerCase() : null;
                return name ? name.includes(findDishesKey.toLowerCase()) : false;
            }),
        }] : type;

        const renderItem = (detail) => <Item
            detail={detail}
            key={detail.Code}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
        />;

        return (
            <>
                {!findDishesKey ? <ul className="mp-menu-tab-nav nav nav-tabs" role="tablist">
                    {listCate.map((item) => <NavigationItem item={item} key={item.Code} navOnClicked={loadingDishes}/>)}
                </ul> : null}
                {listCate.map((item) => <div className="tab-content menu-tab-content" key={item.Code}>
                    <div className={`tab-pane fade ${item.isSelected ? "show active" : null}`} id={item.key}
                         role="tabpanel"
                         aria-labelledby={item.key}>
                        <div className="tab-pane-details row">
                            {!findDishesKey ? (
                                dishesList.filter((el) => el.parentKey === item.Code).map((detail) => (renderItem(detail)))
                            ) : (
                                item.dishesList.map((detail) => (renderItem(detail))
                                ))}
                        </div>
                    </div>
                </div>)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const {dishesList, type} = state.foods;
    return {
        dishesList,
        type,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingDishes: (itemKey) => {
            dispatch(loadingDishes(itemKey));
        },
        decreaseQuantity: (itemKey) => {
            dispatch(decreaseQuantity(itemKey));
        },
        increaseQuantity: (itemKey) => {
            dispatch(increaseQuantity(itemKey));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);