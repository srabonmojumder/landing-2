'use client';

import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="floating-action-buttons">
      <a
        href="https://wa.me/8801821982435?text=Hello%20SMD%20Healthy%20Mix%20I%20want%20to%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
      <a
        href="tel:01821982435"
        className="float-btn call-btn"
        aria-label="Call Now"
      >
        <Phone size={20} />
        <span>কল করুন</span>
      </a>
    </div>
  );
}
