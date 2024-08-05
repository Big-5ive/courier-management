import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const ClientLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full h-full bg-[#EEF2F8] overflow-hidden md:flex-row flex-col">
        <div className="w-full md:w-1/2 lg:flex flex-col items-center justify-center p-8 bg-[#14192D] text-white md:block hidden">
          <div className="mb-8">
            <img src="/icons/APE.png" alt="Proximity Logo" className="w-32 h-20" />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-center">Welcome to Pacific Express</h1>
          <p className="mb-4">Effortless Attendance, Enhanced Integrity</p>
          <p className="text-sm">Join the future of attendance management. Sign up now to experience seamless and secure attendance tracking with Proximity.</p>
        </div>
        <div className="w-full md:w-1/2 p-3 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">Welcome Back to Pacific Express</h2>
          <p className="text-gray-600 mb-8 text-center">Ready to mark your presence? Log in to continue.</p>
          <form className="space-y-1 w-full lg:w-[80%] flex flex-col justify-center items-center">
            <div className='w-full mb-4'>
              <div className="mt-1 relative rounded-md shadow-sm lg:max-w-[500px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="h-9 outline-none border-none focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className='w-full !mb-2'>
              <div className="mt-1 relative rounded-md shadow-sm lg:max-w-[500px] ">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="h-9 outline-none border-none focus:ring-[#EF6911] focus:border-[#EF6911] block w-full pl-10 pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="text-sm">
                <a href="#" className="font-medium text-[#EF6911] hover:text-[#EF6911]">Forgot Password?</a>
              </div>
            </div>
            <div className='w-full'>
              <button
                type="submit"
                className="w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white !bg-[#14192D] hover:bg-[#EF6911] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF6911]"
              >
                Login
              </button>
            </div>
            <div className="text-center text-sm">
              Don't have an account yet? <a href="#" className="font-medium text-[#EF6911] hover:text-[#EF6911]">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
