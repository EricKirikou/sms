const API_BASE_URL = 'https://sukuu-backend.onrender.com/v1/api';

const apiService = {
  // Auth Service
  login: async (username, password, role) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role }),
      credentials: 'include'
    });
    return await response.json();
  },

  // Student Services
  addStudent: async (studentData) => {
    const response = await fetch(`${API_BASE_URL}/student/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData),
      credentials: 'include'
    });
    return await response.json();
  },

  getStudent: async (id) => {
    const response = await fetch(`${API_BASE_URL}/student/${id}`, {
      credentials: 'include'
    });
    return await response.json();
  },

  getAllStudents: async () => {
    const response = await fetch(`${API_BASE_URL}/student/`, {
      credentials: 'include'
    });
    return await response.json();
  },

  updateStudent: async (id, studentData) => {
    const response = await fetch(`${API_BASE_URL}/student/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData),
      credentials: 'include'
    });
    return await response.json();
  },

  deleteStudent: async (id) => {
    const response = await fetch(`${API_BASE_URL}/student/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    return await response.json();
  },

  // Employee Services
  addEmployee: async (employeeData) => {
    const response = await fetch(`${API_BASE_URL}/employee/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employeeData),
      credentials: 'include'
    });
    return await response.json();
  },

  getEmployee: async (id) => {
    const response = await fetch(`${API_BASE_URL}/employee/${id}`, {
      credentials: 'include'
    });
    return await response.json();
  },

  getAllEmployees: async () => {
    const response = await fetch(`${API_BASE_URL}/employee/`, {
      credentials: 'include'
    });
    return await response.json();
  },

  updateEmployee: async (id, employeeData) => {
    const response = await fetch(`${API_BASE_URL}/employee/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employeeData),
      credentials: 'include'
    });
    return await response.json();
  },

  deleteEmployee: async (id) => {
    const response = await fetch(`${API_BASE_URL}/employee/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    return await response.json();
  },

  // Exam Services
  addExam: async (examData) => {
    const response = await fetch(`${API_BASE_URL}/exams/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(examData),
      credentials: 'include'
    });
    return await response.json();
  },

  getExam: async (id) => {
    const response = await fetch(`${API_BASE_URL}/exams/${id}`, {
      credentials: 'include'
    });
    return await response.json();
  },

  getAllExams: async () => {
    const response = await fetch(`${API_BASE_URL}/exams/`, {
      credentials: 'include'
    });
    return await response.json();
  },

  updateExam: async (id, examData) => {
    const response = await fetch(`${API_BASE_URL}/exams/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(examData),
      credentials: 'include'
    });
    return await response.json();
  },

  deleteExam: async (id) => {
    const response = await fetch(`${API_BASE_URL}/exams/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    return await response.json();
  },

  // Payroll Services
  addPayroll: async (payrollData) => {
    const response = await fetch(`${API_BASE_URL}/payroll/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payrollData),
      credentials: 'include'
    });
    return await response.json();
  },

  getPayroll: async (id) => {
    const response = await fetch(`${API_BASE_URL}/payroll/${id}`, {
      credentials: 'include'
    });
    return await response.json();
  },

  getAllPayrolls: async () => {
    const response = await fetch(`${API_BASE_URL}/payroll/`, {
      credentials: 'include'
    });
    return await response.json();
  },

  updatePayroll: async (id, payrollData) => {
    const response = await fetch(`${API_BASE_URL}/payroll/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payrollData),
      credentials: 'include'
    });
    return await response.json();
  },

  deletePayroll: async (id) => {
    const response = await fetch(`${API_BASE_URL}/payroll/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    return await response.json();
  }
};

export default apiService;