'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, CheckCircle2, Truck, ShieldCheck, Check, Sparkles, X } from 'lucide-react';

export default function OrderForm() {
  const [selectedPackage, setSelectedPackage] = useState(1); // 1 = 1 Jar, 2 = 2 Jars, 3 = 3 Jars
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
      subtitle: '১ টি জার - ৫০০ গ্রাম ট্রায়াল প্যাক',
      price: 1050,
      freeShipping: false,
      savings: '৩০০৳ ছাড়'
    },
    {
      id: 2,
      name: '২ জার (১ কেজি)',
      subtitle: '২ টি জার - ১ কেজি ফ্যামিলি প্যাক',
      price: 1990,
      freeShipping: true,
      savings: 'ফ্রি ডেলিভারি + ২১০৳ ছাড়',
      ribbon: 'সবচেয়ে জনপ্রিয়'
    },
    {
      id: 3,
      name: '৩ জার (১.৫ কেজি)',
      subtitle: '৩ টি জার - ১.৫ কেজি মেগা সেভার প্যাক',
      price: 2850,
      freeShipping: true,
      savings: 'ফ্রি ডেলিভারি + উপহার',
      ribbon: 'বেস্ট ডিল'
    }
  ];

  const currentPkg = packages.find((p) => p.id === selectedPackage) || packages[0];
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

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const orderId = 'SMD-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedOrderDetails({
        orderId,
        packageName: currentPkg.name,
        quantity,
        total: totalAmount,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        shippingArea: shippingArea === 'inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'
      });
      setOrderConfirmed(true);
    }, 1000);
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
            <span className="badge">অর্ডার ফর্ম</span>
            <p className="sub-note">
              পণ্য হাতে পেয়ে মূল্য পরিশোধ করুন। কোনো অগ্রিম পেমেন্ট নেই!
            </p>
          </div>

          {/* Package Selector */}
          <div className="packages-selection-grid">
            {packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <div
                  key={pkg.id}
                  className={`package-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedPackage(pkg.id);
                    setQuantity(1);
                  }}
                >
                  {pkg.ribbon && <div className="pkg-ribbon">{pkg.ribbon}</div>}

                  <div>
                    <div className="pkg-header">
                      <div className="radio-circle"></div>
                      <span className="pkg-title">{pkg.name}</span>
                    </div>
                    <p style={{ fontSize: '0.86rem', color: '#647562', marginBottom: '8px' }}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="pkg-price-row">
                    <span className="pkg-price">{pkg.price}৳</span>
                    <span className="pkg-savings">{pkg.savings}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form and Summary 2-Col Grid */}
          <div className="form-and-summary-grid">
            {/* Left: Billing Info */}
            <div className="form-card">
              <h3 className="card-title">
                <Truck size={20} color="#4f7447" />
                <span>আপনার ডেলিভারি তথ্য দিন</span>
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="customer-name">
                    আপনার পুরো নাম <span className="required">*</span>
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
                    আপনার মোবাইল নাম্বার <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="customer-phone"
                    name="phone"
                    placeholder="উদাঃ 017XXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="customer-address">
                    আপনার সম্পূর্ণ ঠিকানা (বাসা/রোড/থানা/জেলা) <span className="required">*</span>
                  </label>
                  <textarea
                    id="customer-address"
                    name="address"
                    placeholder="উদাঃ বাসা নং ১২, রোড নং ৫, সেক্টর ৪, উত্তরা, ঢাকা"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                {/* Shipping Area Selector */}
                <div className="shipping-selector">
                  <p className="shipping-title">ডেলিভারি এরিয়া নির্বাচন করুন:</p>
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
                        <span>ঢাকার ভিতরে (হোম ডেলিভারি)</span>
                      </div>
                      <span className="shipping-charge">
                        {currentPkg.freeShipping ? 'ফ্রি' : '৳৭০'}
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
                        <span>ঢাকার বাইরে (ক্যাশ অন ডেলিভারি)</span>
                      </div>
                      <span className="shipping-charge">
                        {currentPkg.freeShipping ? 'ফ্রি' : '৳১৩০'}
                      </span>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* Right: Order Summary */}
            <div className="summary-card">
              <h3 className="summary-title">অর্ডার সামারি</h3>

              <div className="selected-product-row">
                <div className="product-thumb">
                  <Image
                    src="/images/smd-jar.jpg"
                    alt="SMD Healthy Mix"
                    width={56}
                    height={56}
                  />
                </div>
                <div className="product-info">
                  <div className="name">SMD হেলদি মিক্স ({currentPkg.name})</div>
                  <div className="qty-ctrl">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="price">{subtotal}৳</div>
              </div>

              {/* Calculations */}
              <div className="calculation-breakdown">
                <div className="calc-row">
                  <span>পণ্যের মূল্য:</span>
                  <span>{subtotal}৳</span>
                </div>
                <div className="calc-row">
                  <span>ডেলিভারি চার্জ:</span>
                  <span>
                    {deliveryCharge === 0 ? (
                      <strong style={{ color: '#16a34a' }}>ফ্রি (০৳)</strong>
                    ) : (
                      `${deliveryCharge}৳`
                    )}
                  </span>
                </div>
                <div className="calc-row total-row">
                  <span>সর্বমোট প্রদেয়:</span>
                  <span className="total-amount">{totalAmount}৳</span>
                </div>
              </div>

              {/* Cash On Delivery Note */}
              <div className="payment-note-box">
                <ShieldCheck size={20} />
                <span>ক্যাশ অন ডেলিভারি: পণ্য হাতে পেয়ে টাকা পরিশোধ করুন</span>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="submit-order-btn"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <ShoppingBag size={22} />
                <span>
                  {isSubmitting ? 'অর্ডার প্রসেস হচ্ছে...' : `অর্ডার কনফার্ম করুন (৳${totalAmount})`}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {orderConfirmed && confirmedOrderDetails && (
        <div className="order-modal-backdrop" onClick={resetForm}>
          <div className="order-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-success-icon">
              <Check size={40} strokeWidth={3} />
            </div>

            <h3 className="modal-title">ধন্যবাদ! আপনার অর্ডার সফল হয়েছে</h3>
            <p className="modal-subtitle">
              আমাদের কাস্টমার প্রতিনিধি শীঘ্রই আপনাকে ফোন করে অর্ডারটি কনফার্ম করবেন।
            </p>

            <div className="order-invoice-details">
              <div className="detail-row">
                <span>অর্ডার আইডি:</span>
                <strong>#{confirmedOrderDetails.orderId}</strong>
              </div>
              <div className="detail-row">
                <span>প্যাকেজ:</span>
                <span>{confirmedOrderDetails.packageName} (x{confirmedOrderDetails.quantity})</span>
              </div>
              <div className="detail-row">
                <span>গ্রাহকের নাম:</span>
                <span>{confirmedOrderDetails.name}</span>
              </div>
              <div className="detail-row">
                <span>মোবাইল:</span>
                <span>{confirmedOrderDetails.phone}</span>
              </div>
              <div className="detail-row">
                <span>ঠিকানা:</span>
                <span>{confirmedOrderDetails.address} ({confirmedOrderDetails.shippingArea})</span>
              </div>
              <div className="detail-row">
                <span>সর্বমোট পরিশোধযোগ্য:</span>
                <strong style={{ color: '#ea5f0c', fontSize: '1.15rem' }}>
                  {confirmedOrderDetails.total}৳
                </strong>
              </div>
            </div>

            <button className="close-modal-btn" onClick={resetForm}>
              ঠিক আছে
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
