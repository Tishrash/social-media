'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'profile', label: 'Profile', count: null, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'courses', label: 'My Courses', count: 3, icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { id: 'completed', label: 'Completed', count: 0, icon: 'M5 13l4 4L19 7' },
    { id: 'events', label: 'Events', count: 2, icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'achievements', label: 'Achievements', count: null, icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { id: 'recommendations', label: 'Recommendations', count: null, icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
    { id: 'messages', label: 'Messages', count: 1, icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' }
  ];

  const courses = [
    {
      id: 1,
      title: 'UX/UI Design — Websites',
      description: 'Composition, typography, color theory...',
      lessons: 26,
      status: 'Completed',
      progress: 100
    },
    {
      id: 2,
      title: 'UX/UI Design — Applications',
      description: 'Interface design and mobile applications...',
      lessons: 13,
      status: 'Completed',
      progress: 100
    },
    {
      id: 3,
      title: 'UX/UI Design — Animation',
      description: 'Animation of interface elements...',
      lessons: 15,
      status: 'Started: 15.06.2023',
      progress: 30
    }
  ];

  const socialLinks = [
    { id: 'linkedin', icon: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' },
    { id: 'facebook', icon: 'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' },
    { id: 'twitter', icon: 'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' },
    { id: 'telegram', icon: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen bg-gray-50"
    >
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-16 bg-purple-600 text-white"
      >
        <div className="h-full flex flex-col items-center py-6 space-y-8">
          <div className="p-2 rounded-lg bg-purple-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
          {[
            'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
            'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
            'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
            'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
            'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          ].map((icon, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-lg ${index === 0 ? 'bg-white text-purple-600' : 'hover:bg-purple-700'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
              </svg>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Primary Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="h-8 w-8 rounded bg-purple-600 flex items-center justify-center text-white font-medium">
              TR
            </div>
          </div>
        </div>

        {/* Overview Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-purple-600 text-white p-6 rounded-lg mb-6"
        >
          <h2 className="text-lg font-semibold mb-4">Overview</h2>
          <div className="relative h-40">
            {/* Graph placeholder */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 160" fill="none">
                <path
                  d="M0 120 C80 80, 160 160, 240 80 C320 0, 400 80, 400 40"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="240" cy="80" r="4" fill="white" />
              </svg>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold">9,178</div>
              <div className="text-sm opacity-75">Steps</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <div className="text-sm opacity-75">Time Plan</div>
              <div className="font-semibold">748 Hr</div>
            </div>
            <div>
              <div className="text-sm opacity-75">Total Steps</div>
              <div className="font-semibold">9,178 St</div>
            </div>
            <div>
              <div className="text-sm opacity-75">Target</div>
              <div className="font-semibold">9,200 St</div>
            </div>
          </div>
        </motion.div>

        {/* Activity Cards */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: 'Daily Jogging', color: 'bg-purple-600' },
            { title: 'My Jogging', color: 'bg-pink-500' }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`${activity.color} text-white p-6 rounded-lg`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{activity.title}</h3>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {[
            { title: 'Bicycle Drill', icon: '🚲', progress: 45 },
            { title: 'Jogging Hero', icon: '🏃', progress: 15 },
            { title: 'Healthy Busy', icon: '💪', progress: 90 }
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center text-xl">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-sm text-gray-500">30 km / week</p>
                  </div>
                </div>
              </div>
              <div className="relative pt-1">
                <div className="h-2 bg-gray-200 rounded">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activity.progress}%` }}
                    className="h-full bg-purple-600 rounded"
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">Progress</span>
                  <span className="text-xs font-medium text-purple-600">{activity.progress}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Friends */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Friends</h2>
          <button className="text-sm text-purple-600">View All</button>
        </div>
        <div className="space-y-4">
          {[
            { name: 'Max Stone', status: 'Now Jogging', time: '15 min' },
            { name: 'Dittie Jack', status: 'Now Jogging', time: '30 min' },
            { name: 'Lee Patrick', status: 'Morning Gym', time: '1h ago' },
            { name: 'Cody Bryan', status: 'Resting', time: '2h ago' }
          ].map((friend, index) => (
            <motion.div
              key={index}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex-1">
                <h3 className="text-sm font-medium">{friend.name}</h3>
                <p className="text-xs text-gray-500">{friend.status}</p>
              </div>
              <span className="text-xs text-gray-400">{friend.time}</span>
            </motion.div>
          ))}
        </div>

        {/* Live Map */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Live map</h2>
            <button className="text-sm text-purple-600">View</button>
          </div>
          <div className="h-48 bg-gray-100 rounded-lg relative">
            {/* Map placeholder */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-purple-50" />
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-600 rounded-full" />
              <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-pink-500 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 