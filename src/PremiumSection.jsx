export default function PremiumSection() {
  const features = [
    "Custom branded short links",
    "UTM parameter builder",
    "Powerful analytics dashboard",
    "QR Code generator (PNG/SVG)",
    "REST API with full documentation"
  ];

  const dashboardLinks = [
    { url: "shorturl.bd/ig9Kp2", clicks: "1,247", pct: 100 },
    { url: "shorturl.bd/yt3Nm8", clicks: "589", pct: 47 },
    { url: "shorturl.bd/1k7Rv1", clicks: "312", pct: 25 },
    { url: "shorturl.bd/fb2Wx9", clicks: "198", pct: 16 },
  ];

  return (
    <section className="w-full bg-slate-50/50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & Features List */}
        <div className="flex flex-col items-start max-w-xl mx-auto lg:mx-0 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            <span>Premium</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-5">
            Unlock powerful tools for serious growth.
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
            Go beyond basic shortening with a full suite of marketing and developer tools — custom branded links, UTM builders, deep analytics, QR codes, and a REST API for your apps.
          </p>

          {/* Checkmark Features List */}
          <div className="flex flex-col gap-3.5 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3.5">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <svg 
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dashboard Mockup Card */}
        <div className="w-full max-w-xl mx-auto lg:max-w-none">
          <div className="bg-indigo-600 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-indigo-600/25 text-white flex flex-col">
            
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-indigo-500/40">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/50 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="font-bold text-sm sm:text-base text-white tracking-wide">
                Link Analytics Dashboard
              </span>
            </div>

            {/* Mockup Rows */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {dashboardLinks.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                    <span className="text-indigo-100 font-medium tracking-tight truncate pr-3">
                      {item.url}
                    </span>
                    <span className="font-bold text-white shrink-0">
                      {item.clicks}
                    </span>
                  </div>
                  {/* Progress Bar Track */}
                  <div className="w-full bg-indigo-950/25 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-200 h-full rounded-full transition-all duration-300" 
                      style={{ width: `${item.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
