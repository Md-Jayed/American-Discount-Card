
import React from 'react';
import { Share2, QrCode, Heart, BarChart3, CheckCircle, LayoutGrid } from 'lucide-react';

interface AdvertisersProps {
  onNavigate: (page: string) => void;
}

const Advertisers: React.FC<AdvertisersProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 lg:py-32 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Become a Community Sponsor</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Support local schools while reaching thousands of high-intent customers. Your business featured on a professional card they'll carry for a full year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              title: "Free Visibility", 
              desc: "Qualified businesses often receive placement for free in exchange for a high-value offer.",
              icon: <Share2 className="text-blue-600" />
            },
            { 
              title: "Digital & Physical", 
              desc: "Offers appear on the physical card grid and in our optional QR-linked mobile directory.",
              icon: <QrCode className="text-blue-600" />
            },
            { 
              title: "Community Goodwill", 
              desc: "Customers prioritize the brands that invest back into their local schools and sports teams.",
              icon: <Heart className="text-blue-600" />
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="mb-6 p-3 bg-white rounded-2xl shadow-sm inline-block">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl font-bold text-white">The Merchant Grid Layout</h2>
              <p className="text-slate-400">Our back-of-card grid is a proven format that maximizes readability and redemption.</p>
              <ul className="space-y-6">
                {[
                  "Clear, high-resolution logo placement.",
                  "Bold, easy-to-read discount text.",
                  "Optional barcode for simple POS scanning.",
                  "Localized targeting based on organization location.",
                  "Exclusive categories (Only one Pizza spot, one Lube shop, etc.)"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-300 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-2xl shadow-2xl rotate-2">
                <div className="text-center mb-6">
                  <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Sample Offer Grid</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {name: "Denny's", off: "10% OFF"},
                    {name: "Sonic", off: "FREE CHIPS"},
                    {name: "Arby's", off: "BOGO FREE"},
                    {name: "Wendy's", off: "$2 OFF"},
                    {name: "Pizza Hut", off: "FREE TOPPING"},
                    {name: "Burger King", off: "WHOPPER JR"},
                    {name: "Jiffy Lube", off: "$5 OFF OIL"},
                    {name: "Subway", off: "FREE COOKIE"},
                    {name: "Local BBQ", off: "15% OFF"}
                  ].map((m, i) => (
                    <div key={i} className="border border-slate-100 p-2 rounded flex flex-col items-center justify-center text-center">
                      <div className="text-[8px] font-bold text-slate-400 uppercase leading-none mb-1">{m.name}</div>
                      <div className="text-[10px] font-black text-slate-900 leading-none">{m.off}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t text-center">
                   <div className="inline-block bg-slate-100 px-3 py-1 rounded text-[8px] font-bold text-slate-500 tracking-widest uppercase">Laminated 30mil PVC Grid</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Partner With The Experts</h2>
          <p className="text-slate-600">
            Join the community goodwill network. Most sponsorships are handled in partnership with the local organization, but you can also request a spot directly.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
            >
              Apply for Sponsorship
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisers;
