import React, {Component} from 'react';
import $ from "jquery";
import {Button, Form, InputGroup} from "react-bootstrap";
import MenuItem from "./MenuItem";

import ImageMenuHeader from "../../../../images/header-menu-01.jpg";
import ImageTitle from "../../../../images/bg-title-page-01.jpg";
import PreOrder from "./popup/PreOrder";

class OrderFoodComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findDishesKey: undefined,
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

    render() {
        return (
            <>
                <PreOrder/>
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
                                    value={this.state.findDishesKey}
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
                        <MenuItem findDishesKey={this.state.findDishesKey}/>
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

export default OrderFoodComponent;