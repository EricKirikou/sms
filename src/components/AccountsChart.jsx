import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AccountsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Income',
            data: [100000, 50000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: 'lightblue',
            backgroundColor: 'rgba(173, 216, 230, 0.5)',
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: 'blue',
          },
          {
            label: 'Expense',
            data: [90000, 40000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            borderColor: 'purple',
            backgroundColor: 'rgba(255, 0, 255, 0.5)',
            fill: true,
            pointRadius: 5,
            pointBackgroundColor: 'purple',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.dataset.label + ": " + tooltipItem.raw.toLocaleString();
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="text-center bg-teal-500 text-white font-bold py-2 rounded-t-lg">
        <h2 className="text-lg">2025 Accounts Summary</h2>
        <p className="text-sm">Click month income or expense column to view day-wise account summary</p>
      </div>
      <div className="p-4">
        <canvas ref={chartRef} id="accountsChart"></canvas>
      </div>
    </div>
  );
};

export default AccountsChart;