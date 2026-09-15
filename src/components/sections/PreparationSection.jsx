'use client';

import Image from 'next/image';
import { Utensils, Sparkles, CheckCircle2, Clock, Coffee, Heart } from 'lucide-react';

export default function PreparationSection() {
  const steps = [
    {
      num: '০১',
      title: 'দুধ বা পানিতে মেশান',
      desc: 'এক গ্লাস হালকা কুসুম গরম দুধ বা পানিতে ২-৩ চা চামচ SMD হেলদি মিক্স ভালো করে চামচ দিয়ে নেড়ে মিশিয়ে নিন।'
    },
    {
      num: '০২',
      title: '৫-১০ মিনিট ভিজিয়ে রাখুন',
      desc: 'মেশানোর পর উপাদানগুলো ৫ থেকে ১০ মিনিট ভিজিয়ে রাখুন যাতে চিয়া সিড ও বাদামের পুষ্টিগুণ সঠিকভাবে দুধে ছড়িয়ে পড়ে।'
    },
    {
      num: '০৩',
      title: 'নিয়মিত সেবন করুন',
      desc: 'প্রতিদিন সকালে নাস্তার পূর্বে অথবা রাতে ঘুমানোর ১ ঘণ্টা আগে সেবন করলে সর্বোচ্চ সুফল ও কর্মক্ষমতা পাওয়া যায়।'
    }
  ];

  return (
    <section className="preparation-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-white reveal-up">
          <span className="badge-white">সহজ প্রস্তুত প্রণালী</span>
          <h2 className="section-title">
            মাত্র ২ মিনিটে তৈরি করুন পুষ্টির সেরা ড্রিংক
          </h2>
          <p className="section-subtitle">
            কোনো ধরনের রান্নার ঝামেলা ছাড়াই প্রতিদিনের পুষ্টি নিশ্চিত করুন খুব সহজে
          </p>
        </div>

        <div className="prep-grid">
          {/* Left Bowl Visual */}
          <div className="bowl-visual-wrap reveal-left">
            <div className="bowl-card-outer">
              <div className="bowl-image-frame">
                <Image
                  src="/images/bowl-mix.jpg"
                  alt="Delicious healthy mix bowl preparation"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
              <div className="bowl-floating-tag float-subtle">
                <Heart size={16} fill="#ea5f0c" color="#ea5f0c" />
                <span>সুস্বাদু ও সহজে হজমযোগ্য</span>
              </div>
            </div>
          </div>

          {/* Right Instructions Card */}
          <div className="prep-instruction-card reveal-right delay-200">
            <div className="prep-card-header">
              <Utensils size={24} className="icon-utensils" />
              <h3 className="card-title-text">খাওয়ার সহজ নিয়মাবলী:</h3>
            </div>

            <div className="prep-steps-list">
              {steps.map((step, idx) => (
                <div className={`step-card stagger-card delay-${(idx + 1) * 150}`} key={idx}>
                  <div className="step-number-badge">{step.num}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Tip Card */}
            <div className="prep-tip-card reveal-up delay-400">
              <div className="tip-icon">💡</div>
              <div className="tip-content">
                <strong>পুষ্টিবিদদের বিশেষ পরামর্শ:</strong>
                <span> মিষ্টি স্বাদের জন্য চিনির বদলে খাঁটি মধু অথবা কলা কুচি যোগ করতে পারেন। এতে স্বাদ ও পুষ্টি বহুগুণ বাড়বে।</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
