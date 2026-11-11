

export default function StatsBanner() {
  const stats = [
    { value: '100K+', label: 'Links Created' },
    { value: '1M+', label: 'Total Clicks' },
    { value: '180+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <section className="w-full bg-indigo-600 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <span className="text-4xl md:text-5xl font-black tracking-tight mb-2">
              {stat.value}
            </span>
            <span className="text-indigo-100 text-sm md:text-base font-normal">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}