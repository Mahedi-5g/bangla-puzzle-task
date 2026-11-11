

export default function HeroBanner() {
  return (
    <section className="w-full bg-slate-50/50 min-h-[calc(100vh-4.5rem)] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 bg-indigo-100/80 px-4 py-1.5 rounded-full text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-6">
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span>Trusted by thousands of users</span>
      </div>

      {/* Hero Typography */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-2">
          Shorten Your URL <br />
          <span className="text-indigo-600">in seconds</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed">
          Create short, memorable links that you can share anywhere. <br className="hidden sm:inline" />
          Track every click with powerful analytics.
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl shadow-indigo-100/60 border border-gray-100 p-6 sm:p-8 md:p-10 text-center">
        {/* Lock Icon Wrapper */}
        <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg 
            className="w-6 h-6 text-indigo-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* Card Title & Description */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          Login to make your URL short
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Sign in or create a free account to start shortening links, generating QR codes, and tracking every click in real time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Primary Button */}
          <button className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Login to Make URL</span>
          </button>

          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-6 py-3 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
            <span>Sign Up Free</span>
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}