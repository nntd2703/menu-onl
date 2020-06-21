import React, {Component} from 'react';
import {FaPlusCircle, FaMinusCircle} from "react-icons/fa";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {NavigationItem} from "./NavItem";


import ImageMenuHeader from "../../images/header-menu-01.jpg";
import ImageTitle from "../../images/bg-title-page-01.jpg";
import DetailImage from "../../images/lunch-01.jpg";
import $ from "jquery";

class OrderFood extends Component {
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
        const dishesList = [1, 2, 3, 4, 5, 6];
        const navigationList = [
            {key:"#tab-1", defaultTab: true},
            {key:"#tab-2", defaultTab: false},
            {key:"#tab-3", defaultTab: false},
            {key:"#tab-4", defaultTab: false},
            ];
        return (
            <div className="order-food">
                <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
                         style={{backgroundImage: "url(" + ImageTitle + ")"}}>
                    <h2 className="tit6 t-center">
                        Pato Menu
                    </h2>
                </section>
                <div className="container p-t-20 p-b-20">
                    <ul className="mp-menu-tab-nav nav nav-tabs" role="tablist">
                        {navigationList.map((item) => (
                            <NavigationItem item={item}/>
                        ))}
                    </ul>
                    <div className="tab-content menu-tab-content">
                        <div className="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                            <div className="tab-pane-details row">
                                {dishesList.map((item) => (
                                    <div className="dishes-item blo3 row m-b-30 col-md-6 col-sm-12"
                                         onClick={() => console.log('first item')}>
                                        <div className="pic-blo3 bo-rad-20 hov-img-zoom col-md-3 col-5 p-0">
                                            <a href="#"><img src={DetailImage} alt="IMG-MENU"/></a>
                                        </div>

                                        <div className="text-blo3 col-md-9 col-7">
                                            <a href="#" className="txt21 m-b-3">
                                                Sed varius
                                            </a>

                                            <div className="txt23">Aenean pharetra tortor dui in pellentesque</div>

                                            <div className="price-content m-t-20 row">
                                                <div className="txt22 col-7">$29.79</div>
                                                <div className="txt22 col-5 action-button">
                                                    <Button variant="danger">
                                                        <FaMinusCircle/>
                                                    </Button>
                                                    <InputGroup>
                                                        <FormControl
                                                            disabled
                                                            className="custom-input"
                                                            type={'number'}
                                                            max={99}
                                                            placeholder="1"/>
                                                    </InputGroup>
                                                    <Button variant="success">
                                                        <FaPlusCircle/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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