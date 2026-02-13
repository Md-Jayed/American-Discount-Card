
import React from 'react';
import { ShieldAlert, HelpCircle, ArrowRight, Check } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 lg:py-32 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We don't do hidden fees or complex contracts. Our pricing is customized to help your specific organization reach its maximum fundraising potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Factors That Influence Your Price</h2>
              <p className="text-slate-600 mb-8">Because every community and every card is custom-built, we provide quotes based on these specific needs:</p>
              <ul className="space-y-6">
                {[
                  { title: "Quantity", desc: "Volume discounts apply for orders over 1,000 units." },
                  { title: "Merchant Acquisition", desc: "Whether we recruit the businesses or you provide them." },
                  { title: "Card Complexity", desc: "Double-sided printing, QR codes, or special finishes." },
                  { title: "Timeline", desc: "Rush orders may incur additional production fees." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold text-xs">{i+1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex items-start gap-4">
              <ShieldAlert className="text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Our Zero-Risk Guarantee</h4>
                <p className="text-slate-600 leading-relaxed">
                  Qualified schools and registered 501(c)(3) nonprofits can start their campaign with **zero upfront cost**. You pay your manufacturing invoice from the initial proceeds of your sales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-[2rem] shadow-2xl space-y-8">
            <h3 className="text-2xl font-bold">Standard Packages Typically Include:</h3>
            <ul className="space-y-4">
              {[
                "15-20 Professional Local Sponsors",
                "Full-Color Custom Card Design",
                "Durable 30mil PVC Plastic (Credit Card Style)",
                "Social Media Marketing Graphics",
                "Tracking & Reconciliation Support",
                "Free Shipping Nationwide"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="text-green-400" size={20} />
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-slate-800">
              <p className="text-slate-400 text-sm mb-6 italic">Ready to see your exact potential profit? Let's build your custom quote.</p>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Request Custom Quote <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-slate-500 flex items-center justify-center gap-2">
            <HelpCircle size={18} /> Have more questions? Check out our <button onClick={() => onNavigate('faq')} className="text-blue-600 font-bold hover:underline">FAQ section</button>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
