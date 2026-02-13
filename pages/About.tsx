
import React from 'react';
import { MISSION_STATEMENT, ELEVATOR_PITCH } from '../constants';
import { Globe, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Building Stronger Communities, One Card at a Time.</h1>
            <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "{MISSION_STATEMENT}"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                Founded with a mission to simplify fundraising for busy parents, teachers, and volunteers, American Discount Cards has grown from a local print shop service to a nationwide fundraising powerhouse.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe that every school project, every youth sports league, and every community initiative deserves to be fully funded. We've seen firsthand how traditional fundraisers like bake sales and car washes consume huge amounts of time for relatively small returns. 
              </p>
              <p className="text-slate-600 font-medium text-slate-900">
                {ELEVATOR_PITCH}
              </p>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="rounded-3xl shadow-2xl" alt="Our Team" />
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-10 rounded-3xl hidden sm:block">
                <span className="text-4xl font-black block">15+</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm border border-slate-100">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nationwide Reach</h3>
              <p className="text-slate-600 text-sm">We operate from coast to coast, supporting thousands of unique communities every year.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm border border-slate-100">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Community Focused</h3>
              <p className="text-slate-600 text-sm">Our cards are built on the backbone of local business relationships.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm border border-slate-100">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Zero Hassle</h3>
              <p className="text-slate-600 text-sm">We handle the recruitment, design, and production so you can focus on leading.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
