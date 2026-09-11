'use client';

import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function BenefitsSection() {
  const [activeIngredient, setActiveIngredient] = useState('কাঠবাদাম (Almond)');

  const benefitsList = [
    'কোলেস্টেরল এর মাত্রা নিয়ন্ত্রণ করে।',
    'রোগ প্রতিরোধ ক্ষমতা বহুগুণে বাড়ায়।',
    'উচ্চ রক্তচাপ ও হার্ট সুস্থ রাখতে সাহায্য করে।',
    'স্মৃতি শক্তি ও মস্তিষ্কের কার্যক্ষমতা সতেজ রাখে।',
    'এলার্জি ও শারীরিক দুর্বলতা দূর করে।',
    'মেধা বিকাশে ও মনোযোগ বাড়াতে সাহায্য করে।',
    'ক্যান্সার প্রতিরোধে অ্যান্টি-অক্সিডেন্ট হিসেবে কাজ করে।',
    'অতিরিক্ত ওজন কমাতে ও ফিটনেস ধরে রাখতে সহায়তা করে।'
  ];

  const ingredients = [
    { name: 'কাঠবাদাম', color: '#8b5a2b', desc: 'ভিটামিন ই ও স্বাস্থ্যকর ফ্যাটি অ্যাসিড সমৃদ্ধ' },
    { name: 'কাজু বাদাম', color: '#e8c39e', desc: 'ম্যাগনেশিয়াম ও হার্ট ফ্রেন্ডলি উপাদান' },
    { name: 'পেস্তা বাদাম', color: '#7ba05b', desc: 'চোখের দৃষ্টিশক্তি ও পুষ্টি বৃদ্ধি করে' },
    { name: 'আখরোট', color: '#6d4c41', desc: 'মস্তিষ্ক ও স্মৃতিশক্তি তীক্ষ্ণ করে' },
    { name: 'চিয়া সিড', color: '#374151', desc: 'ওমেগা-৩ ও ডায়েটরি ফাইবারের পাওয়ারহাউজ' },
    { name: 'কুমড়ার বীজ', color: '#4d7c0f', desc: 'জিঙ্ক ও রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে' },
    { name: 'সূর্যমুখী বীজ', color: '#d97706', desc: 'ভিটামিন ই ও ত্বক উজ্জ্বল রাখতে সাহায্য করে' },
    { name: 'কিশমিশ ও খেজুর', color: '#78350f', desc: 'ন্যাচারাল এনার্জি ও রক্তস্বল্পতা দূর করে' }
  ];

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
            <span className="main-badge">উপকারিতা</span>
          </div>
          <p className="subtext">
            প্রতিদিন ১-২ চামচ SMD হেলদি মিক্স আপনার শরীরকে রাখবে সম্পূর্ণ নীরোগ ও প্রাণবন্ত
          </p>
        </div>

        {/* 2 Column Content */}
        <div className="benefits-grid">
          {/* Left Checklist */}
          <div className="benefits-checklist">
            {benefitsList.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <div className="icon-bullet">
                  <Check size={16} strokeWidth={3} />
                </div>
                <div className="item-text">{benefit}</div>
              </div>
            ))}
          </div>

          {/* Right Ingredients Wheel Chart */}
          <div className="ingredients-wheel-card">
            <div className="wheel-container">
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
                  const textR = 100;
                  const tx = cx + textR * Math.cos(midRad);
                  const ty = cy + textR * Math.sin(midRad);

                  return (
                    <g
                      key={idx}
                      onClick={() => setActiveIngredient(`${item.name} - ${item.desc}`)}
                      onMouseEnter={() => setActiveIngredient(`${item.name} - ${item.desc}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <path
                        d={pathData}
                        fill={item.color}
                        stroke="#ffffff"
                        strokeWidth="3"
                        opacity={0.88}
                        style={{
                          transition: 'all 0.3s ease',
                          transformOrigin: '150px 150px'
                        }}
                      />
                      <text
                        x={tx}
                        y={ty}
                        fill="#ffffff"
                        fontSize="9"
                        fontWeight="700"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        style={{ pointerEvents: 'none', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                      >
                        {item.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Center Circle Badge */}
              <div className="wheel-center-badge">
                <span className="brand-title">SMD</span>
                <span className="brand-title" style={{ fontSize: '0.85rem' }}>হেলদি মিক্স</span>
                <span className="sub">২০টি পুষ্টিকর উপাদান</span>
              </div>
            </div>

            {/* Hover Tooltip / Detail */}
            <div className="ingredient-tooltip">
              <Sparkles size={16} color="#ea5f0c" />
              <span>{activeIngredient}</span>
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
            অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন
          </a>
        </div>
      </div>
    </section>
  );
}
