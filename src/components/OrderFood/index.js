import React, {Component} from 'react';
import $ from "jquery";
import {DISHES_DATA} from "../../../dishes-utils";
import {Button, Form, InputGroup} from "react-bootstrap";
import {MenuItem} from "./MenuItem";
import {SummaryOrderPanel} from "./SummaryOrderPanel";

import ImageMenuHeader from "../../images/header-menu-01.jpg";
import ImageTitle from "../../images/bg-title-page-01.jpg";

class OrderFood extends Component {
    constructor(props) {
        super(props);

        const DISHES_DATA_MENU = DISHES_DATA.Menu;
        this.DISHES_DATA_MENU = DISHES_DATA_MENU;
        const type = DISHES_DATA.Type.filter((item) => item.Code !== 'SL');
        const data = type.map((item, index) => {
            const dishesList = [];
            DISHES_DATA_MENU.forEach((detail) => {
                const code = detail.Code;
                if(item.Code === code.substr(0, code.indexOf('-'))) {
                    dishesList.push({
                        parentKey: item.Code,
                        ...detail,
                    });
                }
            });
            return {
                key: `tab-${index+1}`,
                isSelected: index === 0,
                ...item,
                dishesList
            }
        });

        this.state = {
            data,
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

    navOnClicked = (keyItem) => {
        this.setState(preState => ({
            data: preState.data.map((item) => {
                item.isSelected = item.key === keyItem;
                return item;
            })
        }));
    };

    render() {
        const { data, findDishesKey } = this.state;

        return (
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
                        DISHES_DATA_MENU={this.DISHES_DATA_MENU}
                        data={data}
                        findDishesKey={findDishesKey}
                        navOnClicked={this.navOnClicked}
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
                <div className="total-order" align="center">
                    <SummaryOrderPanel/>
                </div>
            </div>
        );
    }
}

export default OrderFood;