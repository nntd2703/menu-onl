import React, {Component} from 'react';
import OrderFood from "../components/OrderFood";

class FoodOrder extends Component {
    render() {
        //console.log('id', this.props.match.params.id)
        return (
            <OrderFood
                {...this.props}
            />
        );
    }
}

export default FoodOrder;