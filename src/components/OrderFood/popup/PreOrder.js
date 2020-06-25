import React from 'react';
import {Button, Col, Form, FormControl, FormGroup, Modal, Row} from "react-bootstrap";
import InputAddress from "./InputAddress";
import {ERROR_MESSAGE} from "../../../utils/utils";
import {Formik} from "formik";
import * as yup from "yup";

const OPTION_TYPE = {
    PickUp: 'pickup',
    Delivery: 'delivery',
};

const BRANCH = [{
    key: "bt",
    name: "BT Branch",
    address: " 21 Nguyễn Công Trứ, Phường 19, Bình Thạnh, Hồ Chí Minh",
    hotLine: "0123456789",
    openTime: "11AM - 10:30PM",
}, {
    key: "d2",
    name: "D2 Branch",
    address: "District 2",
    hotLine: "0123456789",
    openTime: "11AM - 10:30PM",
}];

const schema = yup.object({
    name: yup.string().required('Tên đặt nhập không được để trống'),
    phone: yup.string().required('Mật khẩu không được để trống'),
});

export default class PreOrder extends React.Component {
    constructor(props) {
        super(props);
        const {isShowOrderPopup} = this.props;
        this.state = {
            modalShow: isShowOrderPopup,
            optionType: '',
            addressDelivery: null,
        }
    };

    handleChange = (e) => {
        this.setState({
            optionType: e.target.value,
        })
    };

    render() {
        const {modalShow, optionType} = this.state;
        const {pickUpBranch} = this.props;

        let deliveryInformationLayout = null;
        if (optionType === OPTION_TYPE.PickUp) {
            deliveryInformationLayout = <PickUpLayout chooseBranchClicked={(key) => {
                this.setState({
                    modalShow: false,
                });
                pickUpBranch(key);
            }}
            />;
        } else if (optionType === OPTION_TYPE.Delivery) {
            deliveryInformationLayout = <DeliveryLayout submitAddress={(values) => {
                console.log('submitAddress', values)
                this.setState({
                    addressDelivery: {
                        ...values
                    }
                })
            }
            }/>;
        }
        return (
            <Modal
                show={modalShow}
                onHide={() => {
                    this.setState({
                        modalShow: false,
                    })
                }}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
                <div className="container">
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter" className="flex-c flex-m w-full">
                            LET'S START ORDERING
                        </Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <p className="modal-title-cus tit10">Order Type</p>
                    <Form.Group controlId="order-type">
                        <Form.Control as="select"
                                      defaultValue={optionType}
                                      onChange={(e) => this.handleChange(e)}>
                            <option className="d-none" value=''/>
                            <option value={OPTION_TYPE.Delivery}>Delivery</option>
                            <option value={OPTION_TYPE.PickUp}>Pick-up</option>
                        </Form.Control>
                    </Form.Group>
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            name: null,
                            phone: null,
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
                                <Row>
                                    <FormGroup className="col-md-6 col-12">
                                        <p>Name: </p>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup className="col-md-6 col-12">
                                        <p>Phone Number: </p>
                                        <Form.Control
                                            type={'number'}
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            isInvalid={!!errors.phone}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                    <div className="col-12 p-0">
                        {deliveryInformationLayout}
                    </div>
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button className="button-color" onClick={() => {*/}
                {/*        this.setState({*/}
                {/*            modalShow: false,*/}
                {/*        })*/}
                {/*    }}>Close</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        )
    }
}

const DeliveryLayout = (props) => {
    return (
        <InputAddress submitAddress={props.submitAddress}/>
    )
};

const PickUpLayout = (props) => {
    return (
        <>
            <p className="modal-title-cus tit10">Pick-up Restaurant</p>
            <div className="branch">
                {BRANCH.map((item) => <BranchLayout key={item.key} item={item}
                                                    chooseBranchClicked={props.chooseBranchClicked}/>)}
            </div>
        </>
    )
};

const BranchLayout = (props) => {
    const {key, name, address, hotLine, openTime} = props.item;
    return (
        <>
            <div className="branch-option">
                <div className="row">
                    <div className="col-2 flex-c flex-m">
                        <img src={require('../../../images/icons/logo2.png')}/>
                    </div>
                    <div className="col-10">
                        <p className="m-b-0 txt24">{name}</p>
                    </div>
                </div>
                <div className="row m-t-10">
                    <p className="m-b-0 txt25 col-8">{address}</p>
                    <div className="col-4 text-right">
                        <a href={`tel:+${openTime}`} className="m-b-0 txt25 t-right">{`Hotline: ${hotLine}`}</a>
                        <p className="m-b-0 txt25 t-right">{`Open Time: ${openTime}`}</p>
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        className="w-50 pick-up-button m-t-10"
                        variant="danger"
                        onClick={() => props.chooseBranchClicked(key)}
                    ><p className="pick-up-label m-0 p-0">Pick up from this branch</p></Button>
                </div>
            </div>
        </>
    )
}