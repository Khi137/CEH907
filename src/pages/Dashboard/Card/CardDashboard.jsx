import React from 'react';
import { Card, Col, Row } from 'antd';
import { Flex, Progress } from 'antd';
import { green, red } from '@ant-design/colors';
import './Card.scss';
import { Steps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
const CardComponent = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Card
        title="Số lượng cảng"
        bordered={true}
      >
        {/* <div className="progress-flex">
          <Progress
            className="progress-item"
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div> */}
        <div className="body-card">

          80+ Cảng Đang Là Khách Hàng
        </div>
        <div className="body-card-number">
          <GlobalOutlined /> 80+

        </div>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Cảng đang hoạt động" bordered={false}>
        Exam2
        <Flex gap="small" vertical>
          <Progress percent={50} steps={3} />
          <Progress percent={30} steps={5} />
          <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
          <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
        </Flex>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Cảng đang lắp đặt" bordered={false}>
        Ex3
        <Flex gap="small" vertical>

          <Progress
            percent={100}
            percentPosition={{
              align: 'start',
              type: 'outer',
            }}
          />
          <Progress
            percent={60}
            percentPosition={{
              align: 'center',
              type: 'outer',
            }}
            size="small"
          />
          <Progress
            percent={100}
            percentPosition={{
              align: 'center',
              type: 'outer',
            }}
          />
        </Flex>
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Số lượng thanh toán" bordered={false}>
        Ex4
        <Steps
          size="small"
          current={1}
          items={[
            {
              title: 'Finished',
            },
            {
              title: 'In Progress',
            },
          ]}
        />
      </Card>
    </Col>
  </Row>
);
export default CardComponent;