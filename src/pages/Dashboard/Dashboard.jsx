import React from 'react';
import MenuTop from './MenuTop';
import TableDashboard from './TableDashboard';
import ChartPage from './ChartPage';
import CardComponent from './CardDashboard';
import './Dashboard.scss'; // 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="menu-top">
        <MenuTop />
      </div>
      <div className="card-component">
        <CardComponent />
      </div>
      <div className="table-dashboard">
        <TableDashboard />
      </div>

      <div className="chart-page">
        <ChartPage />
      </div>
    </div>
  );
};

export default Dashboard;
