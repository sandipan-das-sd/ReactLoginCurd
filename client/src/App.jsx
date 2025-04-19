import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import AuthLayout from './layout/AuthLayout';
import DashboardLayout from './layout/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import { Home } from './components/home';
export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}
