import React from 'react';
import {Button, Form, FormGroup, Row, Col} from "react-bootstrap";
import {ERROR_MESSAGE} from "../../../utils/utils";
import {Formik} from "formik";
import {WARD} from "../../../utils/wards";
import {DISTRICT} from "../../../utils/districts";
import * as yup from "yup";

const schema = yup.object({
    addressCity: yup.string().required('không được để trống'),
    addressDistrict: yup.string().required(' không được để trống'),
    addressWard: yup.string().required(' không được để trống'),
    addressDetails: yup.string().required(' không được để trống'),
});

export default class InputAddress extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            error: false,
            addressDistrict: undefined,
        }
    }

    getWard = (districtId) => {
        const wardArr = WARD.filter((item) => item.huyen_id === parseInt(districtId));
        return wardArr.sort(function (a, b) {
            return ('' + a.name).localeCompare(b.name);
        }).map((item) => (
            <option value={item.name}>{item.name}</option>
        ))
    };

    render() {
        const {error} = this.state;
        const { orderInformation } = this.props;
        return (
            <div className="input-address-delivery">
                <p className="modal-title-cus tit10">Delivery To: </p>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        addressCity: "Hồ Chí Minh",
                        addressDistrict: "",
                        addressWard: "",
                        addressDetails: "",
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
                      }) =>  (
                                <Form noValidate
                                      onSubmit={handleSubmit}
                                      onKeyDown={(e) => {
                                          if (e.key === 'Enter') {
                                              handleSubmit();
                                          }
                                      }}>
                                    <Form.Group as={Row}>
                                        <Form.Label sm="3" column={3}>
                                            City:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                                name="addressCity"
                                                plaintext
                                                readOnly
                                                defaultValue="Ho Chi Minh"
                                                value={values.addressCity}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label sm="3" column={3}>
                                            District:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                                id="addressDistrict"
                                                name="addressDistrict"
                                                value={values.addressDistrict}
                                                onChange={handleChange}
                                                as="select"
                                                isInvalid={!!errors.addressDistrict}>
                                                <option value="" className="d-none"/>
                                                {DISTRICT.map((item) => (
                                                    <option value={item.id}>{item.name}</option>
                                                ))}
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.addressDistrict}
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label sm="3" column={3}>
                                            Ward:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                                id="addressWard"
                                                name="addressWard"
                                                value={values.addressWard}
                                                onChange={handleChange}
                                                as="select"
                                                isInvalid={!!errors.addressWard}>
                                                <option value="" className="d-none"/>
                                                {this.getWard(values.addressDistrict)}
                                            </Form.Control>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.addressWard}
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label sm="3" column={3}>
                                            Address:
                                        </Form.Label>
                                        <Col sm="9">
                                            <Form.Control
                                                id="addressDetails"
                                                name="addressDetails"
                                                value={values.addressDetails}
                                                onChange={handleChange}
                                                isInvalid={!!errors.addressDetails}/>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.addressDetails}
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="w-50 delivery-button m-t-10"
                                            variant="danger"
                                            disabled={ !values.addressWard || !values.addressDistrict || !values.addressDetails || !orderInformation.name || !orderInformation.phone}
                                            onClick={() => {
                                                this.props.submitAddress({
                                                    ...values,
                                                    addressDistrict: DISTRICT.find(item => item.id === parseInt(values.addressDistrict)).name,
                                                })
                                            }}
                                        > <p className="m-0 p-0">Delivery to here </p> </Button>
                                    </div>
                                </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}