import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Qty',
    dataIndex: 'Qty',
    key: 'Qty',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'fire') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.year}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    year: '1991',
    Qty: 10,
    Description: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    year: '1992',
    Qty: 42,
    Description: 'London No. 1 Lake Park',
    tags: ['fire'],
  },
  {
    key: '3',
    year: '1993',
    Qty: 32,
    Description: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const TableDashboard = () => <Table columns={columns} dataSource={data} />;
export default TableDashboard;