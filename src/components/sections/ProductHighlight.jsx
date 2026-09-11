'use client';

import Image from 'next/image';
import { Sparkles, MessageCircle, CheckCircle2, Award, ShieldCheck, Zap, Heart, ArrowRight } from 'lucide-react';

export default function ProductHighlight() {
  const scrollToOrder = (e) => {
    e.preventDefault();
    const target = document.getElementById('order-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: <Sparkles size={16} />, title: '২০টি প্রিমিয়াম উপাদান', desc: 'আমন্ড, পেস্তা, কাজু, চিয়া সিডসহ মূল্যবান উপাদান' },
    { icon: <Zap size={16} />, title: 'ন্যাচারাল এনার্জি বুস্টার', desc: 'শারীরিক ক্লান্তি দূর করে শরীর রাখবে সতেজ ও প্রাণবন্ত' },
    { icon: <Heart size={16} />, title: 'হার্ট ও ডায়াবেটিস ফ্রেন্ডলি', desc: 'কোলেস্টেরল ও রক্তচাপ নিয়ন্ত্রণে অত্যন্ত কার্যকর' },
    { icon: <ShieldCheck size={16} />, title: '১০০% চিনি ও কেমিক্যাল মুক্ত', desc: 'সম্পূর্ণ প্রাকৃতিক, কোনো ক্ষতিকর প্রিজারভেটিভ নেই' },
  ];

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

            <h2 className="product-title">
              স্বাস্থ্য ও শক্তির প্রাকৃতিক ফর্মুলা <span className="highlight">SMD হেলদি মিক্স</span>
            </h2>

            <p className="product-description">
              ২০টি বিশ্বমানের পুষ্টিকর সুপারফুড, বাদাম ও সিডসের বৈজ্ঞানিক মিশ্রণে তৈরি। প্রতিদিন নিয়মিত খেলে আপনার শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়বে, পেশী মজবুত হবে, হাড়ের শক্তি বৃদ্ধি পাবে এবং শরীর থাকবে সারাদিন কর্মক্ষম।
            </p>

            {/* 4 Highlights Grid */}
            <div className="highlight-features-grid">
              {features.map((f, i) => (
                <div className="feature-chip" key={i}>
                  <div className="chip-icon">{f.icon}</div>
                  <div className="chip-content">
                    <strong className="chip-title">{f.title}</strong>
                    <span className="chip-desc">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div className="price-container-card">
              <div className="price-row-top">
                <span className="price-label">আজকের অফার মূল্য:</span>
                <span className="discount-tag">৩০০৳ সাশ্রয়</span>
              </div>
              <div className="price-row-main">
                <span className="current-price">
                  ১০৫০<span className="currency-symbol">৳</span>
                </span>
                <span className="old-price">১৩৫০৳</span>
                <span className="vat-text">(ক্যাশ অন ডেলিভারি সুবিধা)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="cta-container">
              <a
                href="#order-form"
                onClick={scrollToOrder}
                className="btn-cta-orange pulsing"
              >
                <span>অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/8801821982435?text=Hello%20SMD%20Healthy%20Mix%20I%20want%20to%20know%20more"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-outline"
              >
                <MessageCircle size={18} />
                <span>হোয়াটসঅ্যাপে পরামর্শ নিন</span>
              </a>
            </div>

            {/* Social Connect */}
            <div className="social-links">
              <span className="social-label">আমাদের সাথে যুক্ত থাকুন:</span>
              <div className="social-btns-wrap">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn fb"
                  aria-label="Facebook"
                  title="Facebook Page"
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
                  title="YouTube Channel"
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
                  title="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Product Jar */}
          <div className="product-image-card">
            <div className="image-aura-bg"></div>
            <div className="image-wrapper">
              <Image
                src="/images/smd-jar.jpg"
                alt="SMD Healthy Mix Premium Jar 500g"
                width={420}
                height={420}
                priority
              />

              <div className="floating-pill top-right">
                <CheckCircle2 size={18} className="icon-green" />
                <div>
                  <strong>২০টি উপাদান</strong>
                  <span>প্রিমিয়াম কোয়ালিটি</span>
                </div>
              </div>

              <div className="floating-pill bottom-left">
                <Award size={18} className="icon-orange" />
                <div>
                  <strong>১০০% খাঁটি গ্যারান্টি</strong>
                  <span>কোনো ভেজাল নেই</span>
                </div>
              </div>

              <div className="floating-pill bottom-right">
                <ShieldCheck size={18} className="icon-blue" />
                <div>
                  <strong>ক্যাশ অন ডেলিভারি</strong>
                  <span>পণ্য দেখে পেমেন্ট</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
