
import React from 'react';
import { MousePointer2, Paintbrush, Truck, Megaphone, Receipt } from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (page: string) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 lg:py-32 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Your Path to Funding Success</h1>
          <p className="text-xl text-slate-600">We've refined our process over 15 years to make it as hands-off as possible for your organization.</p>
        </div>

        <div className="space-y-24">
          {[
            {
              title: "Step 1: Consultation & Discovery",
              icon: <MousePointer2 className="w-8 h-8" />,
              desc: "We start with a quick call to understand your goals, your community size, and your timeline. We'll identify the best local merchants for your specific area.",
              img: "https://picsum.photos/seed/consult/600/400"
            },
            {
              title: "Step 2: Merchant Acquisition",
              icon: <Megaphone className="w-8 h-8" />,
              desc: "Our professional acquisition team contacts local businesses in your zip code. We secure high-value discounts that make your cards incredibly easy to sell.",
              img: "https://picsum.photos/seed/merchant/600/400",
              reverse: true
            },
            {
              title: "Step 3: Custom Card Design",
              icon: <Paintbrush className="w-8 h-8" />,
              desc: "Our design team creates a professional, durable plastic card featuring your logo, colors, and the curated list of local offers.",
              img: "https://picsum.photos/seed/design/600/400"
            },
            {
              title: "Step 4: Production & Delivery",
              icon: <Truck className="w-8 h-8" />,
              desc: "We print and ship your cards directly to your door. Cards arrive ready to sell, packed in easy-to-distribute bundles for your volunteers.",
              img: "https://picsum.photos/seed/truck/600/400",
              reverse: true
            }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${item.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {item.icon}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{item.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <div className="lg:w-1/2">
                <img src={item.img} className="rounded-3xl shadow-xl w-full h-auto" alt={item.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-xl"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
