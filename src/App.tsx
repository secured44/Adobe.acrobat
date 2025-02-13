import React, { useState, useEffect } from 'react';
import { FileText, Mail, Lock, Download } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Show preloader for 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      // Show clear background initially
      setShowBackground(true);
      // Add blur after 1 second
      setTimeout(() => {
        setShowBackground(false);
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <FileText className="w-24 h-24 text-red-500 animate-bounce mb-8" />
        <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-red-500 animate-loading-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          showBackground ? 'blur-none' : 'blur-xl'
        }`}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="bg-white/90 p-8 rounded-lg shadow-2xl w-full max-w-md backdrop-blur-sm">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Design Demo Login</h1>
            <p className="text-sm text-gray-600 mt-2">This is a design demonstration only.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Download className="w-4 h-4" />
              <span>demo_document.pdf downloading...</span>
            </div>
          </div>

          <p className="mt-4 text-xs text-center text-gray-500">
            This is a design demonstration only. No actual login functionality is implemented.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;