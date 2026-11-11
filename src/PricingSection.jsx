export default function PricingSection() {
  const plans = [
    {
      name: "FREE",
      price: "$0",
      period: "/forever",
      description: "Great for individuals and casual use.",
      features: [
        "Unlimited link shortening",
        "Basic click counter",
        "HTTPS security",
        "QR code (basic)",
        "Cross-device support"
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "PRO",
      price: "$9",
      period: "/per month",
      description: "For creators, marketers, and power users.",
      features: [
        "Everything in Free",
        "Custom short links",
        "Advanced analytics",
        "UTM builder",
        "QR code (custom)",
        "Browser extension",
        "Priority support"
      ],
      buttonText: "Start 14-Day Trial",
      isPopular: true,
    },
    {
      name: "BUSINESS",
      price: "$29",
      period: "/per month",
      description: "For teams and growing companies.",
      features: [
        "Everything in Pro",
        "Team dashboard",
        "Developer API",
        "Bulk link creation",
        "White-label domain",
        "App integrations",
        "Dedicated support"
      ],
      buttonText: "Subscribe Now",
      isPopular: false,
    },
  ];

  return (
    <section className="w-full bg-slate-50/50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            <span>Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            No hidden fees. Start free, scale when you're ready.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/30 lg:-translate-y-2'
                  : 'bg-white border border-gray-100 text-gray-900 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Top Details */}
              <div>
                <span className={`font-bold text-xs uppercase tracking-wider block mb-4 ${
                  plan.isPopular ? 'text-indigo-200' : 'text-gray-400'
                }`}>
                  {plan.name}
                </span>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-black tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>

                <p className={`text-sm sm:text-base mb-8 ${plan.isPopular ? 'text-indigo-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.isPopular ? 'bg-indigo-700 text-indigo-200' : 'bg-indigo-50 text-indigo-600'
                      }`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium ${plan.isPopular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-md'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20'
                }`}
              >
                <span>{plan.buttonText}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
