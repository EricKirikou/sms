import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SiteStats = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['19 Feb'],
        datasets: [{
          label: 'Visitors',
          data: [1],
          borderColor: 'rgb(255, 105, 180)',
          backgroundColor: 'rgba(255, 105, 180, 0.5)',
          fill: true,
          pointRadius: 5,
          pointBackgroundColor: 'rgb(255, 105, 180)',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0
            }
          }
        }
      }
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Site Stats</h4>
        <i className="bi bi-three-dots text-gray-500"></i>
      </div>
      <div className="h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default SiteStats;