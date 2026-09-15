'use client';

import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';

export default function FloatingActions() {
  const scrollToOrder = (e) => {
    e.preventDefault();
    const target = document.getElementById('order-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Desktop / Tablet side buttons */}
      <div className="floating-side-actions">
        <a
          href="https://wa.me/8801821982435?text=Hello%20SMD%20Healthy%20Mix%20I%20want%20to%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="float-circle whatsapp-circle"
          aria-label="WhatsApp Support"
          title="WhatsApp-এ মেসেজ দিন"
        >
          <MessageCircle size={26} />
          <span className="tooltip-text">WhatsApp চ্যাট</span>
        </a>
        <a
          href="tel:01821982435"
          className="float-circle call-circle"
          aria-label="Direct Call"
          title="সরাসরি কল করুন"
        >
          <Phone size={24} />
          <span className="tooltip-text">কল করুন</span>
        </a>
      </div>

      {/* Sticky Bottom Bar for Mobile Conversion */}
      <div className="mobile-sticky-order-bar">
        <a
          href="#order-form"
          onClick={scrollToOrder}
          className="sticky-order-btn pulsing glow-pulse"
        >
          <ShoppingBag size={20} />
          <span>এখনই অর্ডার করুন</span>
        </a>
        <a
          href="tel:01821982435"
          className="sticky-call-btn"
          aria-label="Call Now"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://wa.me/8801821982435?text=Hello%20SMD%20Healthy%20Mix%20I%20want%20to%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-wa-btn"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </>
  );
}
