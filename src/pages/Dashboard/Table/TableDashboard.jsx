import React, { useState } from 'react';
import { Space, Table, Tag, Pagination } from 'antd';
import { data } from './TableData.js';

const TableDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7; 
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

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
          <a>Update {record.year}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Table columns={columns} dataSource={currentData} pagination={false} />
      <Pagination
        style={{ marginTop: '16px', textAlign: 'center' }}
        current={currentPage}
        total={data.length}
        pageSize={pageSize}
        onChange={handlePaginationChange}
      />
    </>
  );
};

export default TableDashboard;
