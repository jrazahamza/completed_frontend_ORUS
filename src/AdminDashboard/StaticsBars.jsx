import React from 'react';
import { ProgressBar, Col } from 'react-bootstrap';

const StatsBars = () => {
  const stats = [
    { label: 'Sales', value: 75 },
    { label: 'Customers', value: 50 },
    { label: 'Revenue', value: 85 },
  ];

  return (
    <Col className="shadow m-5 p-5 col-3">
      <h5>Statistics</h5>
      {stats.map((stat, index) => (
        <div key={index} className="mb-3">
          <div className="d-flex justify-content-between">
            <span>{stat.label}</span>
            <span>{stat.value}%</span>
          </div>
          <ProgressBar now={stat.value} label={`${stat.value}%`} />
        </div>
      ))}
    </Col>
  );
};

export default StatsBars;
