import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [data, setData] = useState({
    username: '',
    password: '',
    role: null
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const selectRole = (role) => {
    setData(prev => ({ ...prev, role }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!data.username || !data.password) {
      setError('Please enter both username and password');
      return;
    }
  
    if (!data.role) {
      setError('Please select your role');
      return;
    }
  
    setIsLoading(true);
    setError('');
  
    try {
      const result = await login(data.username, data.password, data.role);
  
      if (result.success) {
        // Navigate based on role
        const redirectPath = {
          admin: '/AdminDashboard',
          employee: '/EmployeeDashboard',
          student: '/StudentDashboard'
        }[data.role] || '/';
        
        navigate(redirectPath);
      } else {
        setError(result.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-6 md:p-10 shadow-lg">
        <img src="/asset/favicon2.png" alt="Logo" className="mb-4 w-24 md:w-36 h-24 md:h-36" />

        <p className="text-gray-500 text-sm mb-4 md:mb-6 text-center">
          Don't have an account yet?{' '}
          <Link to="/signup" className="text-green-700 font-medium hover:underline">
            Sign up
          </Link>
        </p>

        <h2 className="text-lg font-semibold text-gray-700 mb-3 md:mb-4">I am</h2>
        <div className="flex gap-2 md:gap-4 mb-4 md:mb-6">
          {['admin', 'employee', 'student'].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => selectRole(role)}
              className={`flex flex-col items-center p-2 md:p-3 rounded-full w-16 md:w-24 transition-colors ${
                data.role === role
                  ? 'bg-green-700 text-white shadow-md'
                  : 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
              }`}
            >
              <i className={`bi bi-${
                role === 'admin' ? 'person-badge' :
                role === 'employee' ? 'briefcase' : 'mortarboard'
              } text-lg`}></i>
              <span className="text-xs md:text-sm capitalize">{role}</span>
            </button>
          ))}
        </div>

        {error && (
          <div className="w-full max-w-md mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-3 border border-gray-300 bg-gray-50 text-gray-700 rounded mb-3 md:mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 bg-gray-50 text-gray-700 rounded mb-3 md:mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />

          <div className="flex items-center mb-3 md:mb-4">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="text-gray-600 text-sm">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-green-700 text-white p-3 rounded-full flex justify-center items-center gap-2 transition-colors ${
              isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-green-800'
            }`}
          >
            {isLoading ? (
              <>
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                Logging in...
              </>
            ) : (
              'Log in'
            )}
          </button>
        </form>

        <Link to="/forgot-password" className="mt-3 md:mt-4 text-sm text-gray-500 hover:text-green-700">
          Forgot password?
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-b from-green-800 to-green-900 text-white p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">
          Start managing <span className="text-yellow-300">free</span> now!
        </h2>
        <p className="text-center mb-4 md:mb-6 px-2 md:px-4 text-sm md:text-base">
          Automate tasks, streamline operations, and focus on what truly matters in education.
        </p>
        <button
          className="border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full text-sm md:text-base hover:bg-yellow-400 hover:text-green-800 transition-colors"
          onClick={() => navigate('/')}
        >
          Get started
        </button>

        <img
          src="/asset/illustration.png"
          alt="Illustration"
          className="mt-4 md:mt-6 w-full max-w-xs md:max-w-md h-auto"
        />
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className="loader-wrapper flex flex-col items-center justify-center">
            <div className="loader relative w-[300px] h-[300px] mx-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg animate-pulse">
                  <img
                    src="/asset/favicon.png"
                    className="w-24 h-16 transition-all duration-300 hover:scale-110"
                    alt="Logo"
                  />
                </div>
              </div>

              {[0, 90, 180, 270].map((angle, index) => {
                const icons = ['journal-medical', 'pencil', 'mortarboard-fill', 'pc-display'];
                const colors = ['#FF9E7D', '#6BD5E1', '#FFD166', '#83E8BA'];

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center"
                    style={{
                      transform: `rotate(${angle}deg) translateX(140px) rotate(${-angle}deg)`,
                      animation: 'orbit 12s linear infinite'
                    }}
                  >
                    <div
                      className="orbit-orb w-full h-full rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all"
                      style={{
                        background: `linear-gradient(to bottom right, ${colors[index]}, ${colors[(index + 1) % colors.length]})`
                      }}
                    >
                      <img
                        src={`/asset/${icons[index]}.svg`}
                        className="w-8 h-8 invert"
                        alt="Icon"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8 space-y-4 max-w-md px-4">
              <h2 className="text-2xl font-bold text-white">Start Managing Now</h2>
              <p className="text-white/80 leading-relaxed">
                Automate tasks, streamline operations, and focus on what truly matters in education.
              </p>
              <p className="text-white/60 text-sm mt-6">
                Powered by <span className="font-medium text-white/80">Joseik Solutions</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
