// *********************
// Role of the component: Customer testimonials and review highlights on the homepage
// Name of the component: TestimonialsSection.tsx
// Developer: Custom
// Version: 1.0
// Component call: <TestimonialsSection />
// Input parameters: no input parameters
// Output: testimonial section
// *********************

import React from "react";

const testimonials = [
  {
    quote: "The best PC store in Sri Lanka — fast delivery and excellent support.",
    author: "Kasun, Software Engineer",
    rating: 5,
  },
  {
    quote: "I found the perfect build for gaming and work. Superb quality and price.",
    author: "Nadeesha, Creative Professional",
    rating: 5,
  },
  {
    quote: "The admin dashboard made product management painless. Great backend support.",
    author: "Hashan, Store Manager",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            Customer reviews
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Trusted by shoppers for performance and service</h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            Real feedback from Sri Lankan customers who use our hardware, custom systems, and support services every day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur">
              <div className="flex items-center gap-2 pb-4 text-amber-300">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <span key={idx} className="text-2xl">★</span>
                ))}
              </div>
              <p className="text-lg leading-8 text-slate-100">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-slate-400">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
