// export default function TestimonialsAndFeatures() {
//   const testimonials = [
//     {
//       quote: "A good platform for Link management.",
//       name: "Nadim Majid",
//       role: "User",
//       rating: 5,
//     },
//     {
//       quote: "Super fast URL shortening and clean interface. Love the QR code feature!",
//       name: "Sarah Jenkins",
//       role: "Digital Marketer",
//       rating: 5,
//     },
//     {
//       quote: "The detailed analytics give us clear insights on our daily audience traffic.",
//       name: "Alex Rivera",
//       role: "Content Creator",
//       rating: 5,
//     },
//   ];

//   const features = [
//     {
//       title: "Lightning Fast",
//       description: "Shorten URLs instantly with our optimized infrastructure",
//       icon: (
//         <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Detailed Analytics",
//       description: "Track clicks, referrers, locations, and devices",
//       icon: (
//         <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Global CDN",
//       description: "Fast redirects from anywhere in the world",
//       icon: (
//         <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
//         </svg>
//       ),
//     },
//     {
//       title: "QR Codes",
//       description: "Generate QR codes for any shortened link",
//       icon: (
//         <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Secure",
//       description: "All links are encrypted and malware scanned",
//       icon: (
//         <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//         </svg>
//       ),
//     },
//     {
//       title: "Expiration Control",
//       description: "Set expiry dates or click limits",
//       icon: (
//         <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <>
//       {/* 1. TESTIMONIALS SECTION */}
//       <section className="w-full bg-slate-50/50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
//               <span>Testimonials</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
//               Loved by 80,000+ users worldwide.
//             </h2>
//           </div>

//           {/* Testimonials Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
//             {testimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
//               >
//                 <div>
//                   {/* 5-Star Rating */}
//                   <div className="flex gap-1 text-indigo-600 mb-4">
//                     {[...Array(item.rating)].map((_, i) => (
//                       <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>

//                   {/* Quote */}
//                   <p className="text-gray-800 text-sm sm:text-base font-medium mb-6 leading-relaxed">
//                     "{item.quote}"
//                   </p>
//                 </div>

//                 {/* Author */}
//                 <div className="pt-4 border-t border-gray-100">
//                   <h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.name}</h4>
//                   <p className="text-gray-400 text-xs sm:text-sm">{item.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 2. WHY CHOOSE OUR PLATFORM / FEATURES SECTION */}
//       <section className="w-full bg-slate-50/50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12 sm:mb-16">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/80 text-indigo-600 font-semibold text-xs tracking-wider uppercase mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
//               <span>Features</span>
//             </div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-4">
//               Why Choose Our Platform?
//             </h2>
//             <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
//               Everything you need to manage and track your links
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow duration-200"
//               >
//                 {/* Icon Container */}
//                 <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/60 flex items-center justify-center shrink-0">
//                   {feature.icon}
//                 </div>

//                 {/* Title & Description */}
//                 <div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
