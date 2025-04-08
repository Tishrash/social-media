'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!agreed) {
      setError('Please agree to the terms and conditions');
      return;
    }

    try {
      setLoading(true);
      
      // Here you would typically make an API call to create the user account
      // For this example, we'll simulate a successful signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user data in localStorage (for demo purposes)
      localStorage.setItem('user', JSON.stringify({ name, email }));
      
      // Show success message
      alert('Account created successfully! Please log in.');
      
      // Redirect to login page
      router.push('/auth/signin');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
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
                src="/rocket.svg"
                alt="Rocket illustration"
                layout="fill"
                objectFit="contain"
                priority
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
                <Link href="/auth/signin" className="text-gray-900 font-medium hover:text-gray-700">
                  Sign in
                </Link>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}
              
              {/* Name */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 focus:border-gray-900 focus:ring-0 text-gray-900 text-sm transition-colors"
                  />
                  {name && (
                    <button 
                      type="button"
                      onClick={() => setName('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 focus:border-gray-900 focus:ring-0 text-gray-900 text-sm transition-colors"
                  />
                  {email && (
                    <button 
                      type="button"
                      onClick={() => setEmail('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-100 focus:border-gray-900 focus:ring-0 text-gray-900 text-sm transition-colors"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="ml-2 block text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    Platform's Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-pink-500 hover:text-pink-600">
                    Privacy Policies
                  </a>
                </label>
              </div>

              {/* Create Account Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.99 }}
                className={`w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                }`}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </motion.button>

              {/* Social Sign Up */}
              <div className="mt-4 text-center text-sm text-gray-500">
                or sign up with
              </div>

              <div className="flex justify-center space-x-4">
                <button type="button" className="p-2 hover:opacity-80 transition-opacity">
                  <Image src="/google.svg" alt="Google" width={24} height={24} />
                </button>
                <button type="button" className="p-2 hover:opacity-80 transition-opacity">
                  <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 