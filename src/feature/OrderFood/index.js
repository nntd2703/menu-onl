import React, {Component} from 'react';
import OrderFoodComponent from "./components/OrderFoodComponent";
import HeaderComponent from "../Home/components/Header";

class OrderFood extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                <OrderFoodComponent/>
            </>
        );
    }
}

export default OrderFood;