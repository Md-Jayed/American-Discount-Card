
import React from 'react';
import { MousePointer2, Paintbrush, Truck, Megaphone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (page: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: "01",
      title: "Consultation & Strategy",
      icon: <MousePointer2 className="w-6 h-6" />,
      desc: "We begin with a deep dive into your organization's goals. Our experts analyze your community demographics and previous fundraising history to build a custom roadmap for success.",
      details: ["Goal Setting", "Timeline Planning", "Merchant Targeting"]
    },
    {
      number: "02",
      title: "Merchant Acquisition",
      icon: <Megaphone className="w-6 h-6" />,
      desc: "Our professional 'Merchant Experts' hit the ground running. We secure exclusive, high-value discounts from local businesses in your specific zip codes—at no cost to you.",
      details: ["Local Outreach", "Contract Management", "Offer Optimization"]
    },
    {
      number: "03",
      title: "Expert Card Design",
      icon: <Paintbrush className="w-6 h-6" />,
      desc: "Your brand is our priority. We design professional-grade 30mil PVC cards featuring your logos, team colors, and athletic schedules. Every card is a community keepsake.",
      details: ["Custom Branding", "Schedule Integration", "QR Code Setup"]
    },
    {
      number: "04",
      title: "Production & Launch",
      icon: <Truck className="w-6 h-6" />,
      desc: "We handle the heavy lifting. Your cards are printed with high-definition offset technology and shipped directly to your door, sorted and ready for immediate distribution.",
      details: ["HD Offset Printing", "Fast 10-Day Turnaround", "Direct Shipping"]
    }
  ];

  return (
    <div className="bg-white animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="pt-24 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-none mb-8">
              The <span className="text-blue-600">Expert</span> Workflow.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Fifteen years of refinement. Zero upfront risk. We've built the most streamlined fundraising engine in the industry so you can focus on your mission, not the logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-slate-100">
            {steps.map((step, i) => (
              <div key={i} className="group py-20 lg:py-32 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-7xl lg:text-9xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-500 leading-none">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                      {step.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{step.title}</h2>
                </div>
                <div className="lg:w-2/3 space-y-8">
                  <p className="text-2xl text-slate-600 leading-relaxed font-light">
                    {step.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Why our process <br/><span className="text-blue-600">actually works.</span></h2>
              <div className="space-y-6">
                {[
                  { title: "Merchant Exclusivity", desc: "We don't saturate the market. Your card features unique offers that aren't found anywhere else." },
                  { title: "High-Touch Support", desc: "A dedicated campaign manager is assigned to your account from day one until the final check is cut." },
                  { title: "Data-Driven Design", desc: "We use 15 years of redemption data to determine which merchant mixes perform best in your region." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10">
                <ShieldCheck className="w-16 h-16 text-blue-400 mb-8" />
                <h3 className="text-3xl font-bold mb-6">The 100% Zero-Risk Guarantee</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  We are so confident in our process that we assume all upfront costs. If you don't sell your cards, you don't owe us a penny. We only succeed when you succeed.
                </p>
                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-blue-400">
                  <CheckCircle2 size={20} /> No Upfront Fees
                  <span className="opacity-20">|</span>
                  <CheckCircle2 size={20} /> No Hidden Costs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-12">Ready to start?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-16 py-6 rounded-2xl text-2xl font-black hover:bg-blue-700 transition-all shadow-2xl hover:shadow-blue-200/50 flex items-center justify-center gap-4 mx-auto group"
          >
            Launch Your Fundraiser <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

