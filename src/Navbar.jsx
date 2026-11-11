import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center space-x-12">
          <a href="#" className="font-mono text-xl font-bold tracking-widest text-black">
            THETINY.SITE
          </a>

          {/* Center-Left: Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#" className="text-indigo-600 font-semibold">Home</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition">About</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition">Blog</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition">Terms</a>
          </div>
        </div>

        {/* Right: Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#" 
            className="px-5 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            Log In
          </a>
          <a 
            href="#" 
            className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
          <a href="#" className="text-indigo-600 font-semibold text-sm">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Blog</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms</a>
          <div className="pt-2 flex flex-col space-y-2">
            <a href="#" className="w-full text-center px-4 py-2 text-sm font-medium text-gray-800 border border-gray-200 rounded-lg">Log In</a>
            <a href="#" className="w-full text-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg">Get Started Free</a>
          </div>
        </div>
      )}
    </nav>
  );
}