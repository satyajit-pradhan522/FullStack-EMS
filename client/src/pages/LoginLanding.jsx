import React from 'react'
import LoginLeftSide from '../components/LoginLeftSide'

const LoginLanding = () => {
  return (
    <div className='flex min-h-screen flex-col md:flex-row'>
      <LoginLeftSide />

      <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen'>
        <div className='w-full max-w-md animate-fade-in relative z-10'>
          {/* Header */}
          <div className='mb-10 text-center md:text-left'>
            <h1 className='text-3xl font-medium text-slate-900 tracking-tight mb-3'>Welcome Back</h1>
            <p className='text-slate-600'>Select your portal to securely access the system.</p>
          </div>

          {/* Portals List */}

          {/* Footer */}
        </div>
      </div>
    </div>
  )
}

export default LoginLanding
