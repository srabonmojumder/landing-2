'use client';

import Image from 'next/image';
import { Sparkles, MessageCircle, CheckCircle2, Award } from 'lucide-react';

export default function ProductHighlight() {
  const scrollToOrder = (e) => {
    e.preventDefault();
    const target = document.getElementById('order-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="product-highlight-section">
      <div className="container">
        <div className="highlight-grid">
          {/* Left Details */}
          <div className="product-details">
            <div className="badge-tag">
              <Sparkles size={16} />
              <span>১০০% প্রাকৃতিক ও খাঁটি সুপার ফুড</span>
            </div>

            <h2 className="product-title">SMD হেলদি মিক্স</h2>

            <p className="product-description">
              ২০ টি প্রিমিয়াম পুষ্টিকর উপাদান দিয়ে তৈরি আমাদের এই প্রোটিন সমৃদ্ধ হেলদি মিক্স।
              প্রতিদিন নিয়মিত খেলে আপনার শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়বে, শারীরিক দুর্বলতা
              দূর হবে এবং শরীর সারাদিন চনমনে ও সতেজ থাকবে।
            </p>

            <div className="price-block">
              <span className="current-price">
                ১০৫০<span className="currency-symbol">৳</span>
              </span>
              <span className="old-price">১৩৫০৳</span>
              <span className="discount-tag">৩০০৳ ছাড়</span>
            </div>

            <div className="cta-container">
              <a
                href="#order-form"
                onClick={scrollToOrder}
                className="btn-cta-orange"
              >
                অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন
              </a>
            </div>

            <div className="social-links">
              <span className="social-label">আমাদের সাথে যুক্ত থাকুন:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn fb"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn yt"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/8801821982435"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn wa"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Right Product Jar */}
          <div className="product-image-card">
            <div className="image-wrapper">
              <Image
                src="/images/smd-jar.jpg"
                alt="SMD Healthy Mix Jar"
                width={400}
                height={400}
                priority
              />

              <div className="floating-pill top-right">
                <CheckCircle2 size={18} color="#4f7447" />
                <span>২০টি উপাদান সমৃদ্ধ</span>
              </div>

              <div className="floating-pill bottom-left">
                <Award size={18} color="#ea5f0c" />
                <span>১০০% ন্যাচারাল গ্যারান্টি</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
