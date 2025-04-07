import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';  // Correct import path for api.js

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (username, password, role) => {
    try {
      const response = await api.login(username, password, role);  // Using api instead of apiService
      
      if (response.success) {
        setUser({ username, role, token: response.token });
        localStorage.setItem('user', JSON.stringify({ username, role, token: response.token }));
        return { success: true };
      }
      return { success: false, message: response.message };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: error.message || 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      error,
      login,
      logout,
      setError
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};