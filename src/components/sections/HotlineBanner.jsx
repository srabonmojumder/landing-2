'use client';

import { PhoneCall, MessageCircle, Clock, Headphones } from 'lucide-react';

export default function HotlineBanner() {
  return (
    <section className="hotline-banner-section">
      <div className="container">
        <div className="hotline-card">
          <div className="hotline-left">
            <div className="hotline-badge">
              <Headphones size={16} />
              <span>২৪/৭ কাস্টমার হেল্পলাইন</span>
            </div>
            <h3 className="hotline-heading">
              অর্ডার করতে সমস্যা হচ্ছে বা কোনো প্রশ্ন আছে?
            </h3>
            <p className="hotline-subtext">
              আমাদের পুষ্টি বিশেষজ্ঞ ও কাস্টমার সাপোর্ট টিমের সাথে সরাসরি ফোনে বা হোয়াটসঅ্যাপে কথা বলুন
            </p>
          </div>

          <div className="hotline-actions">
            <a href="tel:01821982435" className="phone-action-btn pulsing">
              <PhoneCall size={22} className="phone-icon-pulse" />
              <div className="btn-text">
                <span className="small-label">সরাসরি কল করুন</span>
                <span className="number">01821-982435</span>
              </div>
            </a>

            <a
              href="https://wa.me/8801821982435?text=Hello%20SMD%20Healthy%20Mix%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-action-btn"
            >
              <MessageCircle size={22} />
              <div className="btn-text">
                <span className="small-label">WhatsApp মেসেজ</span>
                <span className="number">01821-982435</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
