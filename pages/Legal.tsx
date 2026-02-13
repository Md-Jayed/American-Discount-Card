
import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="py-20 lg:py-32 bg-slate-50 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-3xl shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>Last Updated: May 20, 2024</p>
              <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you request a quote, sign up for our program, or contact our customer support team. This may include your name, email, phone number, and organization details.</p>
              <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our fundraising services, communicate with you about your account, and coordinate with local business sponsors for your specific cards.</p>
              <h2 className="text-xl font-bold text-slate-900">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share information with local merchants only as necessary to facilitate the "sponsor" aspect of your community discount card.</p>
            </>
          ) : (
            <>
              <p>Last Updated: May 20, 2024</p>
              <h2 className="text-xl font-bold text-slate-900">1. Program Terms</h2>
              <p>By initiating a fundraiser with American Discount Cards, you agree to distribute the materials as outlined in your specific program agreement. All cards remain the property of the organization until sold.</p>
              <h2 className="text-xl font-bold text-slate-900">2. Payment & Risk</h2>
              <p>Qualified organizations with a "Zero Upfront" agreement are responsible for settling their manufacturing and setup invoice within 14 days of the fundraiser's completion, or as otherwise specified in their custom contract.</p>
              <h2 className="text-xl font-bold text-slate-900">3. Merchant Offers</h2>
              <p>Merchant offers are subject to change based on the specific terms set by the local business sponsor. American Discount Cards is not responsible for a business's closure or refusal to honor a stated discount if it falls outside the contract period.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Legal;
