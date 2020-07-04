import React from 'react';
import {Form, FormGroup, Modal, Row} from "react-bootstrap";
import InputAddress from "./InputAddress";
import {Formik} from "formik/dist/index";
import * as yup from "yup";
import {
    updatePhoneNumber,
    updateDeliveryInformation,
    updateDeliveryType,
    updateReceiverName
} from "../../../OrderFoodAction";
import {connect} from "react-redux"
import {OPTION_TYPE, BRANCH} from "../../../../../utils/constant";
import BranchLayout from "./BranchLayout";


const schema = yup.object({
    name: yup.string().required('Tên người đặt hàng không được để trống'),
    phone: yup.string().required('Số điện thoại không được để trống'),
});

class PreOrder extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {
            orderType,
            name,
            phoneNumber,
            updateDeliveryInformation,
            updateDeliveryType,
            pickUpBranch,
            deliveryInformation,
            updatePhoneNumber,
            updateReceiverName
        } = this.props;

        //const isShowModel = !((orderType && name && phoneNumber) && (pickUpBranch || deliveryInformation));
        const isShowModel = false;
        const disableButton = !(orderType && name && phoneNumber);

        let deliveryInformationLayout = null;
        if (orderType === OPTION_TYPE.PickUp) {
            deliveryInformationLayout = <PickUpLayout
                disableButton={disableButton}
                chooseBranchClicked={updateDeliveryInformation}
            />;
        } else if (orderType === OPTION_TYPE.Delivery) {
            deliveryInformationLayout = <DeliveryLayout
                disableButton={disableButton}
                submitAddress={(values) => {
                    updateDeliveryInformation(null, values)
                }}
            />;
        }
        return (
            <Modal
                show={isShowModel}
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
                                      defaultValue={orderType}
                                      onChange={(e) => updateDeliveryType(e.target.value)}>
                            <option className="d-none" value=''/>
                            <option value={OPTION_TYPE.Delivery}>Delivery</option>
                            <option value={OPTION_TYPE.PickUp}>Pick-up</option>
                        </Form.Control>
                    </Form.Group>
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            name: "",
                            phone: "",
                        }}
                        onSubmit={this.onSubmit}
                    >
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              errors,
                              setFieldValue
                          }) => (
                            <Form noValidate
                                  onSubmit={handleSubmit}>
                                <Row>
                                    <FormGroup className="col-md-6 col-12">
                                        <p>Phone Number: </p>
                                        <Form.Control
                                            type={'number'}
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={() => {
                                                //will call API search Name depend on receiver phone number here
                                                updatePhoneNumber(values.phone);
                                            }}
                                            isInvalid={!!errors.phone}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.phone}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <FormGroup className="col-md-6 col-12">
                                        <p>Name: </p>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={() => {
                                                updateReceiverName(values.name);
                                            }}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.name}
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
        <InputAddress
            disableButton={props.disableButton}
            submitAddress={props.submitAddress}/>
    )
};

const PickUpLayout = (props) => {
    return (
        <>
            <p className="modal-title-cus tit10">Pick-up Restaurant</p>
            <div className="branch">
                {BRANCH.map((item) =>
                    <BranchLayout
                    key={item.key} item={item}
                    chooseBranchClicked={props.chooseBranchClicked}
                    disableButton={props.disableButton}
                    />)}
            </div>
        </>
    )
};


const mapStateToProps = (state) => {
    return {
        ...state.deliveryInformation,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePhoneNumber: (value) => {
            dispatch(updatePhoneNumber(value));
        },
        updateReceiverName: (value) => {
            dispatch(updateReceiverName(value));
        },
        updateDeliveryInformation: (pickUpBranch, deliveryInformation) => {
            dispatch(updateDeliveryInformation(pickUpBranch, deliveryInformation));
        },
        updateDeliveryType: (orderType) => {
            dispatch(updateDeliveryType(orderType));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PreOrder);