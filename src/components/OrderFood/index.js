import React, {Component} from 'react';

import ImageMenuHeader from "../../images/header-menu-01.jpg";
import ImageTitle from "../../images/bg-title-page-01.jpg";
import DetailImage from "../../images/lunch-01.jpg";
import $ from "jquery";

class OrderFood extends Component {
    componentDidMount() {
        $( document ).ready(function() {
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
            <div className="order-food">
                <section className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
                         style={{backgroundImage: "url(" + ImageTitle + ")"}}>
                    <h2 className="tit6 t-center">
                        Pato Menu
                    </h2>
                </section>
                <div className="container p-t-20 p-b-20">
                    <ul className="mp-menu-tab-nav nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1"
                               aria-selected="false">
                                <i className="flaticon-005-coffee-1"></i>
                                <div className="mpm-text">
                                    <h5>Breakfast</h5>
                                    <p>Weekdays 8:30a.m. — 11:30a.m.</p>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2"
                               aria-selected="false">
                                <i className="flaticon-013-salad"></i>
                                <div className="mpm-text">
                                    <h5>Brunch</h5>
                                    <p>Weekdays 8:30a.m. — 11:30a.m.</p>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3"
                               aria-selected="false">
                                <i className="flaticon-008-soup"></i>
                                <div className="mpm-text">
                                    <h5>Lunch</h5>
                                    <p>Weekdays 8:30a.m. — 11:30a.m.</p>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active show" data-toggle="tab" href="#tab-4" role="tab"
                               aria-controls="tab-4" aria-selected="true">
                                <i className="flaticon-018-lobster"></i>
                                <div className="mpm-text">
                                    <h5>Dinner</h5>
                                    <p>Weekdays 8:30a.m. — 11:30a.m.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content menu-tab-content">
                        <div className="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                            <div className="tab-pane-details row">
                                <div className="blo3 row m-b-30 col-md-6 col-sm-12" onClick={() => console.log('first item')}>
                                    <div className="pic-blo3 bo-rad-20 hov-img-zoom col-md-3 col-5 p-0">
                                        <a href="#"><img src={DetailImage} alt="IMG-MENU"/></a>
                                    </div>

                                    <div className="text-blo3 col-md-9 col-7">
                                        <a href="#" className="txt21 m-b-3">
                                            Sed varius
                                        </a>

                                        <div className="txt23">Aenean pharetra tortor dui in pellentesque</div>
                                        <div className="txt22 m-t-20">$29.79</div>
                                    </div>
                                </div>
                                <div className="blo3 row m-b-30 col-md-6 col-sm-12 ">
                                    <div className="pic-blo3 bo-rad-20 hov-img-zoom col-md-3 col-5 p-0">
                                        <a href="#"><img src={DetailImage} alt="IMG-MENU"/></a>
                                    </div>

                                    <div className="text-blo3 col-md-9 col-7">
                                        <a href="#" className="txt21 m-b-3">
                                            Sed varius
                                        </a>

                                        <div className="txt23">Aenean pharetra tortor dui in pellentesque</div>
                                        <div className="txt22 m-t-20">$29.79</div>
                                    </div>
                                </div>
                                <div className="blo3 row m-b-30 col-md-6 col-sm-12 ">
                                    <div className="pic-blo3 bo-rad-20 hov-img-zoom col-md-3 col-5 p-0">
                                        <a href="#"><img src={DetailImage} alt="IMG-MENU"/></a>
                                    </div>

                                    <div className="text-blo3 col-md-9 col-7">
                                        <a href="#" className="txt21 m-b-3">
                                            Sed varius
                                        </a>

                                        <div className="txt23">Aenean pharetra tortor dui in pellentesque</div>
                                        <div className="txt22 m-t-20">$29.79</div>
                                    </div>
                                </div>
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
                    <div className="content">
                        <p> hello this is a bottom div</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderFood;