import React, {Component, useState} from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from 'yup';
import { css } from "@emotion/core";
import {HashLoader} from "react-spinners";

const schema = yup.object({
    userName: yup.string().required(),
    password: yup.string().required(),
});

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            loginSuccess: false,
        }
    }

    render() {
        const { loginClicked } = this.props;
        const { loginSuccess } = this.state;
        return ( loginSuccess ?
            (<HashLoader
                css={override}
                size={50}
                color={"red"}
                loading={this.state.loginSuccess}
            /> ) :
            <div className="login-panel">
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src="https://www.b-cube.in/wp-content/uploads/2014/05/aditya-300x177.jpg" id="icon"
                                 alt="User Icon"/>
                            <h1>Aditya News</h1>
                        </div>

                        <Formik
                            validationSchema={schema}
                            initialValues={{
                                userName: 'Mark',
                                password: 'Otto',
                            }}
                            onSubmit={() => {
                                this.setState({
                                    loginSuccess: true,
                                }, () => {
                                    setTimeout(
                                        () => {
                                            loginClicked();
                                        },
                                        3000
                                    );
                                })
                            }}
                        >
                            {({
                                  handleSubmit,
                                  handleChange,
                                  handleBlur,
                                  values,
                                  touched,
                                  isValid,
                                  errors,
                              }) => (
                                <Form noValidate
                                      onSubmit={handleSubmit}
                                      onKeyDown={(e) => {
                                          if (e.key === 'Enter') {
                                              handleSubmit();
                                          }
                                      }}>
                                    <Form.Control
                                        type="text"
                                        className="fadeIn second"
                                        placeholder="Tên đăng nhập"
                                        name="userName"
                                        value={values.userName}
                                        onChange={handleChange}
                                        isValid={touched.userName && !errors.userName}/>
                                    <Form.Control
                                        id="password"
                                        className="fadeIn third"
                                        placeholder="Mật khẩu"
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}/>
                                    <input type="submit" className="fadeIn fourth" value="Log In"/>
                                </Form>
                            )}
                        </Formik>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Go to the Site</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;