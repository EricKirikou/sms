import React from 'react';

const DashboardCards = () => {
  const cards = [
    { title: 'Students', count: 44, bgColor: 'bg-red-600', icon: 'image1.png' },
    { title: 'Parents', count: 10, bgColor: 'bg-green-600', icon: 'image2.png' },
    { title: 'Employees', count: 12, bgColor: 'bg-blue-500', icon: 'image3.png' },
    { title: 'Subjects', count: 35, bgColor: 'bg-blue-600', icon: 'image4.png' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className={`${card.bgColor} text-white rounded-lg shadow-md p-4 flex justify-between items-center`}>
          <div>
            <h3 className="font-bold text-4xl">{card.count}</h3>
            <p className="text-lg">{card.title}</p>
          </div>
          <img 
            src={card.icon} 
            alt={card.title} 
            className="w-14 h-14 rounded-full object-cover border-2 border-white"
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;