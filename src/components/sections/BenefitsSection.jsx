'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  Brain, 
  Zap, 
  Sparkles, 
  Activity, 
  Check, 
  ArrowRight,
  Smile,
  Flame
} from 'lucide-react';

export default function BenefitsSection() {
  const [activeIngredient, setActiveIngredient] = useState('কাঠবাদাম - ভিটামিন ই, ম্যাগনেসিয়াম ও ব্রেন বুস্টিং পুষ্টি');
  const [isHovered, setIsHovered] = useState(false);

  const benefitsList = [
    {
      icon: <ShieldCheck size={20} />,
      title: 'রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি',
      desc: 'শরীরের প্রাকৃতিক ইমিউনিটি বহুগুণ বাড়িয়ে সাধারণ রোগবালাই ও ইনফেকশন থেকে রক্ষা করে।'
    },
    {
      icon: <Heart size={20} />,
      title: 'কোলেস্টেরল ও হার্ট সুস্থতা',
      desc: 'রক্তে ক্ষতিকর LDL কোলেস্টেরল কমিয়ে হার্ট অ্যাটাকের ঝুঁকি কমাতে সাহায্য করে।'
    },
    {
      icon: <Activity size={20} />,
      title: 'রক্তচাপ ও ডায়াবেটিস নিয়ন্ত্রণ',
      desc: 'লো-গ্লাইসেমিক উপাদান রক্তে সুগারের মাত্রা এবং উচ্চ রক্তচাপ স্বাভাবিক রাখতে সহায়তা করে।'
    },
    {
      icon: <Brain size={20} />,
      title: 'স্মৃতিশক্তি ও মস্তিষ্কের সতেজতা',
      desc: 'আখরোট ও সিডসের ওমেগা-৩ ফ্যাটি এসিড স্মৃতিশক্তি তীক্ষ্ণ করে ও মনোযোগ বৃদ্ধি করে।'
    },
    {
      icon: <Zap size={20} />,
      title: 'শারীরিক দুর্বলতা ও ক্লান্তি দূর',
      desc: 'ন্যাচারাল প্রোটিন ও এনার্জি শরীরে দ্রুত বল এনে দেয় এবং সারাদিন চনমনে রাখে।'
    },
    {
      icon: <Smile size={20} />,
      title: 'হজম শক্তি ও মেটাবলিজম বৃদ্ধি',
      desc: 'উচ্চমাত্রার ডায়েটরি ফাইবার হজমে সাহায্য করে এবং কোষ্ঠকাঠিন্যের সমস্যা দূর করে।'
    },
    {
      icon: <Sparkles size={20} />,
      title: 'ত্বক ও চুলের পুষ্টি',
      desc: 'ভিটামিন ই এবং অ্যান্টি-অক্সিডেন্ট ত্বকে তারুণ্য ধরে রাখে এবং চুল পড়া কমাতে সাহায্য করে।'
    },
    {
      icon: <Flame size={20} />,
      title: 'ওজন নিয়ন্ত্রণ ও ফিটনেস',
      desc: 'দীর্ঘক্ষণ পেট ভরা রেখে অযথা অতিরিক্ত খাওয়ার প্রবণতা কমায় ও ফিটনেস বজায় রাখে।'
    }
  ];

  const ingredients = [
    { name: 'কাঠবাদাম', color: '#8b5a2b', desc: 'ভিটামিন ই, ম্যাগনেসিয়াম ও ব্রেন বুস্টিং পুষ্টি' },
    { name: 'কাজু বাদাম', color: '#d4a373', desc: 'জিঙ্ক, আয়রন ও হার্ট ফ্রেন্ডলি মনোআনস্যাচুরেটেড ফ্যাট' },
    { name: 'পেস্তা বাদাম', color: '#606c38', desc: 'চোখের দৃষ্টিশক্তি ও শক্তিশালী অ্যান্টি-অক্সিডেন্ট' },
    { name: 'আখরোট', color: '#582f0e', desc: 'ওমেগা-৩ ও মস্তিষ্কের কোষ পুনরুজ্জীবিতকারী' },
    { name: 'চিয়া সিড', color: '#2b2d42', desc: 'প্রচুর ওমেগা-৩, ক্যালসিয়াম ও ডায়েটরি ফাইবার' },
    { name: 'কুমড়ার বীজ', color: '#283618', desc: 'ন্যাচারাল জিঙ্ক, ইমিউনিটি ও প্রস্টেট স্বাস্থ্য' },
    { name: 'সূর্যমুখী বীজ', color: '#dDA15e', desc: 'ভিটামিন ই, সেলেনিয়াম ও ত্বক সুরক্ষা' },
    { name: 'কিশমিশ ও খেজুর', color: '#7f4f24', desc: 'ন্যাচারাল গ্লুকোজ, আয়রন ও রক্তস্বল্পতা দূরকারী' }
  ];

  // Auto-cycle ingredients as the wheel rotates like a clock
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIngredient((prev) => {
        const currentIdx = ingredients.findIndex((item) => `${item.name} - ${item.desc}` === prev);
        const nextIdx = (currentIdx + 1) % ingredients.length;
        const nextItem = ingredients[nextIdx];
        return `${nextItem.name} - ${nextItem.desc}`;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, ingredients]);

  const scrollToOrder = (e) => {
    e.preventDefault();
    const target = document.getElementById('order-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrap">
            <span className="main-badge">উপকারিতা ও পুষ্টিগুণ</span>
          </div>
          <h2 className="section-heading">
            প্রতিদিন SMD হেলদি মিক্স খাওয়ার <span className="highlight-green">অসাধারণ ৮টি সুফল</span>
          </h2>
          <p className="subtext">
            সম্পূর্ণ প্রাকৃতিক উপাদান দিয়ে প্রস্তুত — শিশু থেকে বৃদ্ধ পরিবারের সকলের জন্য সমান উপকারী ও নিরাপদ
          </p>
        </div>

        {/* 2 Column Content */}
        <div className="benefits-grid">
          {/* Left Checklist Cards */}
          <div className="benefits-cards-list">
            {benefitsList.map((benefit, index) => (
              <div className="benefit-card-item" key={index}>
                <div className="card-icon-box">
                  {benefit.icon}
                </div>
                <div className="card-info">
                  <h4 className="benefit-item-title">{benefit.title}</h4>
                  <p className="benefit-item-desc">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Ingredients Wheel Card */}
          <div className="ingredients-wheel-card">
            <div className="wheel-header">
              <Sparkles size={18} className="icon-sparkle" />
              <span>২০টি উপাদানের পুষ্টি বিন্যাস</span>
            </div>

            <div
              className="wheel-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Top Clock Indicator Pointer */}
              <div className="clock-pointer" aria-hidden="true">
                <div className="pointer-arrow"></div>
              </div>

              <svg className="pie-svg-chart" viewBox="0 0 300 300">
                <defs>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.15" />
                  </filter>
                </defs>

                {/* 8 Slices Segment */}
                {ingredients.map((item, idx) => {
                  const total = 8;
                  const angle = 360 / total;
                  const startAngle = idx * angle - 90;
                  const endAngle = (idx + 1) * angle - 90;

                  const rad1 = (startAngle * Math.PI) / 180;
                  const rad2 = (endAngle * Math.PI) / 180;

                  const r = 140;
                  const cx = 150;
                  const cy = 150;

                  const x1 = cx + r * Math.cos(rad1);
                  const y1 = cy + r * Math.sin(rad1);
                  const x2 = cx + r * Math.cos(rad2);
                  const y2 = cy + r * Math.sin(rad2);

                  const pathData = `M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`;

                  // text position
                  const midRad = ((startAngle + endAngle) / 2 * Math.PI) / 180;
                  const textR = 102;
                  const tx = cx + textR * Math.cos(midRad);
                  const ty = cy + textR * Math.sin(midRad);

                  return (
                    <g
                      key={idx}
                      onClick={() => setActiveIngredient(`${item.name} - ${item.desc}`)}
                      onMouseEnter={() => setActiveIngredient(`${item.name} - ${item.desc}`)}
                      style={{ cursor: 'pointer' }}
                      className="slice-group"
                    >
                      <path
                        d={pathData}
                        fill={item.color}
                        stroke="#ffffff"
                        strokeWidth="3.5"
                        opacity={0.92}
                        className="pie-slice"
                      />
                      <text
                        x={tx}
                        y={ty}
                        fill="#ffffff"
                        fontSize="9.5"
                        fontWeight="700"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ pointerEvents: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
                      >
                        {item.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Center Circle Badge */}
              <div className="wheel-center-badge">
                <div className="clock-center-pin" aria-hidden="true"></div>
                <span className="brand-badge-top">SMD</span>
                <span className="brand-title">হেলদি মিক্স</span>
                <span className="sub">১০০% ন্যাচারাল</span>
              </div>
            </div>

            {/* Hover Tooltip / Detail */}
            <div className="ingredient-tooltip">
              <Sparkles size={16} color="#ea5f0c" />
              <span>{activeIngredient}</span>
            </div>

            {/* Micro badges under wheel */}
            <div className="wheel-tags-row">
              <span className="wheel-tag">✓ অর্গানিক বাদাম</span>
              <span className="wheel-tag">✓ প্রাকৃতিক সিডস</span>
              <span className="wheel-tag">✓ জিরো কোলেস্টেরল</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="cta-bottom-wrap">
          <a
            href="#order-form"
            onClick={scrollToOrder}
            className="btn-cta-orange pulsing"
          >
            <span>অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন</span>
            <ArrowRight size={20} />
          </a>
          <p className="cta-guarantee-note">
            🛡️ কোনো অগ্রিম টাকা ছাড়াই সারা দেশে ক্যাশ অন ডেলিভারিতে অর্ডার গ্রহণ করা হচ্ছে
          </p>
        </div>
      </div>
    </section>
  );
}
