"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _fa = require("react-icons/fa");

var _NotiAddNewDishes = _interopRequireDefault(require("../Toast/NotiAddNewDishes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HeaderComponent = /*#__PURE__*/function (_Component) {
  _inherits(HeaderComponent, _Component);

  var _super = _createSuper(HeaderComponent);

  function HeaderComponent(props) {
    var _this;

    _classCallCheck(this, HeaderComponent);

    _this = _super.call(this, props);
    _this.state = {
      totalItem: 3,
      totalPrice: "234.000"
    };
    return _this;
  }

  _createClass(HeaderComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /*[ Fixed Header ]
      ===========================================================*/
      var header = (0, _jquery.default)('header');
      var logo = (0, _jquery.default)(header).find('.logo img');
      var linkLogo1 = (0, _jquery.default)(logo).attr('src');
      var linkLogo2 = (0, _jquery.default)(logo).data('logofixed');
      (0, _jquery.default)(window).on('scroll', function () {
        if ((0, _jquery.default)(this).scrollTop() > 5 && (0, _jquery.default)(this).width() > 992) {
          (0, _jquery.default)(logo).attr('src', linkLogo2);
          (0, _jquery.default)(header).addClass('header-fixed');
        } else {
          (0, _jquery.default)(header).removeClass('header-fixed');
          (0, _jquery.default)(logo).attr('src', linkLogo1);
        }
      });
      (0, _jquery.default)(document).ready(function () {
        (0, _jquery.default)('body').append('<div class="overlay-sidebar trans-0-4"></div>');
        var ovlSideBar = (0, _jquery.default)('.overlay-sidebar');
        var btnShowSidebar = (0, _jquery.default)('.btn-show-sidebar');
        var btnHideSidebar = (0, _jquery.default)('.btn-hide-sidebar');
        var sidebar = (0, _jquery.default)('.sidebar');
        (0, _jquery.default)(btnShowSidebar).on('click', function () {
          (0, _jquery.default)(sidebar).addClass('show-sidebar');
          (0, _jquery.default)(ovlSideBar).addClass('show-overlay-sidebar');
        });
        (0, _jquery.default)(btnHideSidebar).on('click', function () {
          (0, _jquery.default)(sidebar).removeClass('show-sidebar');
          (0, _jquery.default)(ovlSideBar).removeClass('show-overlay-sidebar');
        });
        (0, _jquery.default)(ovlSideBar).on('click', function () {
          (0, _jquery.default)(sidebar).removeClass('show-sidebar');
          (0, _jquery.default)(ovlSideBar).removeClass('show-overlay-sidebar');
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          totalItem = _this$state.totalItem,
          totalPrice = _this$state.totalPrice;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "wrap-menu-header gradient1 trans-0-4"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "container h-full"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "wrap_header trans-0-3"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "logo"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "index.html"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/icons/logo2.png'),
        alt: "IMG-LOGO",
        "data-logofixed": require('../../../../images/icons/logo2.png')
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "wrap_menu p-l-0-xl"
      }, /*#__PURE__*/_react.default.createElement("nav", {
        className: "menu"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "main_menu"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "index.html"
      }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "menu.html"
      }, "Menu")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "reservation.html"
      }, "Reservation")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "gallery.html"
      }, "Gallery")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "about.html"
      }, "About")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "blog.html"
      }, "Blog")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "contact.html"
      }, "Contact"))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "wrap_menu_cart"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "menu"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "m-b-0"
      }, /*#__PURE__*/_react.default.createElement("li", {
        className: "dis-inline-block w-100 t-center"
      }, /*#__PURE__*/_react.default.createElement("a", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "dis-inline"
      }, /*#__PURE__*/_react.default.createElement(_fa.FaShoppingCart, {
        size: 30
      })), /*#__PURE__*/_react.default.createElement("p", {
        className: "total-price dis-inline p-l-15 font-weight-bolder"
      }, "".concat(totalItem, " : ").concat(totalPrice, " vnd")), /*#__PURE__*/_react.default.createElement("p", {
        className: "intro-payment m-b-0 font-italic"
      }, "(Click here to complete order)")))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "social h-100 flex-w flex-l-m p-r-20"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "btn-show-sidebar m-l-33 trans-0-4"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        "aria-live": "polite",
        "aria-atomic": "true",
        style: {
          position: 'relative'
        }
      }, /*#__PURE__*/_react.default.createElement(_NotiAddNewDishes.default, null))))), /*#__PURE__*/_react.default.createElement("aside", {
        className: "sidebar trans-0-4"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "btn-hide-sidebar ti-close color0-hov trans-0-4"
      }), /*#__PURE__*/_react.default.createElement("ul", {
        className: "menu-sidebar p-t-95 p-b-70"
      }, /*#__PURE__*/_react.default.createElement("li", {
        className: "t-center m-b-13"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "index.html",
        className: "txt19"
      }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
        className: "t-center m-b-13"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "menu.html",
        className: "txt19"
      }, "Menu")), /*#__PURE__*/_react.default.createElement("li", {
        className: "t-center m-b-13"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "gallery.html",
        className: "txt19"
      }, "Gallery")), /*#__PURE__*/_react.default.createElement("li", {
        className: "t-center m-b-13"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "about.html",
        className: "txt19"
      }, "About")), /*#__PURE__*/_react.default.createElement("li", {
        className: "t-center m-b-13"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "blog.html",
        className: "txt19"
      }, "Blog")), /*#__PURE__*/_react.default.createElement("li", {
        className: "t-center m-b-33"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "contact.html",
        className: "txt19"
      }, "Contact")), /*#__PURE__*/_react.default.createElement("li", {
        className: "t-center"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "reservation.html",
        className: "btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto"
      }, "Reservation"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "gallery-sidebar t-center p-l-60 p-r-60 p-b-40"
      }, /*#__PURE__*/_react.default.createElement("h4", {
        className: "txt20 m-b-33"
      }, "Gallery"), /*#__PURE__*/_react.default.createElement("div", {
        className: "wrap-gallery-sidebar flex-w"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-01.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-01.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-02.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-02.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-03.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-03.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-05.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-05.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-06.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-06.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-07.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-07.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-09.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-09.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-10.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-10.jpg'),
        alt: "GALLERY"
      })), /*#__PURE__*/_react.default.createElement("a", {
        className: "item-gallery-sidebar wrap-pic-w",
        href: "images/photo-gallery-11.jpg",
        "data-lightbox": "gallery-footer"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: require('../../../../images/photo-gallery-thumb-11.jpg'),
        alt: "GALLERY"
      }))))));
    }
  }]);

  return HeaderComponent;
}(_react.Component);

var _default = HeaderComponent;
exports.default = _default;