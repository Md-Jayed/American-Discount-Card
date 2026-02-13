
import React from 'react';
import { TrendingUp, Clock, Target, DollarSign, ArrowRight, ShieldCheck, Box } from 'lucide-react';
import { TECH_SPECS } from '../constants';

interface FundraisingProps {
  onNavigate: (page: string) => void;
}

const Fundraising: React.FC<FundraisingProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white py-20 lg:py-32 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Professional-Grade Programs</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We provide the exact same quality as the credit cards in your wallet. Durable, high-definition, and built to withstand a year of use.
          </p>
        </div>

        {/* Technical Specs Table */}
        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 mb-24 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <Box className="text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tighter">Production Specifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Dimensions</div>
              <div className="text-xl font-black text-slate-900">{TECH_SPECS.size}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Thickness</div>
              <div className="text-xl font-black text-slate-900">{TECH_SPECS.thickness}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Material</div>
              <div className="text-xl font-black text-slate-900">{TECH_SPECS.material}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Finish</div>
              <div className="text-xl font-black text-slate-900">{TECH_SPECS.finish}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Printing</div>
              <div className="text-xl font-black text-slate-900">{TECH_SPECS.printing}</div>
            </div>
            <div className="space-y-1">
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tracking Options</div>
               <div className="text-xl font-black text-slate-900">QR / Barcodes / Numbering</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {[
            { label: "Organization Profit", value: "Up to 70%", icon: <DollarSign className="text-green-500" /> },
            { label: "Card Price Range", value: "$10 – $25", icon: <TrendingUp className="text-blue-500" /> },
            { label: "Typical Timeline", value: "2 – 6 Weeks", icon: <Clock className="text-orange-500" /> },
            { label: "Upfront Cost", value: "$0 Down", icon: <Target className="text-purple-500" /> }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-black text-slate-900">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-32">
          {/* How organizations make money */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Built to Last the Whole Season</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  As seen in our professional samples, we integrate your full season schedule directly onto the card front. This ensures supporters carry the card to every game, keeping your sponsors top-of-mind.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span><strong>High Retain:</strong> You keep $10-$15 of every $20 card sold.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span><strong>Full-Season Utility:</strong> Schedules keep the card in use for 6+ months.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span><strong>Modern Features:</strong> Add QR codes for instant raffle entry or team website links.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative p-8 bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl">
                 <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent"></div>
                 <div className="relative z-10 bg-white rounded-xl p-8 shadow-inner">
                    <div className="flex justify-between items-center mb-6">
                       <div className="text-2xl font-black text-slate-900">RIDGE FOOTBALL</div>
                       <div className="text-blue-600 font-bold">$10</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-[8px] font-bold text-slate-400 border-b pb-2 mb-2">
                       <div>DATE</div><div>OPPONENT</div><div>LOC</div><div>TIME</div>
                    </div>
                    <div className="space-y-2 opacity-50">
                       <div className="grid grid-cols-4 gap-2 text-[10px]"><div>8/31</div><div>Monroe</div><div>Away</div><div>7:00</div></div>
                       <div className="grid grid-cols-4 gap-2 text-[10px]"><div>9/08</div><div>Phillipsburg</div><div>Away</div><div>7:00</div></div>
                       <div className="grid grid-cols-4 gap-2 text-[10px]"><div>9/14</div><div>Hillsborough</div><div>Home</div><div>7:00</div></div>
                    </div>
                    <div className="mt-6 pt-6 border-t text-center italic text-xs font-semibold text-slate-500">
                       "PREMIER SPONSOR PLACEMENT HERE"
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-32 text-center bg-slate-900 text-white rounded-[3rem] p-16">
          <h2 className="text-3xl font-bold mb-6">Expert Design, Every Time</h2>
          <p className="max-w-2xl mx-auto text-slate-400 mb-10 leading-relaxed">
            Our established logistics network allows us to coordinate campaigns for multi-state organizations with ease. We handle the merchant acquisition in every zip code your members reside.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Request Your Free Proof <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fundraising;
