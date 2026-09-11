'use client';

import { Sparkles, Phone, Truck, ShieldCheck } from 'lucide-react';

export default function TopNoticeBar() {
  return (
    <div className="top-notice-bar">
      <div className="container">
        <div className="notice-inner">
          <div className="notice-item highlight">
            <Sparkles size={15} className="pulse-icon" />
            <span>🔥 আজকের বিশেষ অফার: <strong>৩০০৳ ছাড়</strong> + ২ জারে <strong>ফ্রি হোম ডেলিভারি!</strong></span>
          </div>
          <div className="notice-badges">
            <span className="badge-pill">
              <Truck size={14} /> সারাদেশে ক্যাশ অন ডেলিভারি
            </span>
            <span className="badge-pill">
              <ShieldCheck size={14} /> ১০০% অরিজিনাল গ্যারান্টি
            </span>
            <a href="tel:01821982435" className="badge-pill hotline-link">
              <Phone size={13} /> হেল্পলাইন: 01821-982435
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
