'use client';

import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-badge">SMD</span>
              <span className="logo-text">হেলদি মিক্স</span>
            </div>
            <p className="footer-desc">
              বাংলাদেশের প্রতিটি ঘরে প্রাকৃতিক ও বিশুদ্ধ পুষ্টি পৌঁছে দেওয়াই আমাদের লক্ষ্য। ১০০% খাঁটি বাদাম, সিডস ও সুপারফুডের বিশ্বস্ত নাম SMD Healthy Mix।
            </p>
          </div>

          <div className="footer-info-col">
            <h4 className="footer-col-title">জরুরি হেল্পলাইন</h4>
            <p className="phone-text">📞 হটলাইন: 01821-982435</p>
            <p className="time-text">⏰ সকাল ৯টা থেকে রাত ১১টা (প্রতিদিন)</p>
            <p className="support-badge">
              <ShieldCheck size={16} /> সারা দেশে ক্যাশ অন ডেলিভারি
            </p>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            <strong>সতর্কতা ও ডিসক্লেইমার:</strong> SMD হেলদি মিক্স একটি ১০০% প্রাকৃতিক পুষ্টিকর সুপার ফুড মিক্সচার। এটি কোনো ঔষধ নয়। কোনো জটিল বা দীর্ঘমেয়াদী শারীরিক সমস্যায় ডাক্তারের পরামর্শ অনুযায়ী চলুন।
          </p>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 <strong>SMD Healthy Mix</strong>. All Rights Reserved. Crafted for Bangladesh.
          </p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#refund">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
