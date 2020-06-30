import React from "react";
import {Item} from "./Item";
import {NavigationItem} from "./NavItem";
import {DISHES_DATA} from "../../../../utils/dishes-utils";
import {connect} from "react-redux";
import { loadingDishes } from "../../OrderFoodAction";

class MenuItem extends React.Component {
    render() {
        const {type, dishesList} = this.props;

        const listCate = findDishesKey ? [{
            isSelected: true,
            dishesList: DISHES_DATA.Menu.filter((item) => {
                const name = item.Name ? item.Name.toLowerCase() : null;
                return name ? name.includes(findDishesKey.toLowerCase()) : false;
            }),
        }] : type;

        console.log('dishesList', dishesList);

        const findDishesKey = null;
        return (
            <>
                {!findDishesKey ? <ul className="mp-menu-tab-nav nav nav-tabs" role="tablist">
                    {listCate.map((item) => <NavigationItem item={item} key={item.Code} navOnClicked={()=>{}}/>)}
                </ul> : null}
                {listCate.map((item) => <div className="tab-content menu-tab-content" key={item.Code}>
                    <div className={`tab-pane fade ${item.isSelected ? "show active" : null}`} id={item.key} role="tabpanel"
                         aria-labelledby={item.key}>
                        <div className="tab-pane-details row">
                            {!findDishesKey ? (
                                dishesList.filter((el) => el.parentKey === item.Code).map((detail) => (
                                    <Item
                                        detail={detail}
                                        key={detail.Code}/>
                                ))
                            ) : (
                                item.dishesList.map((detail) => (
                                        <Item
                                            detail={detail}
                                            key={detail.Code}/>
                                    )
                                ))}
                        </div>
                    </div>
                </div>)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { dishesList, type } = state.foods;
    return {
        dishesList,
        type,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingDishes: (itemKey) => {
            dispatch(loadingDishes(itemKey));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);