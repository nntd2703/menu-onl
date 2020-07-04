import {Button} from "react-bootstrap";
import React from "react";

const BranchLayout = (props) => {
    const {key, name, address, hotLine, openTime} = props.item;
    return (
        <>
            <div className="branch-option">
                <div className="row">
                    <div className="col-md-2 col-4 flex-c flex-m">
                        <img className="max-w-full max-h-full"  src={require('../../../../../images/icons/logo.png')}/>
                    </div>
                    <div className="col-m-10 col-8">
                        <p className="m-b-0 txt24">{name}</p>
                    </div>
                </div>
                <div className="row m-t-10">
                    <p className="m-b-0 txt25 col-md-8 col-12">{address}</p>
                    <div className="col-md-4 text-right col-12">
                        <a href={`tel:+${openTime}`} className="m-b-0 txt25 t-right">{`Hotline: ${hotLine}`}</a>
                        <p className="m-b-0 txt25 t-right">{`Open Time: ${openTime}`}</p>
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        className="w-50 pick-up-button m-t-10"
                        variant="danger"
                        disabled={props.disableButton}
                        onClick={() => props.chooseBranchClicked(key)}
                    ><p className="pick-up-label m-0 p-0">Pick up from this branch</p></Button>
                </div>
            </div>
        </>
    )
};

export default BranchLayout;