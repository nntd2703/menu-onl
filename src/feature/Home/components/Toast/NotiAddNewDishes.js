import {Toast} from "react-bootstrap";
import React from "react";
import { connect } from "react-redux";
import { cleanUpdatedItemArr } from "../HomeAction";

class NotiAddNew extends React.Component {
    render() {
        const { updatedItem, cleanUpdatedItemArr } = this.props;
        let isShowToast = false;
        if(updatedItem) cleanUpdatedItemArr();
        isShowToast = !isShowToast ? !!updatedItem : setTimeout( () => {
            return !!updatedItem
            }, 3000);
        console.log('isShowToast', isShowToast);
        return (
            <Toast
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                show={isShowToast}
                onClose={() => {
                    console.log('close')
                }}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                    />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.foods,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        cleanUpdatedItemArr: () => {
            dispatch(cleanUpdatedItemArr());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotiAddNew);