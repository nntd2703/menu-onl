"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _formik = require("formik");

var yup = _interopRequireWildcard(require("yup"));

var _firebase = _interopRequireDefault(require("../../firebase"));

var _utils = require("../../utils/utils");

var _logo = _interopRequireDefault(require("../../images/logo.png"));

var _LoadingSpinnerComponent = _interopRequireDefault(require("../LoadingSpinnerComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var schema = yup.object({
  username: yup.string().required('Tên đặt nhập không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống')
});

var LoginComponent = /*#__PURE__*/function (_Component) {
  _inherits(LoginComponent, _Component);

  var _super = _createSuper(LoginComponent);

  function LoginComponent() {
    var _this;

    _classCallCheck(this, LoginComponent);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "authentication", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, password) {
        var isAccountExist;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                isAccountExist = false;
                _context.next = 4;
                return _firebase.default.database().ref(_utils.FIREBASE_KEY.account).once('value', function (snapshot) {
                  snapshot.forEach(function (childSnapshot) {
                    if (childSnapshot.val().username === username && childSnapshot.val().password === password) {
                      isAccountExist = true;
                    }
                  });
                });

              case 4:
                return _context.abrupt("return", isAccountExist);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 10:
                _context.prev = 10;

                _this.setState({
                  loading: false
                });

                return _context.finish(10);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7, 10, 13]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (values) {
      _this.setState({
        loading: true
      }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var authen;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.authentication(values.username, values.password);

              case 2:
                authen = _context2.sent;

                if (authen) {
                  _this.props.loginClicked();

                  _this.setState({
                    error: false
                  });
                } else {
                  _this.setState({
                    error: true
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    });

    _this.state = {
      loading: false,
      error: false
    };
    return _this;
  }

  _createClass(LoginComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {// const username = "tqtoan";
      // const password = "123";
      // const permission = "0";
      // const ref = firebase.database().ref(`${FIREBASE_KEY.account}/`);
      // ref.push({
      //     username,
      //     password,
      //     permission,
      // }).then((data) => {
      //     ref.child(data.key).update({
      //         key: data.key,
      //     })
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          error = _this$state.error;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "login-panel"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "wrapper fadeInDown ".concat(loading ? 'background-transfer' : null)
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "formContent"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fadeIn first"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: _logo.default,
        id: "icon",
        alt: "User Icon"
      })), /*#__PURE__*/_react.default.createElement(_LoadingSpinnerComponent.default, {
        loading: loading
      }), /*#__PURE__*/_react.default.createElement(_formik.Formik, {
        validationSchema: schema,
        initialValues: {
          username: 'nntdat',
          password: '123'
        },
        onSubmit: this.onSubmit
      }, function (_ref3) {
        var handleSubmit = _ref3.handleSubmit,
            handleChange = _ref3.handleChange,
            handleBlur = _ref3.handleBlur,
            values = _ref3.values,
            touched = _ref3.touched,
            isValid = _ref3.isValid,
            errors = _ref3.errors;
        return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, {
          noValidate: true,
          onSubmit: handleSubmit,
          onKeyDown: function onKeyDown(e) {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }
        }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
          type: "text",
          placeholder: "T\xEAn \u0111\u0103ng nh\u1EADp",
          name: "username",
          value: values.username,
          onChange: handleChange,
          isInvalid: !!errors.username
        }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control.Feedback, {
          type: "invalid"
        }, errors.username)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {
          id: "password",
          className: "fadeIn third",
          placeholder: "M\u1EADt kh\u1EA9u",
          type: "password",
          name: "password",
          value: values.password,
          onChange: handleChange,
          isInvalid: !!errors.password
        }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control.Feedback, {
          type: "invalid"
        }, errors.password)), error ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, {
          className: "error-message"
        }, _utils.ERROR_MESSAGE.incorrectLogin) : null, /*#__PURE__*/_react.default.createElement("input", {
          type: "submit",
          className: "fadeIn fourth",
          value: "\u0110\u0103ng nh\u1EADp"
        }));
      }), /*#__PURE__*/_react.default.createElement("div", {
        id: "formFooter"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "underlineHover",
        href: "#"
      }, "Go to the support")))));
    }
  }]);

  return LoginComponent;
}(_react.Component);

var _default = LoginComponent;
exports.default = _default;