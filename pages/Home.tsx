
import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { FEATURES, PROJECTS } from '../constants';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform translate-x-1/2 -z-10 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-200">
                Professional Grade 30mil PVC
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
                High-Impact <span className="text-blue-600">Fundraising</span> for the Modern Era.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Custom-designed, merchant-packed discount cards with game schedules, QR tracking, and massive community value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-blue-600 text-white px-8 py-5 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200/50 flex items-center justify-center gap-2"
                >
                  Start Your Fundraiser <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => onNavigate('how-it-works')}
                  className="bg-white border border-slate-200 text-slate-700 px-8 py-5 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  View Sample Cards
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-blue-600" /> No Upfront Cost</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-blue-600" /> Ships in 10 Days</span>
              </div>
            </div>
            <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   {/* Athletic Schedule Sample */}
                   <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 -rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="aspect-[1.58/1] bg-slate-900 rounded-lg overflow-hidden relative">
                         <img 
                           src="https://iili.io/qKYH7Rt.md.png" 
                           alt="Cougar Football Card" 
                           className="w-full h-full object-cover"
                           referrerPolicy="no-referrer"
                         />
                      </div>
                      <div className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Athletic Schedule Card</div>
                   </div>
                   {/* Scholarship/Benefit Sample */}
                   <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                      <div className="aspect-[1.58/1] bg-blue-900 rounded-lg overflow-hidden relative">
                         <img 
                           src="https://iili.io/qKY3OvV.md.png" 
                           alt="Scholarship Card" 
                           className="w-full h-full object-cover"
                           referrerPolicy="no-referrer"
                         />
                      </div>
                      <div className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Scholarship Program</div>
                   </div>
                </div>
                <div className="space-y-4">
                   {/* Community Grid Sample */}
                   <div className="bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 rotate-6 hover:rotate-0 transition-transform duration-500">
                      <div className="aspect-[1.58/1] bg-white rounded-lg overflow-hidden border border-slate-200 relative">
                         <img 
                           src="https://iili.io/qKY3eyB.md.png" 
                           alt="Community Savings Card" 
                           className="w-full h-full object-cover"
                           referrerPolicy="no-referrer"
                         />
                      </div>
                      <div className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Community Savings Grid</div>
                   </div>
                   {/* Profit Margin Tile */}
                   <div className="bg-slate-900 p-6 rounded-2xl shadow-2xl text-white flex flex-col justify-center items-center text-center">
                      <div className="text-4xl font-black text-blue-400">70%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Profit Margin</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof/Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Professional Designs That Sell.</h2>
              <p className="text-slate-600">Explore our recent projects across the country. From high school football schedules to nationwide scholarship initiatives.</p>
            </div>
            <button onClick={() => onNavigate('fundraising')} className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Examples <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project: any, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-slate-100 rounded-3xl p-8 mb-6 transition-all group-hover:bg-blue-50">
                  <div className="aspect-[1.58/1] bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">{project.value}</div>
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{project.name}</h4>
                <ul className="mt-2 space-y-1">
                  {project.features.map((f: string, j: number) => (
                    <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">The Expert Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We've streamlined everything from merchant acquisition to final delivery.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Free Consultant Review", desc: "Speak with a local rep to define your goals and target merchants." },
            { step: "02", title: "Custom Design Proof", desc: "Our 'Card Experts' build a professional layout with your team colors and logos." },
            { step: "03", title: "Zero-Risk Launch", desc: "Receive your high-quality PVC cards and start raising money immediately." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all relative overflow-hidden group">
              <span className="text-8xl font-black text-slate-50 absolute -right-4 -top-4 group-hover:text-blue-50 transition-colors">{item.step}</span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Works / Features */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Why American Discount Cards?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Standard credit-card quality that your supporters will keep and use all year long.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800/50 transition-all">
                <div className="mb-6 bg-blue-600/20 p-3 rounded-xl inline-block">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight">Ready to launch your most professional fundraiser?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-slate-50 transition-all shadow-lg"
              >
                Request Free Proof
              </button>
            </div>
            <p className="mt-8 text-blue-200 text-sm font-medium flex items-center justify-center gap-2">
              <ShieldCheck size={16} /> 100% Satisfaction Guaranteed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
