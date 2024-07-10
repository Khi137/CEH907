import React, { useState, useEffect } from 'react';
import { AppstoreOutlined, AlignLeftOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'Dashboard Page',
    key: 'mail',
    icon: <AlignLeftOutlined />,
  },
  {
    key: 'alipay',
    label: (
      <div>
        Xin chào bạn
      </div>
    ),
  },
];

const MenuTop = () => {
  const [current, setCurrent] = useState('mail');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("USER"));
    console.log(data.name);
 
  }, []);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}>
      <div style={{ marginLeft: 'auto', marginRight: '20px', color: '#1890ff' }}>
        Xin chào {userName}
      </div>
    </Menu>
  );
};
;
export default MenuTop;
