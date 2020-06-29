import React, {Component} from 'react';
import HeaderComponent from "../Header";
import FoodOrder from "../../routers/FoodOrder";
import {DISHES_DATA} from "../../utils/dishes-utils";
import {ACTION} from "../../utils/utils";

class HomeLayout extends Component {
    constructor(props) {
        super(props);
        // const parse = [...DISHES_DATA.Menu].map(item => ({
        //     ...item,
        //     parentKey: item.Code.substr(0, item.Code.indexOf('-')),
        //     quantity: 0,
        // }));
        // console.log('parse', JSON.stringify(parse))
        this.state = {
            itemChoose: [],
            data: [...DISHES_DATA.Menu],
        }
    }

    itemClicked = (item, action) => {
        const { data } = this.state;
        const cloneData = [...data];
        const itemClickedIndex = cloneData.findIndex((el) => (el.Code === item.Code));
        if (action === ACTION.ADD_NEW_ITEM) data[itemClickedIndex].quantity++;
        else if (action === ACTION.REMOVE_ITEM) data[itemClickedIndex].quantity--;
        //TO DO
        this.setState({
            data: [...cloneData],
        });
    };

    render() {
        const { data } = this.state;
        return (
            <>
                <HeaderComponent />
                <FoodOrder
                    data={data}
                    itemClicked={this.itemClicked}
                />
            </>
        );
    }
}

export default HomeLayout;