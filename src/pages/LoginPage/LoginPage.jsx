// import React from "react";
// import './LoginPage.scss';
// import {
//   LockOutlined,
//   MailOutlined,
//   EyeInvisibleOutlined,
//   EyeTwoTone,
// } from "@ant-design/icons";
// import { Button, Form, Input, message } from "antd";
// import { NavLink } from "react-router-dom";
// import Axios from 'axios';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDMiLCJIZXRIYW5TdHJpbmciOiIxNS8wMS8yMDI1IiwiSGV0SGFuVGltZSI6IjE3MzY4OTkyMDAwMDAiLCJuYmYiOjE3MTk0MjEyMDAsImV4cCI6MTczNzA0NjgwMH0._1nNTer6EQJycfH9UBD3WvpKecB92OKCg9GEyX6eSSc';
// Axios.defaults.headers.common['header'] = `TokenCybersoft ${token}`;

// export default function LoginPage() {
//   const handleLogin = async (values) => {
//     try {
//       const response = await Axios.post('https://jiranew.cybersoft.edu.vn/api/Users/signin', values);
//       console.log('Response:', response.data);
//       message.success('Đăng nhập thành công');
//       return response.data;
//     } catch (error) {
//       message.error('Lỗi khi đăng nhập');

//     }
//   };
//   return (
//     <div className="container">
//       <div className="form-container">
//         <div className="flex flex-col items-center justify-center">
//           <h3 className="text-center">LOGIN</h3>
//           <Form
//             className="flex flex-col align-center justify-center login-form"
//             name="normal_login"
//             initialValues={{
//               remember: true,
//             }}
//             onFinish={handleLogin}
//           >
//             <Form.Item
//               name="email"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Email!",
//                   type: "email",
//                 },
//               ]}
//             >
//               <Input
//                 prefix={<MailOutlined className="site-form-item-icon" />}
//                 placeholder="Email"
//               />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your Password!",
//                 },
//               ]}
//             >
//               <Input.Password
//                 prefix={<LockOutlined className="site-form-item-icon" />}
//                 placeholder="Password"
//                 iconRender={(visible) =>
//                   visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
//                 }
//               />
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit" className="btnBlue">
//                 Log in
//               </Button>
//             </Form.Item>
//             <Form.Item>
//               Don't have an account already?
//               <NavLink to="/register">
//                 <span className="register-link">Register Now!</span>
//               </NavLink>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import './LoginPage.scss';
import {
  LockOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { loginAction } from "../../redux/action/user";
import { useDispatch } from "react-redux";

const token = ' ';
Axios.defaults.headers.common['header'] = `TokenCybersoft ${token}`;

export default function LoginPage() {
    const dispatch = useDispatch(); 
    const onFinish = (values) => {
      console.log("values", values);
      let onSuccess = () => (window.location.href = "/dashboard");
      dispatch(loginAction(values, onSuccess));
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
      message.error("Fail to login!!!");
    };

  return (
    <div className="container">
      <div className="form-container">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center">LOGIN</h3>
          <Form
            className="flex flex-col align-center justify-center login-form"
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="btnBlue">
                Log in
              </Button>
            </Form.Item>
            <Form.Item>
              Don't have an account already?
              <NavLink to="/register">
                <span className="register-link">Register Now!</span>
              </NavLink>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
