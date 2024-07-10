import React from 'react';
import { Menu, Table } from "antd";
import MenuTop from './MenuTop';
import TableDashboard from './TableDashboard';
import ChartPage from './Chart';
const Dashboard = () => {
  return (
    <div>
        <MenuTop />
        <TableDashboard/>
        <ChartPage/>
    </div>
  );
};

export default Dashboard;
