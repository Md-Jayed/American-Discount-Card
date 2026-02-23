
import React from 'react';
import { CheckCircle, Zap, ShieldCheck, Globe, Users, TrendingUp } from 'lucide-react';

export const MISSION_STATEMENT = "Empowering American communities by bridging the gap between local businesses and the organizations that serve them through high-value, high-impact fundraising solutions.";

export const ELEVATOR_PITCH = "American Discount Cards helps nonprofits raise thousands of dollars with premium, merchant-packed discount cards that offer real value to your supporters and zero risk to your organization.";

export const TAGLINES = [
  "Community Focused. Profit Driven.",
  "The Gold Standard of School Fundraising.",
  "Real Savings. Real Impact. Real Fast."
];

export const TECH_SPECS = {
  size: "85.5mm x 54mm",
  thickness: "0.76mm (30mil)",
  material: "Premium PVC Plastic",
  finish: "Laminated Coated Overlay",
  printing: "High-Definition Offset / Full Color Digital"
};

export const PROJECTS = [
  {
    name: "Cougar Football",
    category: "Athletic Schedule Card",
    value: "$20 Donation",
    image: "https://iili.io/qKYH7Rt.md.png",
    features: ["Full Season Schedule", "Premier Sponsor Placement", "30mil PVC Quality"]
  },
  {
    name: "Student Scholarship",
    category: "Benefit Card",
    value: "$25 Card",
    image: "https://iili.io/qKY3OvV.md.png",
    features: ["QR Code Re-purchase", "Barcode Tracking", "Nationwide Merchant Grid"]
  },
  {
    name: "ESC Community Savings",
    category: "Community Card",
    value: "$15 Card",
    image: "https://iili.io/qKY3eyB.md.png",
    features: ["25+ Local Merchants", "Laminated Finish", "High-Visibility Logo"]
  }
];

export const FEATURES = [
  {
    title: "Zero Upfront Cost",
    description: "Start your fundraiser without spending a dime. We provide the cards, and you only pay after the campaign ends.",
    icon: Zap
  },
  {
    title: "High Profit Margins",
    description: "Keep up to 50-70% of every card sold. Our cards are priced to sell fast while maximizing your bottom line.",
    icon: TrendingUp
  },
  {
    title: "Nationwide Support",
    description: "Operating in all 50 states. We handle the merchant recruitment and card design for your local area.",
    icon: Globe
  },
  {
    title: "Custom Merchant Mix",
    description: "Every card is customized with local businesses your supporters actually visit daily.",
    icon: Users
  }
];

export const FAQS = [
  {
    question: "Do you offer nationwide coverage?",
    answer: "Yes! American Discount Cards operates in all 50 states. We have a dedicated team that works remotely and on the ground to secure local merchants for any community, no matter how small or large."
  },
  {
    question: "What is the typical fundraiser timeline?",
    answer: "Most organizations run their active selling period for 2–4 weeks. From initial setup to having cards in your hands, the process usually takes 4–6 weeks depending on merchant recruitment speed."
  },
  {
    question: "How do you find sponsors for our card?",
    answer: "Our professional merchant acquisition team handles the 'ask.' We contact local restaurants, retailers, and service providers to secure high-value discounts. You can also suggest your favorite local spots!"
  },
  {
    question: "Can we reorder more cards if we sell out?",
    answer: "Absolutely. We keep your design on file and can rush a reorder to you within 5–7 business days so you don't lose momentum."
  },
  {
    question: "Is there exclusivity for our organization?",
    answer: "We offer regional exclusivity for high-performing partners. During your active fundraiser, we ensure no other competing organization in your immediate district is selling the exact same merchant mix."
  },
  {
    question: "Do the cards include QR codes for tracking?",
    answer: "Yes, our modern cards include optional QR codes. These can be used for supporters to view current offers, for merchants to track redemption, or for simple re-purchasing."
  }
];
