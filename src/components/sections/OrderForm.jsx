'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, CheckCircle2, Truck, ShieldCheck, Check, Sparkles, X, Phone, Lock, ArrowRight } from 'lucide-react';

export default function OrderForm() {
  const [selectedPackage, setSelectedPackage] = useState(2); // default to 2 jars (best value)
  const [quantity, setQuantity] = useState(1);
  const [shippingArea, setShippingArea] = useState('inside'); // 'inside' or 'outside'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderDetails, setConfirmedOrderDetails] = useState(null);

  const packages = [
    {
      id: 1,
      name: '১ জার (৫০০ গ্রাম)',
      subtitle: '১ টি জার — ট্রায়াল প্যাক',
      price: 1050,
      regularPrice: 1350,
      freeShipping: false,
      savings: '৩০০৳ ছাড়',
      ribbon: null
    },
    {
      id: 2,
      name: '২ জার (১ কেজি)',
      subtitle: '২ টি জার — ১ কেজি ফ্যামিলি প্যাক',
      price: 1990,
      regularPrice: 2700,
      freeShipping: true,
      savings: 'ফ্রি ডেলিভারি + ৭১০৳ ছাড়',
      ribbon: '🔥 সবচেয়ে জনপ্রিয় (Best Value)'
    },
    {
      id: 3,
      name: '৩ জার (১.৫ কেজি)',
      subtitle: '৩ টি জার — ১.৫ কেজি মেগা সেভার প্যাক',
      price: 2850,
      regularPrice: 4050,
      freeShipping: true,
      savings: 'ফ্রি ডেলিভারি + ১২০০৳ ছাড়',
      ribbon: '💎 মেগা সেভার প্যাক'
    }
  ];

  const currentPkg = packages.find((p) => p.id === selectedPackage) || packages[1];
  const itemPrice = currentPkg.price;
  const subtotal = itemPrice * quantity;
  
  // Delivery calculation
  const deliveryCharge = currentPkg.freeShipping ? 0 : (shippingArea === 'inside' ? 70 : 130);
  const totalAmount = subtotal + deliveryCharge;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      alert('অনুগ্রহ করে আপনার নাম, মোবাইল নাম্বার এবং সম্পূর্ণ ঠিকানা সঠিকভাবে পূরণ করুন।');
      return;
    }

    if (formData.phone.trim().length < 11) {
      alert('অনুগ্রহ করে ১১ ডিজিটের সঠিক মোবাইল নাম্বার প্রদান করুন।');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const orderId = 'SMD-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedOrderDetails({
        orderId,
        packageName: currentPkg.name,
        quantity,
        total: totalAmount,
        subtotal,
        deliveryCharge,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        shippingArea: shippingArea === 'inside' ? 'ঢাকার ভিতরে (হোম ডেলিভারি)' : 'ঢাকার বাইরে (ক্যাশ অন ডেলিভারি)'
      });
      setOrderConfirmed(true);
    }, 900);
  };

  const resetForm = () => {
    setOrderConfirmed(false);
    setFormData({ name: '', phone: '', address: '', note: '' });
  };

  return (
    <section className="order-form-section" id="order-form">
      <div className="container">
        <div className="order-form-container">
          {/* Section Header */}
          <div className="section-title-wrap">
            <div className="order-badge">
              <Sparkles size={16} />
              <span>সহজ ১-স্টেপ অর্ডার ফর্ম</span>
            </div>
            <h2 className="order-main-title">
              অর্ডার করতে নিচের তথ্যগুলো <span className="highlight-orange">সঠিকভাবে পূরণ করুন</span>
            </h2>
            <p className="sub-note">
              🛡️ কোনো অগ্রিম টাকা লাগবে না — পণ্য হাতে পেয়ে দেখে তারপর সম্পূর্ণ টাকা পরিশোধ করবেন!
            </p>
          </div>

          {/* Package Selection */}
          <div className="package-selector-header">
            <span className="step-tag">ধাপ ১</span>
            <h3 className="step-title">আপনার পছন্দের প্যাকেজ সিলেক্ট করুন:</h3>
          </div>

          <div className="packages-selection-grid" role="radiogroup" aria-label="প্যাকেজ নির্বাচন">
            {packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <label
                  key={pkg.id}
                  htmlFor={`pkg-radio-${pkg.id}`}
                  className={`package-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedPackage(pkg.id);
                    setQuantity(1);
                  }}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      setSelectedPackage(pkg.id);
                      setQuantity(1);
                    }
                  }}
                >
                  <input
                    type="radio"
                    id={`pkg-radio-${pkg.id}`}
                    name="selectedPackage"
                    value={pkg.id}
                    checked={isSelected}
                    onChange={() => {
                      setSelectedPackage(pkg.id);
                      setQuantity(1);
                    }}
                    className="sr-only-radio"
                  />

                  {pkg.ribbon && <div className="pkg-ribbon">{pkg.ribbon}</div>}

                  <div className="pkg-card-top">
                    <div className={`custom-radio ${isSelected ? 'radio-checked' : ''}`}>
                      <div className="radio-dot">
                        {isSelected && <Check size={12} strokeWidth={3.5} color="#ffffff" />}
                      </div>
                    </div>
                    <div className="pkg-title-wrap">
                      <div className="title-and-check">
                        <h4 className="pkg-title">{pkg.name}</h4>
                        {isSelected && <span className="selected-tag-badge">✓ সিলেক্টেড</span>}
                      </div>
                      <p className="pkg-sub">{pkg.subtitle}</p>
                    </div>
                  </div>

                  <div className="pkg-price-row">
                    <div className="price-stack">
                      <span className="pkg-price">{pkg.price}৳</span>
                      <span className="pkg-regular">রেগুলার: {pkg.regularPrice}৳</span>
                    </div>
                    <span className="pkg-savings-pill">{pkg.savings}</span>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Step 2: Information & Summary */}
          <div className="package-selector-header" style={{ marginTop: '36px' }}>
            <span className="step-tag">ধাপ ২</span>
            <h3 className="step-title">আপনার ডেলিভারির ঠিকানা ও সামারি:</h3>
          </div>

          <div className="form-and-summary-grid">
            {/* Left: Billing Info */}
            <div className="form-card">
              <div className="form-card-head">
                <Truck size={22} className="icon-green" />
                <h4 className="card-head-text">ডেলিভারি তথ্য</h4>
              </div>

              <form onSubmit={handleSubmit} className="actual-form">
                <div className="form-group">
                  <label htmlFor="customer-name">
                    আপনার সম্পূর্ণ নাম <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="customer-name"
                    name="name"
                    placeholder="উদাঃ মোঃ রফিকুল ইসলাম"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customer-phone">
                    আপনার সচল মোবাইল নাম্বার <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="customer-phone"
                    name="phone"
                    placeholder="উদাঃ 017XXXXXXXX বা 018XXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customer-address">
                    আপনার সম্পূর্ণ ঠিকানা (বাসা/রোড/এলাকা/থানা/জেলা) <span className="required">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    name="address"
                    rows="3"
                    placeholder="উদাঃ বাসা নং ১২, রোড নং ৫, ব্লক বি, মিরপুর ১০, ঢাকা"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* Shipping Area Selector */}
                <div className="shipping-selector">
                  <p className="shipping-title">আপনার ডেলিভারি এলাকা নির্বাচন করুন:</p>
                  <div className="shipping-options">
                    <label
                      className={`shipping-radio-label ${shippingArea === 'inside' ? 'active' : ''}`}
                      onClick={() => setShippingArea('inside')}
                    >
                      <div className="radio-left">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingArea === 'inside'}
                          onChange={() => setShippingArea('inside')}
                        />
                        <span className="area-name">ঢাকার ভিতরে (হোম ডেলিভারি)</span>
                      </div>
                      <span className="shipping-charge-pill">
                        {currentPkg.freeShipping ? 'ফ্রি ডেলিভারি' : '৳৭০'}
                      </span>
                    </label>

                    <label
                      className={`shipping-radio-label ${shippingArea === 'outside' ? 'active' : ''}`}
                      onClick={() => setShippingArea('outside')}
                    >
                      <div className="radio-left">
                        <input
                          type="radio"
                          name="shipping"
                          checked={shippingArea === 'outside'}
                          onChange={() => setShippingArea('outside')}
                        />
                        <span className="area-name">ঢাকার বাইরে (সারাদেশে হোম ডেলিভারি)</span>
                      </div>
                      <span className="shipping-charge-pill">
                        {currentPkg.freeShipping ? 'ফ্রি ডেলিভারি' : '৳১৩০'}
                      </span>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Order Summary */}
            <div className="summary-card">
              <h4 className="summary-title">অর্ডার সামারি</h4>

              <div className="selected-product-box">
                <div className="product-thumb">
                  <Image
                    src="/images/smd-jar.jpg"
                    alt="SMD Healthy Mix"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="product-info-col">
                  <h5 className="p-title">SMD হেলদি মিক্স</h5>
                  <span className="p-variant">{currentPkg.name}</span>
                  <div className="qty-ctrl-row">
                    <span className="qty-label">পরিমাণ:</span>
                    <div className="qty-ctrl-box">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="qty-val">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-price-col">
                  <strong>{subtotal}৳</strong>
                </div>
              </div>

              {/* Calculations Breakdown */}
              <div className="calculation-breakdown">
                <div className="calc-row">
                  <span>সাবটোটাল:</span>
                  <span>{subtotal}৳</span>
                </div>
                <div className="calc-row">
                  <span>ডেলিভারি চার্জ:</span>
                  <span>
                    {deliveryCharge === 0 ? (
                      <strong className="free-tag">ফ্রি (০৳)</strong>
                    ) : (
                      `${deliveryCharge}৳`
                    )}
                  </span>
                </div>
                <div className="calc-row total-row">
                  <span>সর্বমোট প্রদেয় মূল্য:</span>
                  <span className="total-amount">{totalAmount}৳</span>
                </div>
              </div>

              {/* Payment Method Badge */}
              <div className="payment-note-box">
                <div className="pay-icon-circle">
                  <ShieldCheck size={20} />
                </div>
                <div className="pay-text">
                  <strong>পেমেন্ট মেথড: ক্যাশ অন ডেলিভারি</strong>
                  <span>পণ্য হাতে পেয়ে টাকা পরিশোধ করার সম্পূর্ণ নিরাপদ সুবিধা।</span>
                </div>
              </div>

              {/* High Impact Submit Button */}
              <button
                type="button"
                className="submit-order-btn pulsing"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <Lock size={20} />
                <span>
                  {isSubmitting ? 'অর্ডার প্রসেস হচ্ছে...' : `অর্ডার কনফার্ম করুন — ৳${totalAmount}`}
                </span>
                <ArrowRight size={20} />
              </button>

              <div className="order-security-footer">
                <span>🔒 ১০০% নিরাপদ ও কনফার্মড ডেলিভারি</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {orderConfirmed && confirmedOrderDetails && (
        <div className="order-modal-backdrop" onClick={resetForm}>
          <div className="order-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-icon" onClick={resetForm} aria-label="Close">
              <X size={20} />
            </button>

            <div className="modal-success-icon">
              <Check size={44} strokeWidth={3} />
            </div>

            <h3 className="modal-title">অভিনন্দন! আপনার অর্ডার সফল হয়েছে</h3>
            <p className="modal-subtitle">
              আমাদের কাস্টমার সাপোর্ট টিম খুব শীঘ্রই আপনার নাম্বারে কল করে অর্ডারটি ভেরিফাই করবেন।
            </p>

            <div className="order-invoice-details">
              <div className="invoice-header">
                <span>অর্ডার ট্র্যাকিং কোড</span>
                <strong className="order-id">#{confirmedOrderDetails.orderId}</strong>
              </div>

              <div className="detail-row">
                <span>প্যাকেজ:</span>
                <strong>{confirmedOrderDetails.packageName} (x{confirmedOrderDetails.quantity})</strong>
              </div>
              <div className="detail-row">
                <span>নাম:</span>
                <span>{confirmedOrderDetails.name}</span>
              </div>
              <div className="detail-row">
                <span>মোবাইল:</span>
                <span>{confirmedOrderDetails.phone}</span>
              </div>
              <div className="detail-row">
                <span>ঠিকানা:</span>
                <span>{confirmedOrderDetails.address}</span>
              </div>
              <div className="detail-row">
                <span>ডেলিভারি চার্জ:</span>
                <span>{confirmedOrderDetails.deliveryCharge === 0 ? 'ফ্রি' : `${confirmedOrderDetails.deliveryCharge}৳`}</span>
              </div>
              <div className="detail-row total-highlight">
                <span>সর্বমোট ক্যাশ অন ডেলিভারি:</span>
                <strong className="final-total">
                  {confirmedOrderDetails.total}৳
                </strong>
              </div>
            </div>

            <div className="modal-actions-row">
              <a
                href={`https://wa.me/8801821982435?text=Hello%20SMD%20Healthy%20Mix,%20I%20have%20placed%20order%20%23${confirmedOrderDetails.orderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-wa-btn"
              >
                <span>WhatsApp-এ যোগাযোগ করুন</span>
              </a>
              <button className="close-modal-btn" onClick={resetForm}>
                ঠিক আছে, ধন্যবাদ
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
