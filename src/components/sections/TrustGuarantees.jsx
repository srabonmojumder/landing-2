import { ShieldCheck, RotateCcw, Truck } from 'lucide-react';

export default function TrustGuarantees() {
  const guarantees = [
    {
      icon: <ShieldCheck size={22} />,
      text: 'পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধ করতে পারবেন।'
    },
    {
      icon: <RotateCcw size={22} />,
      text: 'পছন্দ না হলে বা কোনো সমস্যা থাকলে ১০০% ফেরত বা পরিবর্তন গ্যারান্টি।'
    },
    {
      icon: <Truck size={22} />,
      text: 'সারাদেশে দ্রুততম সময়ে ক্যাশ অন ডেলিভারিতে পণ্য পৌঁছানো হয়।'
    }
  ];

  return (
    <section className="trust-guarantees-section">
      <div className="container">
        <div className="trust-banner-card">
          <h2 className="banner-title">আস্থা রাখুন আস্বাদে থাকুন</h2>

          <div className="guarantee-points">
            {guarantees.map((item, index) => (
              <div className="point-item" key={index}>
                <div className="point-icon">{item.icon}</div>
                <div className="point-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
