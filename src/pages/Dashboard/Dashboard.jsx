import React from 'react';
import MenuTop from './Menu/MenuTop';
import TableDashboard from './Table/TableDashboard';
import ChartPage from './Chart/ChartPage';
import CardComponent from './Card/CardDashboard';
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
        <div className="dashboard-title">
          Bảng dữ liệu
        </div>
        <TableDashboard />
      </div>

      <div className="chart-page">
        
        <ChartPage />
      </div>
    </div>
  );
};

export default Dashboard;
