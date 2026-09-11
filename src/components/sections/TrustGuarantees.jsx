'use client';

import { ShieldCheck, RotateCcw, Truck, Award, Check } from 'lucide-react';

export default function TrustGuarantees() {
  const guarantees = [
    {
      icon: <ShieldCheck size={28} className="trust-icon" />,
      title: 'পণ্য দেখে টাকা পরিশোধ',
      desc: 'কোনো অগ্রিম পেমেন্ট ছাড়া পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ নিশ্চিত হয়ে ডেলিভারিম্যানকে মূল্য পরিশোধ করুন।'
    },
    {
      icon: <RotateCcw size={28} className="trust-icon" />,
      title: '১০০% পরিবর্তন বা রিফান্ড গ্যারান্টি',
      desc: 'পণ্য পাওয়ার পর কোনো সমস্যা বা ত্রুটি থাকলে আমাদের সাথে যোগাযোগ করলেই সাথে সাথে পরিবর্তন বা সমাধান পাবেন।'
    },
    {
      icon: <Truck size={28} className="trust-icon" />,
      title: 'সারা দেশে দ্রুত হোম ডেলিভারি',
      desc: 'ঢাকা সিটিতে ২৪-৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ২-৩ দিনের মধ্যে অত্যন্ত যত্নের সাথে ডেলিভারি সম্পন্ন করা হয়।'
    }
  ];

  return (
    <section className="trust-guarantees-section">
      <div className="container">
        <div className="trust-banner-card">
          <div className="banner-top-badge">
            <Award size={16} />
            <span>আমাদের গ্রাহক প্রতিশ্রুতি</span>
          </div>

          <h2 className="banner-title">
            আস্থা রাখুন আমাদের সেবায় ও খাঁটি মানে
          </h2>
          <p className="banner-subtitle">
            গ্রাহকের সন্তুষ্টি ও সুস্বাস্থ্যই আমাদের সর্বোচ্চ অগ্রাধিকার
          </p>

          <div className="guarantee-grid">
            {guarantees.map((item, index) => (
              <div className="guarantee-card" key={index}>
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="guarantee-heading">{item.title}</h3>
                <p className="guarantee-text">{item.desc}</p>
                <div className="guarantee-check">
                  <Check size={14} /> <span>নিশ্চিত সেবা</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
