import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem('sidebarCollapsed') === 'true'
  );
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', isCollapsed);
  }, [isCollapsed]);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const premiumTooltip = (
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-3 py-2 rounded-md whitespace-nowrap">
      This option is available in <br />
      premium Version only.
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-2 h-2 bg-black rotate-45"></div>
    </div>
  );

  const premiumItem = (text, icon = null) => (
    <li className="text-gray-400 flex items-center py-2 relative group cursor-not-allowed">
      <button className="flex items-center w-full">
        {icon && <span className="mr-2">{icon}</span>}
        <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
          {text}
        </span>
        <i 
          className={`bi bi-lock ml-auto text-red-300 ${isCollapsed ? 'mx-auto' : ''}`} 
          style={{ display: isCollapsed ? 'none' : 'inline' }}
        ></i>
      </button>
      {premiumTooltip}
    </li>
  );

  const renderSection = (sectionKey, icon, title, children) => (
    <li
      className={`rounded p-2 transition-colors duration-300 ${
        openSections[sectionKey] ? 'bg-gray-800' : 'bg-gray-900'
      }`}
    >
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-white"
      >
        <span className="font-semibold">
          <i className={icon}></i>{' '}
          <span
            className="sidebar-text ml-3"
            style={{ display: isCollapsed ? 'none' : 'inline' }}
          >
            {title}
          </span>
        </span>
        <span
          className={`transition-transform duration-300 ${
            openSections[sectionKey] ? 'rotate-180' : ''
          }`}
          style={{ display: isCollapsed ? 'none' : 'inline' }}
        >
          ▼
        </span>
      </button>

      {openSections[sectionKey] && (
        <ul className="pl-4 mt-2 space-y-1">
          {children}
        </ul>
      )}
    </li>
  );

  const renderMenuItem = (to, icon, text) => (
    <li>
      <Link
        to={to}
        className="block p-2 hover:bg-gray-800 rounded font-semibold flex items-center"
      >
        <i className={icon}></i>
        <span
          className="sidebar-text ml-3"
          style={{ display: isCollapsed ? 'none' : 'inline' }}
        >
          {text}
        </span>
      </Link>
    </li>
  );

  // const renderMenuButton = (onClick, icon, text) => (
  //   <li>
  //     <button
  //       onClick={onClick}
  //       className="block p-2 hover:bg-gray-800 rounded font-semibold flex items-center w-full"
  //     >
  //       <i className={icon}></i>
  //       <span
  //         className="sidebar-text ml-3"
  //         style={{ display: isCollapsed ? 'none' : 'inline' }}
  //       >
  //         {text}
  //       </span>
  //     </button>
  //   </li>
  // );

  return (
    <nav
      id="sidebar"
      className={`bg-gray-900 text-white min-h-screen p-4 fixed md:relative transition-all duration-300 z-40 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Sidebar Header with Logo & Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-1xl font-bold flex items-center w-full">
          <img
            src="favicon.png"
            className={`transition-all duration-300 sidebar-logo ${
              isCollapsed ? 'w-10 h-10 mx-auto rounded-full' : 'w-24 h-16 rounded-md'
            }`}
            alt="Logo"
          />
        </h4>
        <button
          onClick={toggleCollapse}
          className="p-1 text-gray-400 hover:text-white hidden md:block transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Admin Profile */}
      <div
        className={`text-center mb-6 flex items-center transition-all duration-300 ${
          isCollapsed ? 'justify-center' : 'justify-start'
        }`}
      >
        <img
          id="sidebarProfileImage"
          src="default-profile.png"
          className={`rounded-full border-2 border-gray-700 transition-all duration-300 ${
            isCollapsed ? 'w-12 h-12 mx-auto' : 'w-14 h-14 ml-2'
          }`}
          alt="Admin"
        />

        <div
          className="ml-4 transition-all duration-300"
          style={{ display: isCollapsed ? 'none' : 'block' }}
        >
          <p id="sidebarUsername" className="text-lg font-semibold">Loading...</p>
          <p id="sidebarRole" className="text-gray-400 text-sm">Loading...</p>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <ul className="space-y-2">
        {/* Dashboard */}
        {renderMenuItem("/dashboard", "bi bi-speedometer2", "Dashboard")}

        {/* Employees Section */}
        {renderSection(
          "employees",
          "bi bi-person-workspace",
          "Employees",
          <>
            <li>
              <Link to="/add-employee" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Add New Employee
                </span>
              </Link>
            </li>
            <li>
              <Link to="/employees" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  All Employees
                </span>
              </Link>
            </li>
            <li>
              <Link to="/manage-employees" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Manage Employees
                </span>
              </Link>
            </li>
            {premiumItem("⚖ Active / Inactive")}
            <li>
              <Link to="/appointment-letter" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Appointment Letter
                </span>
              </Link>
            </li>
            {premiumItem("Staff ID Card")}
          </>
        )}

        {/* Students Section */}
        {renderSection(
          "students",
          "bi bi-people-fill",
          "Students",
          <>
            <li>
              <Link to="/admissions" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Add Student
                </span>
              </Link>
            </li>
            <li>
              <Link to="/students" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  All Students
                </span>
              </Link>
            </li>
            {premiumItem("⚖ Active / Inactive")}
            <li>
              <Link to="/admission-letter" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Admission Letter
                </span>
              </Link>
            </li>
            {premiumItem("Students ID Cards")}
            <li>
              <Link to="/manage-login" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Manage Login
                </span>
              </Link>
            </li>
            <li>
              <Link to="/promote-students" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Promote Students
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Parent */}
        {renderMenuItem("/parents", "bi bi-person-hearts", "Parent")}

        {/* Class Section */}
        {renderSection(
          "class",
          "bi bi-house",
          "Class",
          <>
            <li>
              <Link to="/classes" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  All Classes
                </span>
              </Link>
            </li>
            <li>
              <Link to="/add-class" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Add Class
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Attendance Section */}
        {renderSection(
          "attendance",
          "bi bi-clock-history",
          "Attendance",
          <>
            <li>
              <Link to="/staff-attendance" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Staffs Attendance
                </span>
              </Link>
            </li>
            <li>
              <Link to="/student-attendance" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Students Attendance
                </span>
              </Link>
            </li>
            <li>
              <Link to="/attendance-list" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Attendance List
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Exams Section */}
        {renderSection(
          "exams",
          "bi bi-file-earmark-ppt-fill",
          "Exams",
          <>
            <li>
              <Link to="/result-card" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Result Card
                </span>
              </Link>
            </li>
            <li>
              <Link to="/master-list" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Master Sheet
                </span>
              </Link>
            </li>
            {premiumItem("Blank Award List")}
          </>
        )}

        {/* Accounts Section */}
        {renderSection(
          "accounts",
          "bi bi-cash-coin",
          "Accounts",
          <>
            <li>
              <Link to="/account" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Account Details
                </span>
              </Link>
            </li>
            <li>
              <Link to="/fees" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Pay Fees
                </span>
              </Link>
            </li>
            <li>
              <Link to="/invoices" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Receipts
                </span>
              </Link>
            </li>
            {premiumItem("Global Payment")}
            <li>
              <Link to="/expense" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Expenditure
                </span>
              </Link>
            </li>
            <li>
              <Link to="/petty-cash" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Petty Cash
                </span>
              </Link>
            </li>
            <li>
              <Link to="/income" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Income
                </span>
              </Link>
            </li>
            <li>
              <Link to="/statement" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Account Statement
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Payroll Section */}
        {renderSection(
          "payroll",
          "bi bi-cash-coin",
          "Payroll",
          <>
            <li>
              <Link to="/pay-salary" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Pay Salary
                </span>
              </Link>
            </li>
            <li>
              <Link to="/payslip" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Pay Slip
                </span>
              </Link>
            </li>
            {premiumItem("Manage Salary")}
          </>
        )}

        {/* Library Section */}
        {renderSection(
          "library",
          "bi bi-journal-text",
          "Library",
          <>
            <li>
              <Link to="/books" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Books
                </span>
              </Link>
            </li>
            <li>
              <Link to="/issued" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Issued Out
                </span>
              </Link>
            </li>
            {premiumItem("E-books")}
          </>
        )}

        {/* Requisition Section */}
        {renderSection(
          "requisition",
          "bi bi-pc-display",
          "Requisition",
          <>
            <li>
              <Link to="/requisition" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Requisition Form
                </span>
              </Link>
            </li>
            <li>
              <Link to="/review-requisitions" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  View Requisitions
                </span>
              </Link>
            </li>
            <li>
              <Link to="/requisition-admin" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Respond Requisitions
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Message */}
        {renderMenuItem("/message", "bi bi-chat-dots-fill", "Message")}

        {/* Media */}
        {renderMenuItem("/media", "bi bi-collection-play-fill", "Media")}

        {/* Mail */}
        {renderMenuItem("/mail", "bi bi-envelope-at", "Mail")}

        {/* Online Exams (Premium) */}
        {premiumItem("Online Exams", <i className="bi bi-router-fill"></i>)}

        {/* Asset Management */}
        {renderMenuItem("/asset", "bi bi-cassette", "Asset Management")}

        {/* Shop Section */}
        {renderSection(
          "shop",
          "bi bi-cart-check-fill",
          "Shop",
          <>
            <li>
              <Link to="/shop-books" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Books & Stationaries
                </span>
              </Link>
            </li>
            <li>
              <Link to="/shop-uniform" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Uniform & Clothing
                </span>
              </Link>
            </li>
            <li>
              <Link to="/purchase" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Purchase
                </span>
              </Link>
            </li>
            <li>
              <Link to="/sale" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Sale
                </span>
              </Link>
            </li>
            <li>
              <Link to="/orders" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Orders
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Leave Application Section */}
        {renderSection(
          "leave",
          "bi bi-window-fullscreen",
          "Leave Application",
          <>
            <li>
              <Link to="/leave" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Apply for Leave
                </span>
              </Link>
            </li>
            <li>
              <Link to="/applications" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Applications
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Gmeet Live Class */}
        {renderMenuItem("/gmeet", "bi bi-camera-video-fill", "Gmeet Live Class")}

        {/* Transport */}
        {renderMenuItem("/transport", "bi bi-bus-front", "Transport")}

        {/* Hostel */}
        {renderMenuItem("/hostel", "bi bi-house-door", "Hostel")}

        {/* Announcement Section */}
        {renderSection(
          "announcement",
          "bi bi-megaphone",
          "Announcement",
          <>
            <li>
              <Link to="/notice" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Notice
                </span>
              </Link>
            </li>
            <li>
              <Link to="/timetable" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Timetable
                </span>
              </Link>
            </li>
            <li>
              <Link to="/calendar" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Academic Calendar
                </span>
              </Link>
            </li>
          </>
        )}

        {/* Online Admission (Premium) */}
        {premiumItem("Online Admission", <i className="bi bi-router-fill"></i>)}

        {/* Visitor Info */}
        {renderMenuItem("/visitor", "bi bi-person-walking", "Visitor Info")}

        {/* Settings Section */}
        {renderSection(
          "settings",
          "bi bi-gear-wide-connected",
          "Settings",
          <>
            <li>
              <Link to="/institution-info" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Institution Profile
                </span>
              </Link>
            </li>
            <li>
              <Link to="/fees-particulars" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Fees Particulars
                </span>
              </Link>
            </li>
            {premiumItem("Fees Structure")}
            {premiumItem("Discount Type")}
            <li>
              <Link to="/rules-regulations" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Rules and Regulations
                </span>
              </Link>
            </li>
            <li>
              <Link to="/audit-trail" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Audit Trail
                </span>
              </Link>
            </li>
            <li>
              <Link to="/manage-account" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Manage Account
                </span>
              </Link>
            </li>
            <li>
              <Link to="/login" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  Log Out
                </span>
              </Link>
            </li>
          </>
        )}

        {/* AI Integration Section */}
        {renderSection(
          "ai",
          "bi bi-robot",
          "AI Integration",
          <>
            <li>
              <Link to="/ai-chatbot" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  AI Chatbot
                </span>
              </Link>
            </li>
            <li>
              <Link to="/ai-analytics" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  AI-Powered Manager
                </span>
              </Link>
            </li>
            <li>
              <Link to="/ai-automation" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  AI Automation
                </span>
              </Link>
            </li>
            {premiumItem("AI Personalized Learning")}
            <li>
              <Link to="/ai-reports" className="block py-2 hover:bg-gray-700">
                <span className="sidebar-text ml-3" style={{ display: isCollapsed ? 'none' : 'inline' }}>
                  AI-Generated Reports
                </span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;