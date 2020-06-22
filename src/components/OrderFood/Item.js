import DetailImage from "../../images/lunch-01.jpg";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import {FaMinusCircle, FaPlusCircle} from "react-icons/fa";

export const Item = (props) => {
    const { Name, Price } = props.detail;
    return (
        <div className="dishes-item blo3 row m-b-30 col-md-6 col-sm-12"
             onClick={() => console.log('first item')}>
            <div className="pic-blo3 bo-rad-20 hov-img-zoom col-md-3 col-5 p-0">
                <a href="#"><img src={DetailImage} alt="IMG-MENU"/></a>
            </div>

            <div className="text-blo3 col-md-9 col-7">
                <a href="#" className="txt21 m-b-3">
                    {Name}
                </a>

                <div className="txt23">Aenean pharetra tortor dui in pellentesque</div>

                <div className="price-content m-t-20 row">
                    <div className="txt22 col-7">{Price}</div>
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
    )
}