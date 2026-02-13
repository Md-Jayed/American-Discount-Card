
// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}
