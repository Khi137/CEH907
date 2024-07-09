import React from "react";
import "./SimpleChart.scss";

const SimpleChart = () => {
  const data = [
    { label: "Jan", value: 50 },
    { label: "Feb", value: 75 },
    { label: "Mar", value: 100 },
    { label: "Apr", value: 125 },
    { label: "May", value: 150 },
    { label: "Jun", value: 175 },
  ];

  return (
    <div className="chart-container">
      <div className="chart">
        {data.map((item, index) => (
          <div key={index} className="chart-bar" style={{ height: `${item.value}px` }}>
            <div className="chart-info">
              <span className="chart-label">{item.label}</span>
              <span className="chart-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="chart-description">
        <h3>Sample Data Information</h3>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <strong>{item.label}:</strong> Value is {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleChart;
