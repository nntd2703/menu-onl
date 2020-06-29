import React from "react";
import {Item} from "./Item";
import {NavigationItem} from "./NavItem";
import {DISHES_DATA} from "../../utils/dishes-utils";

export const MenuItem = (props) => {
    const {findDishesKey, type, dishesList, navOnClicked} = props;

    const listCate = findDishesKey ? [{
        isSelected: true,
        dishesList: DISHES_DATA.Menu.filter((item) => {
            const name = item.Name ? item.Name.toLowerCase() : null;
            return name ? name.includes(findDishesKey.toLowerCase()) : false;
        }),
    }] : type;

    return (
        <>
            {!findDishesKey ? <ul className="mp-menu-tab-nav nav nav-tabs" role="tablist">
                {listCate.map((item) => <NavigationItem item={item} key={item.Code} navOnClicked={navOnClicked}/>)}
            </ul> : null}
            {listCate.map((item) => <div className="tab-content menu-tab-content" key={item.Code}>
                <div className={`tab-pane fade ${item.isSelected ? "show active" : null}`} id={item.key} role="tabpanel"
                     aria-labelledby={item.key}>
                    <div className="tab-pane-details row">
                        {!findDishesKey ? (
                            dishesList.filter((el) => el.parentKey === item.Code).map((detail) => (
                                <Item
                                    detail={detail}
                                    key={detail.Code}
                                    {...props}/>
                            ))
                        ) : (
                            item.dishesList.map((detail) => (
                                    <Item
                                        detail={detail}
                                        key={detail.Code}
                                        {...props}/>
                                )
                            ))}
                    </div>
                </div>
            </div>)}
        </>
    )
}