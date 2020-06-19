import React, {Component} from 'react';
import HeaderComponent from "../Header";
import FoodOrder from "../../routers/FoodOrder";

class HomeLayout extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <FoodOrder/>
            </>
        );
    }
}

export default HomeLayout;