import React from 'react';
import { Card, Col, Row } from 'antd';
import { Flex, Progress } from 'antd';
import { green, red } from '@ant-design/colors';
import './Card.scss';
import { Steps } from 'antd';
import { GlobalOutlined, ThunderboltOutlined, ApiOutlined, SolutionOutlined } from '@ant-design/icons';
const CardComponent = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Card title="Số lượng cảng" bordered={false} className='card'>
        <div className="body-card">
          80+ Cảng Đang Là Khách Hàng
        </div>
        <div className="body-card-number">
          <GlobalOutlined /> 80+

        </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Cảng đang hoạt động" bordered={false} className='card'>
        <div className="body-card">

          60+ Cảng Đang Hoạt Động
        </div>
        <div className="body-card-number">
          <ThunderboltOutlined /> 67

        </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Cảng đang lắp đặt" bordered={false} className='card'>
        <div className="body-card">

          30+ Cảng Đang được lắp đặt
        </div>
        <div className="body-card-number">
          <ApiOutlined /> 36

        </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Số lượng thanh toán" bordered={false} className='card'>
        <div className="body-card">
          600+ thanh toán
        </div>
        <div className="body-card-number">
          <SolutionOutlined /> 672

        </div>
      </Card>
    </Col>
  </Row>
);
export default CardComponent;