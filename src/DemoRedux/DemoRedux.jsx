import React, { Component } from "react";
import { connect } from "react-redux";
import { GIAM, TANG } from "./redux/constant";
import { Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './DemoRedux.scss';
class DemoRedux extends Component {
    render() {
        return (
            <div className="counter-container">
                <h1 className="counter-title">Redux Đếm</h1>
                <div className="counter-content">
                    <Button
                        onClick={this.props.handleGiam}
                        type="primary"
                        icon={<MinusOutlined />}
                        danger
                    />
                    <strong>{this.props.number}</strong>
                    <Button
                        onClick={this.props.handleTang}
                        type="primary"
                        icon={<PlusOutlined />}
                    />
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        number: state.value,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        handleTang: () => {
            let action = {
                type: TANG,
            };
            dispatch(action);
        },
        handleGiam: () => {
            let action = {
                type: GIAM,
                payload: 1,
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
