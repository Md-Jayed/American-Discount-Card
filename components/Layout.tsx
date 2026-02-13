
import React, { useState } from 'react';
import { Menu, X, CreditCard, Phone, Mail } from 'lucide-react';
import { MISSION_STATEMENT, TAGLINES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Fundraising', id: 'fundraising' },
    { label: 'Advertisers', id: 'advertisers' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              <div className="bg-blue-600 p-2 rounded-lg mr-2">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-tight">AMERICAN</span>
                <span className="text-sm font-semibold text-blue-600 tracking-widest leading-none">DISCOUNT CARDS</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activePage === item.id ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:block">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                  activePage === item.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg text-base font-semibold mt-4"
            >
              Get a Free Quote
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-600 p-1.5 rounded mr-2">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">AMERICAN DISCOUNT CARDS</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {MISSION_STATEMENT}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><button onClick={() => onNavigate('fundraising')} className="hover:text-blue-400">Fundraising Program</button></li>
                <li><button onClick={() => onNavigate('advertisers')} className="hover:text-blue-400">Advertise With Us</button></li>
                <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-blue-400">The Process</button></li>
                <li><button onClick={() => onNavigate('faq')} className="hover:text-blue-400">FAQs</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><button onClick={() => onNavigate('privacy')} className="hover:text-blue-400">Privacy Policy</button></li>
                <li><button onClick={() => onNavigate('terms')} className="hover:text-blue-400">Terms of Service</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-blue-500" />
                  <span>1-800-ADC-FUND</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-500" />
                  <span>support@americandiscountcards.com</span>
                </li>
                <li className="pt-2 italic">
                  {TAGLINES[0]}
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
            <p>&copy; {new Date().getFullYear()} American Discount Cards. All Rights Reserved. Nationwide USA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
