import React from "react";
import {Item} from "./Item";
import {NavigationItem} from "./NavItem";

export const MenuItem = (props) => {
    const {findDishesKey, data, DISHES_DATA_MENU, navOnClicked} = props;

    const dishesListData = !findDishesKey ? data : [{
        isSelected: true,
        dishesList: DISHES_DATA_MENU.filter((item) => {
            const name = item.Name ? item.Name.toLowerCase() : null;
            return name ? name.includes(findDishesKey.toLowerCase()) : false;
        }),
    }];

    return (
        <>
            {!findDishesKey ? <ul className="mp-menu-tab-nav nav nav-tabs" role="tablist">
                {data.map((item) => <NavigationItem item={item} key={item.Code} navOnClicked={navOnClicked}/>)}
            </ul> : null}
            {dishesListData.map((item) => <div className="tab-content menu-tab-content" key={item.Code} >
                <div className={`tab-pane fade ${item.isSelected ? "show active" : null}`} id={item.key} role="tabpanel"
                     aria-labelledby={item.key}>
                    <div className="tab-pane-details row">
                        {item.dishesList.map((detail) => (
                            <Item detail={detail} key={detail.Code}/>
                        ))}
                    </div>
                </div>
            </div>)}
        </>
    )
}