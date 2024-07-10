import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';

const Dashboard = () => {
  return (
    <div>
      <h1>Simple Dashboard</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <BarChart />
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
