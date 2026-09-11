import { PhoneCall } from 'lucide-react';

export default function HotlineBanner() {
  return (
    <section className="hotline-banner-section">
      <div className="container">
        <div className="hotline-card">
          <h3 className="hotline-heading">প্রয়োজনে সরাসরি কল করুন</h3>

          <div className="phone-btn-wrap">
            <a href="tel:01821982435" className="phone-action-btn">
              <PhoneCall size={24} className="phone-icon-pulse" />
              <span>01821-982435</span>
            </a>
          </div>

          <p className="hotline-subtext">
            সকাল ৯টা থেকে রাত ১১টা পর্যন্ত যেকোনো তথ্যের জন্য সরাসরি কল বা WhatsApp করতে পারেন
          </p>
        </div>
      </div>
    </section>
  );
}
