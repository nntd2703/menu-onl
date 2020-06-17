import React, {Component} from 'react';
import {HashLoader} from "react-spinners";
import {css} from "@emotion/core";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class LoadingSpinnerComponent extends Component {
    render() {
        const {loading} = this.props;
        return (
            loading ?
                    <HashLoader
                        css={override}
                        size={80}
                        color={"red"}
                        loading={loading}
                    /> : null
        );
    }
}

export default LoadingSpinnerComponent;