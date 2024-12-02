import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminPieChart = () => {
  // Data for the Pie chart
  const data = {
    labels: ['Sales', 'Bookings', 'Revenue'], // Pie chart categories
    datasets: [
      {
        label: 'Statistics Overview',
        data: [50, 30, 20], // Example data values for each category
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'], // Color for each section
        hoverBackgroundColor: ['#6EC1E4', '#FFEB8E', '#FF7C93'],
      },
    ],
  };

  // Options for customizing the pie chart (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default AdminPieChart;
