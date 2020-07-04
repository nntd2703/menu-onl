import React, {Component} from 'react';
import $ from 'jquery';
import {FaShoppingCart} from "react-icons/fa";
import NotiAddNew from "../Toast/NotiAddNewDishes";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItem: 3,
            totalPrice: "234.000",
        }
    }

    componentDidMount() {
        /*[ Fixed Header ]
        ===========================================================*/
        var header = $('header');
        var logo = $(header).find('.logo img');
        var linkLogo1 = $(logo).attr('src');
        var linkLogo2 = $(logo).data('logofixed');


        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 5 && $(this).width() > 992) {
                $(logo).attr('src', linkLogo2);
                $(header).addClass('header-fixed');
            } else {
                $(header).removeClass('header-fixed');
                $(logo).attr('src', linkLogo1);
            }

        });
        $(document).ready(function () {
            $('body').append('<div class="overlay-sidebar trans-0-4"></div>');
            var ovlSideBar = $('.overlay-sidebar');
            var btnShowSidebar = $('.btn-show-sidebar');
            var btnHideSidebar = $('.btn-hide-sidebar');
            var sidebar = $('.sidebar');

            $(btnShowSidebar).on('click', function () {
                $(sidebar).addClass('show-sidebar');
                $(ovlSideBar).addClass('show-overlay-sidebar');
            });

            $(btnHideSidebar).on('click', function () {
                $(sidebar).removeClass('show-sidebar');
                $(ovlSideBar).removeClass('show-overlay-sidebar');
            });

            $(ovlSideBar).on('click', function () {
                $(sidebar).removeClass('show-sidebar');
                $(ovlSideBar).removeClass('show-overlay-sidebar');
            })

        });
    }

    render() {
        const { totalItem, totalPrice } = this.state;
        return (
            <>
                <header>
                    <div className="wrap-menu-header gradient1 trans-0-4">
                        <div className="container h-full">
                            <div className="wrap_header trans-0-3">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src={require('../../../../images/icons/logo2.png')} alt="IMG-LOGO"
                                             data-logofixed={require('../../../../images/icons/logo2.png')}/>
                                    </a>
                                </div>
                                <div className="wrap_menu p-l-0-xl">
                                    <nav className="menu">
                                        <ul className="main_menu">
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>

                                            <li>
                                                <a href="menu.html">Menu</a>
                                            </li>

                                            <li>
                                                <a href="reservation.html">Reservation</a>
                                            </li>

                                            <li>
                                                <a href="gallery.html">Gallery</a>
                                            </li>

                                            <li>
                                                <a href="about.html">About</a>
                                            </li>

                                            <li>
                                                <a href="blog.html">Blog</a>
                                            </li>

                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                                <div className="wrap_menu_cart">
                                    <div className="menu">
                                        <ul className="m-b-0">
                                            <li className="dis-inline-block w-100 t-center">
                                                <a>
                                                    <div className="dis-inline"><FaShoppingCart size={30}/></div>
                                                    <p className="total-price dis-inline p-l-15 font-weight-bolder">{`${totalItem} : ${totalPrice} vnd`}</p>
                                                    <p className="intro-payment m-b-0 font-italic">(Click here to complete order)</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="social h-100 flex-w flex-l-m p-r-20">
                                    <button className="btn-show-sidebar m-l-33 trans-0-4"></button>
                                </div>
                            </div>

                            <div
                                aria-live="polite"
                                aria-atomic="true"
                                style={{
                                    position: 'relative',
                                }}
                            >
                            <NotiAddNew/>
                            </div>
                        </div>
                    </div>

                </header>

                <aside className="sidebar trans-0-4">
                    <button className="btn-hide-sidebar ti-close color0-hov trans-0-4"></button>

                    <ul className="menu-sidebar p-t-95 p-b-70">
                        <li className="t-center m-b-13">
                            <a href="index.html" className="txt19">Home</a>
                        </li>

                        <li className="t-center m-b-13">
                            <a href="menu.html" className="txt19">Menu</a>
                        </li>

                        <li className="t-center m-b-13">
                            <a href="gallery.html" className="txt19">Gallery</a>
                        </li>

                        <li className="t-center m-b-13">
                            <a href="about.html" className="txt19">About</a>
                        </li>

                        <li className="t-center m-b-13">
                            <a href="blog.html" className="txt19">Blog</a>
                        </li>

                        <li className="t-center m-b-33">
                            <a href="contact.html" className="txt19">Contact</a>
                        </li>

                        <li className="t-center">
                            <a href="reservation.html" className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto">
                                Reservation
                            </a>
                        </li>
                    </ul>

                    <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
                        <h4 className="txt20 m-b-33">
                            Gallery
                        </h4>

                        <div className="wrap-gallery-sidebar flex-w">
                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-01.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-01.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-02.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-02.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-03.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-03.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-05.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-05.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-06.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-06.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-07.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-07.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-09.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-09.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-10.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-10.jpg')} alt="GALLERY"/>
                            </a>

                            <a className="item-gallery-sidebar wrap-pic-w" href="images/photo-gallery-11.jpg"
                               data-lightbox="gallery-footer">
                                <img src={require('../../../../images/photo-gallery-thumb-11.jpg')} alt="GALLERY"/>
                            </a>
                        </div>
                    </div>
                </aside>
            </>
        );
    }
}

export default HeaderComponent;