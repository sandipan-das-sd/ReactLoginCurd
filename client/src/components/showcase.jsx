import React from 'react';
import { FaUsers, FaDollarSign, FaUserPlus, FaRocket, FaLock, FaChartLine } from 'react-icons/fa';

export default function Showcase() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
          <p className="text-lg text-gray-600">Get real-time insights, track growth, and make informed decisions — all in one place.</p>
        </div>
      </header>

      {/* Stats Cards */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-md rounded-2xl p-6 transition hover:scale-105">
            <div className="flex items-center space-x-4">
              <FaUsers className="text-blue-500 text-3xl" />
              <div>
                <h2 className="text-lg font-medium text-gray-700">Total Users</h2>
                <p className="text-2xl font-bold text-blue-600">1,254</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-green-50 shadow-md rounded-2xl p-6 transition hover:scale-105">
            <div className="flex items-center space-x-4">
              <FaDollarSign className="text-green-500 text-3xl" />
              <div>
                <h2 className="text-lg font-medium text-gray-700">Revenue</h2>
                <p className="text-2xl font-bold text-green-600">$24,500</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-purple-50 shadow-md rounded-2xl p-6 transition hover:scale-105">
            <div className="flex items-center space-x-4">
              <FaUserPlus className="text-purple-500 text-3xl" />
              <div>
                <h2 className="text-lg font-medium text-gray-700">New Signups</h2>
                <p className="text-2xl font-bold text-purple-600">324</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-10">Powerful features to supercharge your growth</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <FaRocket className="text-indigo-500 text-4xl mb-3" />
              <h3 className="font-semibold text-lg mb-1">Fast Performance</h3>
              <p className="text-gray-500 text-sm">Experience blazing fast load times and real-time data updates.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <FaLock className="text-red-400 text-4xl mb-3" />
              <h3 className="font-semibold text-lg mb-1">Secure & Private</h3>
              <p className="text-gray-500 text-sm">Your data is safe with enterprise-grade security protocols.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
              <FaChartLine className="text-green-400 text-4xl mb-3" />
              <h3 className="font-semibold text-lg mb-1">Analytics-Driven</h3>
              <p className="text-gray-500 text-sm">Make decisions backed by smart analytics and visual insights.</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl p-10 shadow-md text-center max-w-4xl mx-auto mb-16">
          <blockquote className="italic text-gray-600 text-lg">
            “Since switching to this dashboard, our workflow is smoother, and our team is more informed than ever.”
          </blockquote>
          <p className="mt-4 font-semibold text-gray-800">— Alex Johnson, Product Manager at NovaTech</p>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Ready to grow your business?</h3>
          <p className="text-gray-600 mb-6">Start using the dashboard today and unlock your team's full potential.</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
