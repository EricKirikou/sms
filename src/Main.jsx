import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BiEnvelope, 
  BiMap, 
  BiPhone,
  BiUpArrow,
  BiLike,
  BiGift,
  BiCloud,
  BiRefresh,
  BiBarChart,
  BiLock,
  BiFile,
  BiShield
} from "react-icons/bi";
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login'; // the correct path to your LoginPage component
import Signup from './pages/Signup'; // the correct path to your Signup component

const Main = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Only show main content on home page
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <>
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />      
    </Routes>

    <div className="bg-green-900 text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 bg-green-900 text-white">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src="asset/favicon.png" alt="Logo" className="w-full h-16" />
        </Link>

        {/* Right Section (Links & Buttons) */}
        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/products" className="px-4 hover:text-yellow-400">Products</Link>
            <Link to="/help" className="px-4 hover:text-yellow-400">Help</Link>
          </div>

          {/* Sign Up & Login */}
          <Link
            to="/signup"
            className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-white text-yellow-900 px-3 py-2 rounded-md hover:bg-gray-100 transition duration-200 ml-2"
          >
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-green-900 text-white p-4 absolute right-5 top-[80px] w-[100px] z-50">
          <Link to="/products" className="block py-2 px-4 hover:text-yellow-400">Products</Link>
          <Link to="/help" className="block py-2 px-4 hover:text-yellow-400">Help</Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center mt-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Online School Management Software</h2>
        <p className="mt-4 text-sm md:text-base">
          Manage your school, college, or educational center with Sukuu. Low Cost with no limitations.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link to="/signup" className="bg-yellow-500 px-6 py-3 rounded-md text-white w-full md:w-auto text-center hover:bg-yellow-600 transition">
            Sign Up Now, It's Free
          </Link>
          <Link to="/features" className="bg-white text-yellow-900 px-6 py-3 rounded-md w-full md:w-auto text-center border border-yellow-900 hover:bg-gray-100 transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* Images Section */}
      <section className="flex flex-col md:flex-row justify-center items-center mt-12 relative bg-cover bg-center space-y-6 md:space-y-0">
        <img src="asset/laptop.png" alt="Dashboard Preview" className="w-5/6 md:w-2/3 rounded-lg floating1" />
        <img src="asset/chart-icon.png" alt="Chart Icon" className="absolute left-10 md:left-1/4 top-1/3 md:top-1/2 w-12 md:w-16 floating2" />
        <img src="asset/mobile-ui.png" alt="Mobile UI" className="absolute right-10 md:right-1/4 w-40 md:w-72 floating3" />
        <img src="asset/checklist-icon.png" alt="Checklist Icon" className="absolute ml-[700px] md:right-1/5 bottom-0 md:top-1/2 w-12 md:w-16 floating4" />
      </section>

      {/* Features Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20 px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300 drop-shadow-md">
          Features Of School Management Software
        </h2>
        
        <p className="max-w-3xl mx-auto mb-10 text-gray-200 text-lg leading-relaxed">
          <span className="text-yellow-300 font-semibold">Sukuu</span> is a <span className="text-yellow-400 font-bold">powerful</span> and <span className="text-yellow-400 font-bold">feature-rich</span> school management software. It handles everything from admissions to attendance, exams, and result generation.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-16 space-y-10 lg:space-y-0">
          {/* Left Features */}
          <div className="space-y-8 w-full lg:w-1/3">
            <div className="p-5 rounded-lg bg-white bg-opacity-10 shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-yellow-300 flex items-center justify-center md:justify-start">
                <BiGift className="text-yellow-400 mr-2" /> Absolutely Free
              </h3>
              <p className="text-gray-100 mt-1">Sukuu is an <span className="text-yellow-400 font-semibold">affordable</span> school management software with premium features.</p>
            </div>
            <div className="p-5 rounded-lg bg-white bg-opacity-10 shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-300 flex items-center justify-center md:justify-start">
                <BiCloud className="mr-2" /> Cloud Based Software
              </h3>
              <p className="text-gray-100 mt-1">Access Sukuu from anywhere, anytime with its <span className="text-yellow-400 font-semibold">always-online</span> cloud-based system.</p>
            </div>
            <div className="p-5 rounded-lg bg-white bg-opacity-10 shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-red-300 flex items-center justify-center md:justify-start">
                <BiRefresh className="mr-2" /> Regular Updates & Support
              </h3>
              <p className="text-gray-100 mt-1">We continuously improve Sukuu with <span className="text-yellow-400 font-semibold">free 24/7 support</span> and new features.</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative w-64 sm:w-72">
            <img src="asset/ui-mobile.png" alt="Mobile UI" className="w-full rounded-lg shadow-xl" />
            {/* Floating Icons */}
            <BiLike className="text-red-500 text-3xl sm:text-4xl absolute top-[-15px] left-[5px] animate-float" />
            <BiFile className="text-yellow-500 text-3xl sm:text-4xl absolute bottom-[5px] left-[30px] animate-float" />
            <BiShield className="text-blue-500 text-3xl sm:text-4xl absolute top-1/2 right-[-15px] transform -translate-y-1/2 animate-float" />
          </div>

          {/* Right Features */}
          <div className="space-y-8 w-full lg:w-1/3">
            <div className="p-5 rounded-lg bg-white bg-opacity-10 shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-300 flex items-center justify-center md:justify-start">
                <BiPhone className="mr-2" /> Responsive Web Design
              </h3>
              <p className="text-gray-100 mt-1">Sukuu works flawlessly on <span className="text-yellow-400 font-semibold">mobile, tablet, and desktop</span>.</p>
            </div>
            <div className="p-5 rounded-lg bg-white bg-opacity-10 shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-orange-400 flex items-center justify-center md:justify-start">
                <BiBarChart className="mr-2" /> Infographics & Animations
              </h3>
              <p className="text-gray-100 mt-1">We use <span className="text-yellow-400 font-semibold">data visualization</span> for easy analysis of student performance.</p>
            </div>
            <div className="p-5 rounded-lg bg-white bg-opacity-10 shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-green-300 flex items-center justify-center md:justify-start">
                <BiLock className="mr-2" /> Fast, Secure & Easy
              </h3>
              <p className="text-gray-100 mt-1">Built with <span className="text-yellow-400 font-semibold">advanced security</span>, Sukuu ensures top-level protection.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-100 text-green py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Why Sukuu Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="asset/dashboard.png" alt="Dashboard" className="w-64 md:w-80 animate-float" />
            </div>
            <div className="text-left max-w-xl w-full md:w-1/2">
              <span className="bg-green-500 text-white px-3 py-1 rounded shadow-lg">Why Us?</span>
              <h2 className="text-3xl font-extrabold mt-3 bg-gradient-to-r from-teal-300 to-green-500 text-transparent bg-clip-text">
                Why Sukuu is the best school management software?
              </h2>
              <p className="text-gray-900 mt-2 text-lg leading-relaxed italic">
                Sukuu is a feature-rich and easy-to-use school management software with powerful tools for administrators, teachers, and students.
              </p>
            </div>
          </div>

          {/* Separate Portals Section */}
          <div className="flex flex-col md:flex-row-reverse justify-between items-center space-y-12 md:space-y-0">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="asset/portals.png" alt="Portals" className="w-72 md:w-96 animate-float" />
            </div>
            <div className="text-left max-w-xl w-full md:w-1/2">
              <span className="bg-green-500 text-white px-3 py-1 rounded shadow-lg">Manage User Roles</span>
              <h2 className="text-3xl font-extrabold mt-3 bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
                Separate Portals Available
              </h2>
              <p className="text-gray-900 mt-2 text-lg leading-relaxed italic">
                Dedicated dashboards for students, teachers, and parents to simplify communication and management.
              </p>
              <Link to="/signup" className="inline-block bg-red-500 px-4 py-2 rounded mt-3 hover:scale-105 transition transform duration-300 shadow-md">
                Sign Up For Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* More Features Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <p className="text-gray-200 flex items-center justify-center space-x-2 text-lg">
            <span className="text-2xl">👓</span> 
            <span className="cursor-pointer hover:text-gray-300 transition">See more features</span>
          </p>

          <h3 className="text-xl uppercase tracking-wide">That's Not All</h3>
          <h2 className="text-4xl font-extrabold mt-3">All Features in One Place</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {[
              { icon: "🏛️", title: "Institute Info", description: "Manage your institute details including logo, name, and target line, visible in all reports." },
              { icon: "👥", title: "Class Management", description: "Organize students, subjects, courses, and marks effortlessly." },
              { icon: "📄", title: "Exams Management", description: "Manage exams, results, reports, and result cards with ease." },
              { icon: "😊", title: "Attendance System", description: "Online attendance tracking for students and staff." },
              { icon: "💰", title: "Fee Management", description: "Automated fee management with easy tracking for every student." },
              { icon: "📝", title: "Tests Management", description: "Effortless class test tracking and record-keeping." },
              { icon: "⚖️", title: "Accounts", description: "Simplify income, expenses, and staff salary management." },
              { icon: "🖨️", title: "Printable Reports", description: "Generate and print fee slips, salary slips, and admission letters." }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center">
                <div className="text-5xl mb-3 text-green-600">{feature.icon}</div>
                <h3 className="font-bold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single Stop Solution */}
      <div className="bg-gradient-to-r from-gray-200 to-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Single Stop Solution For School Management
            </h1>
            <p className="text-gray-600 text-lg">
              Managing any educational institute is not a piece of cake. Sukuu presents a free online school 
              management system to simplify student, staff, and financial management. Easy to use and powerful.
            </p>
            <Link to="/signup" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-800 transition">
              Get started for free
            </Link>
          </div>

          <div className="relative md:w-1/2 flex justify-center">
            <img src="asset/laptop.png" alt="Laptop UI" className="max-w-[450px] w-full drop-shadow-xl" />
            <img src="asset/floating1.png" alt="Floating UI 1" className="absolute -top-8 left-2 md:left-4 w-28 md:w-40 drop-shadow-lg animate-float1" />
            <img src="asset/floating2.png" alt="Floating UI 2" className="absolute top-1/4 right-1 md:right-4 w-24 md:w-32 drop-shadow-lg animate-float2" />
          </div>
        </div>

        <div className="text-center mt-16 text-gray-600">
          <p className="text-lg">We build Trust.</p>
          <p className="text-2xl font-bold text-gray-900">10K+ Schools use our product.</p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative space-y-12 md:space-y-0">
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg text-gray-900">
            <h2 className="text-3xl font-bold mb-4 text-green-700">Drop us a Line.</h2>
            <p className="text-gray-600 mb-6">Ask us a question, or just say Hello.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First name *" className="border p-3 rounded w-full focus:ring-2 focus:ring-green-500" />
                <input type="text" placeholder="Last name *" className="border p-3 rounded w-full focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" placeholder="Email *" className="border p-3 rounded w-full focus:ring-2 focus:ring-green-500" />
                <input type="text" placeholder="Phone" className="border p-3 rounded w-full focus:ring-2 focus:ring-green-500" />
              </div>
              <textarea placeholder="Message *" className="border p-3 rounded w-full h-32 focus:ring-2 focus:ring-green-500"></textarea>
              <button className="bg-green-600 text-white font-bold px-6 py-3 rounded-full hover:bg-green-800 transition w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-2/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="relative w-full flex justify-center md:justify-start">
              <div className="flex space-x-16 text-gray-200 mb-2">
                <span className={`cursor-pointer ${activeTab === 'email' ? 'text-white' : ''}`} onClick={() => handleTabChange('email')}>Email</span>
                <span className={`cursor-pointer ${activeTab === 'location' ? 'text-white' : ''}`} onClick={() => handleTabChange('location')}>Location</span>
                <span className={`cursor-pointer ${activeTab === 'phone' ? 'text-white' : ''}`} onClick={() => handleTabChange('phone')}>Phone</span>
              </div>
              <div className="absolute bottom-[-5px] left-6 h-1 bg-white transition-all duration-300" 
                   style={{ 
                     width: '60px', 
                     transform: activeTab === 'email' ? 'translateX(0)' : 
                               activeTab === 'location' ? 'translateX(100px)' : 'translateX(228px)' 
                   }}></div>
            </div>

            {activeTab === 'email' && (
              <div className="mt-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <BiEnvelope className="text-xl" />
                  </div>
                  <p className="text-lg font-semibold">Contact us by email</p>
                </div>
                <p className="text-green-200 text-lg">info@joseiksolutions.com</p>
              </div>
            )}

            {activeTab === 'location' && (
              <div className="mt-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <BiMap className="text-xl" />
                  </div>
                  <p className="text-lg font-semibold">Visit us @ our Office</p>
                </div>
                <p className="text-green-200 text-lg">Afanko, Atonsu - Kumasi, Ghana</p>
              </div>
            )}

            {activeTab === 'phone' && (
              <div className="mt-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <BiPhone className="text-xl" />
                  </div>
                  <p className="text-lg font-semibold">Call us</p>
                </div>
                <p className="text-green-200 text-lg">+233 57 047 6349</p>
              </div>
            )}

            <img src="asset/cityscape.png" alt="City Illustration" className="w-80 mt-8" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-green-900 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl font-bold flex items-center">
              <img src="asset/favicon.png" alt="Logo" className="h-12 mr-2" />
            </h1>
            <p className="text-white mt-4 text-sm">
              sukuu is the world's best and #1 ranked low cost online school management software. Our school 
              management software has more features than any school software in the market.
            </p>
            <p className="text-green-500 text-xs mt-4">
              Copyright © 2025 Joseik Solutions (Sukuu) Ltd. - All rights reserved.
            </p>
          </div>

          <div className="flex justify-between md:justify-start md:space-x-16">
            <div>
              <h2 className="text-lg text-yellow-400 font-semibold">SUKUU</h2>
              <ul className="text-gray-300 text-sm space-y-2 mt-2">
                <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
                <li><Link to="/pricing" className="hover:text-yellow-300">Pricing</Link></li>
                <li><Link to="/signup" className="hover:text-yellow-300">Get started</Link></li>
                <li><Link to="/help" className="hover:text-yellow-300">Help</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg text-yellow-400 font-semibold">TERMS</h2>
              <ul className="text-gray-300 text-sm space-y-2 mt-2">
                <li><Link to="/terms" className="hover:text-yellow-300">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-yellow-300">Privacy Policy</Link></li>
                <li><Link to="/services" className="hover:text-yellow-300">SaaS Services</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Link to="#" className="flex items-center mb-3">
              <img src="asset/google-play.png" alt="Google Play" className="h-8 mr-2 w-full" />
            </Link>
            <Link to="#" className="flex items-center">
              <img src="asset/app-store.png" alt="App Store" className="h-8 mr-2 w-full" />
            </Link>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-700 text-white h-12 w-12 rounded-full shadow-lg transition-all"
        >
          <BiUpArrow className="text-xl mx-auto" />
        </button>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(5px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-5px) translateX(15px); }
        }
        .floating1 { animation: float1 4s ease-in-out infinite; }
        .floating2 { animation: float2 3.5s ease-in-out infinite; }
        .floating3 { animation: float3 4.5s ease-in-out infinite; }
        .floating4 { animation: float4 3s ease-in-out infinite; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        .animate-float1 { animation: float1 3s ease-in-out infinite; }
        .animate-float2 { animation: float2 4s ease-in-out infinite; }
      `}</style>
    </div>
    </>
  );
};

export default Main;