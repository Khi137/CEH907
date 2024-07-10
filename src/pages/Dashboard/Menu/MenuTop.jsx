import React, { useState } from 'react';
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
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default MenuTop;