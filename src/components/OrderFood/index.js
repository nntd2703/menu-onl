import React, {Component} from 'react';
import {NavigationItem} from "./NavItem";


import ImageMenuHeader from "../../images/header-menu-01.jpg";
import ImageTitle from "../../images/bg-title-page-01.jpg";
import $ from "jquery";
import {Item} from "./Item";
import {DISHES_DATA} from "../../../dishes-utils";
import {Form} from "react-bootstrap";

class OrderFood extends Component {
    constructor(props) {
        super(props);

        const DISHES_DATA_MENU = DISHES_DATA.Menu;
        this.DISHES_DATA_MENU = DISHES_DATA_MENU;
        const type = DISHES_DATA.Type;
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
            findDishesKey: '',
            navigationLayout: [],
            tabContentFilterItem: [],
            tabContentAllItem: [],
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

        this.handleRenderLayout();
    }

    navOnClicked = (keyItem) => {
        this.setState(preState => ({
            data: preState.data.map((item) => {
                item.isSelected = item.key === keyItem;
                return item;
            })
        }));
    };

    handleRenderLayout = (findDishesKey) => {
        const { data, tabContentAllItem } = this.state;
        const navigationLayout = [];
        const tabContentFilterItem = [];
        if (findDishesKey) {
            const result = this.DISHES_DATA_MENU.filter((item) => {
                const name = item.Name ? item.Name.toLowerCase() : null;
                return name ? name.includes(findDishesKey.toLowerCase()) : false;
            });
            tabContentFilterItem.push(
                <div className="tab-content menu-tab-content">
                    <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="true">
                        <div className="tab-pane-details row">
                            {result.map((detail) => (
                                <Item detail={detail} key={detail.Code} />
                            ))}
                        </div>
                    </div>
                </div>)
        } else if (tabContentAllItem.length === 0) {
            data.forEach((item) => {
                const { key, isSelected } = item;
                navigationLayout.push(<NavigationItem item={item} key={item.Code} navOnClicked={this.navOnClicked}/>);
                tabContentAllItem.push(
                    <div className="tab-content menu-tab-content">
                        <div className={`tab-pane fade ${isSelected ? "show active" : null}`} id={key} role="tabpanel" aria-labelledby={key}>
                            <div className="tab-pane-details row">
                                {item.dishesList.map((detail) => (
                                    <Item detail={detail} key={detail.Code} />
                                ))}
                            </div>
                        </div>
                    </div>)
            });
            console.log('tabContentAllItem', tabContentAllItem);
        }
        this.setState({
            navigationLayout,
            tabContentFilterItem,
        })
    };

    render() {
        const { navigationLayout, tabContentAllItem, tabContentFilterItem, findDishesKey} = this.state;
        const tabContent = !findDishesKey ? tabContentAllItem : tabContentFilterItem;
        console.log('tabContent', tabContent);
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
                        <Form.Control
                            className="bo-rad-10 sizefull txt10 p-l-20"
                            type="text"
                            placeholder="Find By Name"
                            name="username"
                            value={this.state.findDishesKey}
                            onChange={(e) => {
                                this.setState({
                                    findDishesKey: e.target.value,
                                }, () => {
                                    this.handleRenderLayout(this.state.findDishesKey);
                                })
                            }}
                        />
                    </div>
                    {!findDishesKey ? <ul className="mp-menu-tab-nav nav nav-tabs" role="tablist">
                            {navigationLayout}
                        </ul> : null}
                    {tabContent}
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
                    <div className="content container">
                        <p> hello this is a bottom div</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderFood;