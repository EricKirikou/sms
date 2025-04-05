import React from 'react';

const UserProfile = () => {
  return (
    <div className="space-y-4">
      <div className="bg-pink-600 text-white rounded-lg shadow-md p-4 text-center">
        <img 
          src="profile.png" 
          alt="Admin" 
          className="rounded-full mx-auto border-4 border-white w-20 h-20 object-cover"
        />
        <h3 className="mt-2 text-lg font-semibold">Mr. Admin</h3>
        <p className="italic">Admin</p>
      </div>
      
      <div className="bg-white shadow-md p-4 rounded-lg">
        <ul className="space-y-3">
          <li className="flex items-center justify-between py-1">
            <span className="flex items-center text-gray-700">
              <i className="bi bi-person mr-2 text-pink-600"></i>
              Username:
            </span>
            <span className="font-medium">admin</span>
          </li>
          <li className="flex items-center justify-between py-1">
            <span className="flex items-center text-gray-700">
              <i className="bi bi-envelope mr-2 text-pink-600"></i>
              Email:
            </span>
            <span className="font-medium">info@sukuu.com</span>
          </li>
          <li className="flex items-center justify-between py-1">
            <span className="flex items-center text-gray-700">
              <i className="bi bi-telephone mr-2 text-pink-600"></i>
              Phone:
            </span>
            <span className="font-medium">---</span>
          </li>
          <li className="flex items-center justify-between py-1">
            <span className="flex items-center text-gray-700">
              <i className="bi bi-geo-alt mr-2 text-pink-600"></i>
              Address:
            </span>
            <span className="font-medium">---</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;