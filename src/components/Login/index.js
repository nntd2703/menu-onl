import React, {Component} from 'react';
import {Form, FormGroup} from "react-bootstrap";
import {Formik} from "formik";
import * as yup from 'yup';
import firebase from "../../firebase";
import {ERROR_MESSAGE, FIREBASE_KEY} from "../../utils";
import logo from "../../images/logo.png";
import LoadingSpinnerComponent from "../LoadingSpinnerComponent";

const schema = yup.object({
    username: yup.string().required('Tên đặt nhập không được để trống'),
    password: yup.string().required('Mật khẩu không được để trống'),
});

class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            error: false,
        }
    }

    componentDidMount() {
        // const username = "tqtoan";
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

    authentication = async (username, password) => {
        try {
            let isAccountExist = false;
            await firebase.database().ref(FIREBASE_KEY.account).once('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val().username === username && childSnapshot.val().password === password) {
                        isAccountExist = true;
                    }
                })
            });
            return isAccountExist;
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                loading: false
            })
        }
    };

    onSubmit = (values) => {
        this.setState({
            loading: true,
        }, async () => {
            const authen = await this.authentication(values.username, values.password);
            if (authen) {
                this.props.loginClicked();
                this.setState({
                    error: false,
                })
            } else {
                this.setState({
                    error: true,
                })
            }
        })
    };

    render() {
        const {loading, error} = this.state;

        return (
            <div className="login-panel">
                <div className={`wrapper fadeInDown ${loading ? "background-transfer" : null}`}>
                    <div id="formContent">
                        <div className="fadeIn first">
                            <img src={logo} id="icon"
                                 alt="User Icon"/>
                        </div>
                        <LoadingSpinnerComponent loading={loading} />
                        <Formik
                            validationSchema={schema}
                            initialValues={{
                                username: 'nntdat',
                                password: '123',
                            }}
                            onSubmit={this.onSubmit}
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
                                    <FormGroup>
                                        <Form.Control
                                            type="text"
                                            placeholder="Tên đăng nhập"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            isInvalid={!!errors.username}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.username}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup>
                                        <Form.Control
                                            id="password"
                                            className="fadeIn third"
                                            placeholder="Mật khẩu"
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isInvalid={!!errors.password}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    {error ? <Form.Label class="error-message">
                                        {ERROR_MESSAGE.incorrectLogin}
                                    </Form.Label> : null}
                                    <input type="submit" className="fadeIn fourth" value="Đăng nhập"/>
                                </Form>
                            )}
                        </Formik>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Go to the support</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;