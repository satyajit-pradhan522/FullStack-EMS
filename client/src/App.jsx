import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Routes, Route, Navigate } from 'react-router-dom'
import Attendance from './pages/Attendance'
import Employees from './pages/Employees'
import Leave from './pages/Leave'
import PaySlips from './pages/PaySlips'
import PrintPayslips from './pages/PrintPayslips'
import Settings from './pages/Settings'
import LoginLanding from './pages/LoginLanding'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import LoginForm from './components/LoginForm'


const App = () => {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Routes >
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin Portal" subtitle="Sign in to manage the organization" />} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign in to access your account" />} />
        <Route element={<Layout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<PaySlips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslips />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  )
}

export default App
