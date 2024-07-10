import React from 'react';
import { Card, Col, Row } from 'antd';
const CardComponent = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Total sales" bordered={false}>
        60 000 000
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Views" bordered={false}>
            8864
        </Card>
    </Col>
    <Col span={8}>
      <Card title="Payment Quantity" bordered={false}>
        6560
      </Card>
    </Col>
  </Row>
);
export default CardComponent;