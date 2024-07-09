import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="login">
                <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="demoredux">
                <Link to="/demoredux">DemoRedux</Link>
            </Menu.Item>
            <Menu.Item key="dashboard">
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Menubar;
