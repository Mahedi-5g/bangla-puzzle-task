import { useState } from "react";


export default function PopularLinks() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const linksData = [
    {
      shortUrl: 'https://thetiny.site/ARLSeN',
      originalUrl: 'https://api.whatsapp.com/send?phone=8801880811048&text=i+want+to+be+a+...',
      clicks: 430,
    },
    {
      shortUrl: 'https://thetiny.site/BArxCj',
      originalUrl: 'https://leena45945.softr.app',
      clicks: 272,
    },
    {
      shortUrl: 'https://thetiny.site/kLrnXd',
      originalUrl: 'https://supportersframe.com/blog/supportersframecom-introduces-qr-code...',
      clicks: 88,
    },
    {
      shortUrl: 'https://thetiny.site/qQNTp0',
      originalUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf3aBliGp4uunkBsQVLy_zLWcwkWh...',
      clicks: 68,
    },
    {
      shortUrl: 'https://thetiny.site/k4dIp8',
      originalUrl: 'https://solverfirm.com/',
      clicks: 37,
    },
  ];

  const handleCopy = (url, index) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="w-full bg-slate-50/50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Most Popular Links
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Links List */}
        <div className="flex flex-col gap-4">
          {linksData.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-5 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* URLs Column */}
              <div className="flex flex-col gap-1 min-w-0 pr-2">
                <a
                  href={item.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 font-medium text-base md:text-lg hover:underline truncate"
                >
                  {item.shortUrl}
                </a>
                <span className="text-gray-400 text-xs md:text-sm font-normal truncate">
                  {item.originalUrl}
                </span>
              </div>

              {/* Stats & Actions Row */}
              <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                {/* Click Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-700 text-xs md:text-sm font-semibold">
                  <svg
                    className="w-4 h-4 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span>{item.clicks} clicks</span>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(item.shortUrl, index)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold text-xs md:text-sm rounded-xl transition-all duration-150 flex items-center gap-1.5 shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{copiedIndex === index ? 'Copied!' : 'Copy'}</span>
                </button>

                {/* QR Code Button */}
                <button className="px-3 py-2 bg-slate-100 hover:bg-slate-200 active:scale-95 text-indigo-600 font-bold text-xs md:text-sm rounded-xl transition-all duration-150 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <span>QR</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}