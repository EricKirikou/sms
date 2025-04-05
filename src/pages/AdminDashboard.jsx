import React from 'react';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
import AccountsChart from '../components/AccountsChart';
import UserProfile from '../components/UserProfile';
import AttendanceChart from '../components/AttendanceChart';
import NoticeSection from '../components/NoticeSection';
import SiteStats from '../components/SiteStats';
import SchoolCalendar from '../components/SchoolCalendar';

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-100">
      <Navbar />
      
      <div className="flex-grow">
        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold mb-6 flex items-center">
            <i className="bi bi-speedometer2 mr-2"></i> Dashboard
          </h1>
          
          <DashboardCard />
          <AccountsChart />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
            <div className="lg:col-span-1">
              <UserProfile />
            </div>
            <div className="lg:col-span-3">
              <AttendanceChart />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <NoticeSection />
            <SiteStats />
          </div>
          
          <div className="mt-6">
            <SchoolCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;