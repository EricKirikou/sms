import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const AttendanceChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Graduate'],
        datasets: [
          { 
            label: 'Present', 
            data: [5, 10, 7, 8, 9, 6], 
            backgroundColor: 'rgba(54, 162, 235, 0.6)' 
          },
          { 
            label: 'Absent', 
            data: [2, 4, 3, 5, 1, 2], 
            backgroundColor: 'rgba(255, 99, 132, 0.6)' 
          }
        ]
      },
      options: {
        responsive: true,
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
    <div className="bg-white p-4 rounded-lg shadow-md h-full">
      <h4 className="text-lg font-semibold">Students Today's Attendance</h4>
      <p className="text-sm text-gray-500 mb-4">
        Click the columns to view this month's student attendance.
      </p>
      <div className="h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default AttendanceChart;