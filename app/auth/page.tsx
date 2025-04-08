'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-100 via-white to-sky-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white rounded-[32px] shadow-lg p-6"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Rocket Illustration */}
          <div className="relative order-2 md:order-1">
            <motion.div
              animate={{
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-48 md:h-72 relative"
            >
              <Image
                src="/social-media/rocket.svg"
                alt="Rocket illustration"
                width={400}
                height={400}
                priority
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-1"
            >
              Be
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              limitless
            </motion.h2>
          </div>

          {/* Right Side - Sign In Form */}
          <div className="order-1 md:order-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Sign up</h2>
              <div className="text-sm">
                <span className="text-gray-500">Already have an account?</span>{' '}
                <Link href="/auth/signin" className="text-gray-900 font-medium">
                  Log in
                </Link>
              </div>
            </div>

            <form className="space-y-4">

              {/* 🌟 Profile Image Upload */}
              <div className="flex flex-col items-center text-center space-y-2">
                {previewURL ? (
                  <Image
                    src={previewURL}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="rounded-full object-cover border"
                  />
                ) : (
                  <div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-sm"
                />
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 focus:border-gray-900 focus:ring-0 text-gray-900 text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 focus:border-gray-900 focus:ring-0 text-gray-900 text-sm"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 focus:border-gray-900 focus:ring-0 text-gray-900 text-sm"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {/* Eye Icon */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-pink-500 hover:text-pink-600">Terms of Service</a> and{' '}
                  <a href="#" className="text-pink-500 hover:text-pink-600">Privacy Policies</a>
                </label>
              </div>

              {/* Create Account */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800"
              >
                Create account
              </motion.button>

              {/* Social Sign Up */}
              <div className="mt-4 text-center text-sm text-gray-500">or sign up with</div>
              <div className="flex justify-center space-x-4">
                <button type="button" className="p-2 hover:opacity-80 transition-opacity">
                  <Image src="/social-media/google.svg" alt="Google" width={24} height={24} />
                </button>
                <button type="button" className="p-2 hover:opacity-80 transition-opacity">
                  <Image src="/social-media/facebook.svg" alt="Facebook" width={24} height={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}