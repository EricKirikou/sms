import React from 'react';

const NoticeSection = () => {
  const notices = [
    { id: 1, title: 'Farewell Ceremo..', description: 'The most of the words ado..' },
    { id: 2, title: 'Second Semester..', description: 'Dedicated athlete, an ama..' },
    { id: 3, title: 'First Semester ..', description: 'If you are a dedicated at..' },
    { id: 4, title: 'Annual Sports D..', description: 'You surely are familiar w..' },
    { id: 5, title: 'Teachers Reunio..', description: 'An amateur player, or a sport geek...' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-3">Notice</h4>
      <ul className="divide-y divide-gray-200">
        {notices.map(notice => (
          <li key={notice.id} className="flex items-center justify-between py-3">
            <span className="text-gray-500 w-6">{notice.id}</span>
            <span className="flex-1 mx-2 truncate">{notice.title}</span>
            <span className="flex-1 text-sm text-gray-500 truncate">{notice.description}</span>
            <button className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700">
              <i className="bi bi-pencil"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeSection;