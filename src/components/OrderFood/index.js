import React, {Component} from 'react';
import $ from "jquery";
import {DISHES_DATA} from "../../utils/dishes-utils";
import {Button, Form, InputGroup} from "react-bootstrap";
import {MenuItem} from "./MenuItem";
import {SummaryOrderPanel} from "./SummaryOrderPanel";

import ImageMenuHeader from "../../images/header-menu-01.jpg";
import ImageTitle from "../../images/bg-title-page-01.jpg";
import PreOrder from "./popup/PreOrder";

class OrderFood extends Component {
    constructor(props) {
        super(props);
        const { data } = this.props;
        let dishesList = [];
        const type = [...DISHES_DATA.Type].map((item, index) => {
            let tempList = [];
            if (item.Code === 'SA') {
                tempList = [...data].filter(el => (el.parentKey === item.Code));
                dishesList = [...tempList];
            }
            return {
                key: `tab-${index + 1}`,
                isSelected: index === 0,
                ...item,
                quantity: tempList.length,
            }
        });

        console.log('dishesList', dishesList);

        this.state = {
            type,
            dishesList,
            findDishesKey: undefined,
            isShowOrderPopup: false,
            orderMethod: null,
        };
    }

    componentDidMount() {
        $(document).ready(function () {
            $(window).scroll(function () {
                var bHeight = $(window).height();
                var offset = $(window).scrollTop();
                $('.total-order').css({
                    top: bHeight + offset - 77 + 'px',
                });
            });
        });
    }

    navOnClicked = (Code) => {
        const { data } = this.props;
        const { type } = this.state;
        let tempArray = [];
        const cloneTypeData = type.map((item) => {
            if (item.Code === Code) {
                if (item.quantity === 0) {
                    const temp = data.filter((el) => el.parentKey === item.Code);
                    item.quantity = temp.length;
                    tempArray = [...temp];
                }
                item.isSelected = true;
            } else {
                item.isSelected = false;
            }
            return item;
        });
        this.setState({
            type: [...cloneTypeData],
            dishesList: [...this.state.dishesList, ...tempArray],
        });
    };

    orderMethod = (value) => {
        this.setState({
            orderMethod: {
                ...value
            },
        })
    };

    render() {
        const {type, dishesList, findDishesKey, isShowOrderPopup} = this.state;

        return (
            <>
                <PreOrder isShowOrderPopup={isShowOrderPopup} orderMethod={this.orderMethod}/>
                <div className="order-food">
                    <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
                             style={{backgroundImage: "url(" + ImageTitle + ")"}}>
                        <h2 className="tit6 t-center">
                            Pato Menu
                        </h2>
                    </section>
                    <div className="container p-t-20 p-b-20">
                        <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <InputGroup>
                                <Form.Control
                                    className="search-dishes-input bo-rad-10 sizefull txt10 p-l-20"
                                    type="text"
                                    placeholder="Find By Name"
                                    name="username"
                                    value={findDishesKey}
                                    onChange={(e) => {
                                        this.setState({
                                            findDishesKey: e.target.value,
                                        })
                                    }}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={() => {
                                        this.setState({
                                            findDishesKey: '',
                                        })
                                    }}>Clear</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        {<MenuItem
                            type={type}
                            dishesList={dishesList}
                            findDishesKey={findDishesKey}
                            navOnClicked={this.navOnClicked}
                            {...this.props}
                        />}
                    </div>
                    <section
                        className="section-lunch bgwhite">
                        <div
                            className="header-lunch parallax0 parallax100"
                            style={{backgroundImage: "url(" + ImageMenuHeader + ")"}}>
                            <div
                                className="bg1-overlay t-center p-t-170 p-b-165">
                                <h2
                                    className="tit4 t-center">
                                    Lunch
                                </h2>
                            </div>
                        </div>
                    </section>
                    {/*<div className="total-order" align="center">*/}
                    {/*    <SummaryOrderPanel/>*/}
                    {/*</div>*/}
                </div>
            </>
        );
    }
}

export default OrderFood;