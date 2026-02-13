
import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <div className="py-20 lg:py-32 bg-slate-50 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Common Questions</h1>
          <p className="text-xl text-slate-600">Everything you need to know about the American Discount Cards program.</p>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h3>
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-blue-600 rounded-[2rem] text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still have a question?</h2>
          <p className="mb-8 text-blue-100">Our fundraising consultants are available Mon-Fri, 9am - 5pm EST.</p>
          <a href="mailto:support@americandiscountcards.com" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all">
            Email a Consultant
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
