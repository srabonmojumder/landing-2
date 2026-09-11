'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X, ShieldCheck } from 'lucide-react';

export default function HeroVideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToOrder = (e) => {
    e.preventDefault();
    const target = document.getElementById('order-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero-video-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              প্রোটিন সমৃদ্ধ সুপার ফুড SMD হেলদি মিক্স
            </h1>

            <div className="cta-wrapper">
              <a
                href="#order-form"
                onClick={scrollToOrder}
                className="btn-cta-orange pulsing"
              >
                অগ্রিম পেমেন্ট ছাড়াই অর্ডার করুন
              </a>
            </div>

            <div className="video-card-container">
              <div
                className="video-thumbnail-wrapper"
                onClick={() => setIsVideoOpen(true)}
                title="ভিডিও দেখতে ক্লিক করুন"
              >
                <Image
                  src="/images/video-presenter.jpg"
                  alt="SMD Healthy Mix Presentation Video"
                  width={760}
                  height={428}
                  priority
                />

                {/* Top overlay header */}
                <div className="video-overlay-bar">
                  <div className="brand-badge">
                    <ShieldCheck size={16} />
                    <span>SMD HEALTHY MIX</span>
                  </div>
                  <span>SMD Healthy Mix Official Video</span>
                </div>

                {/* Center Play Pulse */}
                <div className="play-btn-pulse">
                  <Play size={32} fill="#ffffff" />
                </div>

                {/* Bottom Bar Info */}
                <div className="video-bottom-bar">
                  <span>▶ Watch Video (2:45 min)</span>
                  <span>100% Organic & Halal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Torn Wave Divider */}
        <div className="torn-bottom-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal-backdrop" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="video-embed-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="SMD Healthy Mix Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
