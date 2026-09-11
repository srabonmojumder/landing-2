'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, MessageCircle, Heart, Quote } from 'lucide-react';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const sliderRef = useRef(null);

  const reviewCards = [
    {
      id: 1,
      name: 'মোঃ তানভীর আহমেদ',
      location: 'মিরপুর, ঢাকা',
      rating: 5,
      date: '২ দিন আগে',
      feedbackText: 'আলহামদুলিল্লাহ, ১ মাস খাওয়ার পর শরীরের দুর্বলতা আর ক্লান্তি একদম দূর হয়ে গেছে। বাদাম ও সিডসগুলো সত্যিই প্রিমিয়াম ও ফ্রেশ!',
      highlight: 'শারীরিক দুর্বলতা দূর',
      badge: 'Verified Buyer',
      jarImg: '/images/smd-jar.jpg'
    },
    {
      id: 2,
      name: 'ফারহানা ইসলাম',
      location: 'ধানমন্ডি, ঢাকা',
      rating: 5,
      date: '৪ দিন আগে',
      feedbackText: 'বাচ্চার খাওয়ার রুচি এবং মেধার বিকাশে দারুণ ফল পেয়েছি। প্রতিদিন সকালে দুধের সাথে ১ চামচ মিশিয়ে দেই, ও খুব মজা করে খায়!',
      highlight: 'বাচ্চাদের মেধা ও পুষ্টি',
      badge: 'Family Pack Buyer',
      jarImg: '/images/smd-jar.jpg'
    },
    {
      id: 3,
      name: 'ইঞ্জিঃ মাহমুদুল হাসান',
      location: 'জিইসি মোড়, চট্টগ্রাম',
      rating: 5,
      date: '১ সপ্তাহ আগে',
      feedbackText: 'ক্যাশ অন ডেলিভারিতে কোনো অগ্রিম টাকা ছাড়াই পেয়েছি। প্যাকেজিং খুবই ভালো ছিল এবং প্রোডাক্ট ১০০% অরিজিনাল। ধন্যবাদ SMD!',
      highlight: 'ক্যাশ অন ডেলিভারি',
      badge: 'Verified Customer',
      jarImg: '/images/smd-jar.jpg'
    },
    {
      id: 4,
      name: 'ডাঃ রাশেদুল করিম',
      location: 'রাজশাহী সদর',
      rating: 5,
      date: '২ সপ্তাহ আগে',
      feedbackText: 'প্রাকৃতিক ওমেগা-৩ এবং অ্যান্টি-অক্সিডেন্টের চমৎকার কম্বিনেশন। পরিবারের সবার রোগ প্রতিরোধ ক্ষমতা বাড়াতে এটি একটি পারফেক্ট সুপারফুড।',
      highlight: 'ডাক্তারের পরামর্শ',
      badge: 'Health Expert',
      jarImg: '/images/smd-jar.jpg'
    },
    {
      id: 5,
      name: 'সালমা আক্তার',
      location: 'উপশহর, সিলেট',
      rating: 5,
      date: '৩ সপ্তাহ আগে',
      feedbackText: 'হজম শক্তি অনেক বৃদ্ধি পেয়েছে ও গ্যাস্ট্রিকের সমস্যা অনেক কমেছে। প্রোডাক্টের স্বাদও অসাধারণ। আবারো ২ জার অর্ডার করেছি!',
      highlight: 'হজম শক্তি উন্নত',
      badge: 'Repeat Buyer',
      jarImg: '/images/smd-jar.jpg'
    }
  ];

  const totalSlides = reviewCards.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  // Drag / Swipe handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (diff > 60) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -60) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="customer-reviews-section" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag-center">
            <Sparkles size={16} />
            <span>সন্তুষ্ট গ্রাহকদের অভিজ্ঞতা</span>
          </div>
          <h2 className="review-title">
            আমাদের কাস্টমাররা <span className="highlight-green">কী বলছেন?</span>
          </h2>
          
          <div className="rating-summary-card">
            <div className="rating-num">৪.৯</div>
            <div className="rating-details">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span className="count-text">৩,৫০০+ ভেরিফাইড গ্রাহকের রিভিউ ও রেটিং</span>
            </div>
          </div>
        </div>

        {/* Draggable Slider Wrapper */}
        <div className="slider-outer-container">
          {/* Previous Arrow Button */}
          <button
            className="slider-nav-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Draggable Carousel Track */}
          <div
            className="slider-draggable-viewport"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {reviewCards.map((rev) => (
                <div className="slider-item" key={rev.id}>
                  {/* Visual Customer Feedback Card Mockup */}
                  <div className="feedback-graphic-card">
                    {/* Top Branding Banner */}
                    <div className="card-brand-header">
                      <div className="smd-mini-logo">
                        <span className="smd-box">SMD</span>
                        <span className="smd-title">HEALTHY MIX</span>
                      </div>
                      <div className="cursive-tag">
                        <span>Customer Feedback</span>
                      </div>
                    </div>

                    {/* Card Body: Jar on Left + WhatsApp Review on Right */}
                    <div className="card-body-grid">
                      {/* Product Jar Frame */}
                      <div className="product-jar-frame">
                        <div className="jar-glow-bg"></div>
                        <Image
                          src={rev.jarImg}
                          alt="SMD Healthy Mix Customer Review"
                          width={140}
                          height={140}
                          priority
                        />
                        <span className="organic-seal">১০০% খাঁটি</span>
                      </div>

                      {/* Chat / Feedback Bubble */}
                      <div className="chat-bubble-frame">
                        <div className="chat-header">
                          <div className="user-info">
                            <span className="user-name">{rev.name}</span>
                            <span className="user-location">{rev.location}</span>
                          </div>
                          <span className="chat-time">{rev.date}</span>
                        </div>

                        <div className="stars-row">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                          ))}
                          <span className="verified-pill">
                            <CheckCircle2 size={13} /> {rev.badge}
                          </span>
                        </div>

                        <div className="chat-message">
                          <Quote size={18} className="quote-icon" />
                          <p className="message-text">"{rev.feedbackText}"</p>
                        </div>

                        <div className="feedback-tag-row">
                          <span className="highlight-pill">✓ {rev.highlight}</span>
                          <span className="offline-seal">★ Offline Verified Review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            className="slider-nav-btn next-btn"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="slider-pagination-dots">
          {reviewCards.map((_, idx) => (
            <button
              key={idx}
              className={`pagination-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Drag Hint on Mobile/Desktop */}
        <div className="drag-swipe-hint">
          <span>👈 ড্র্যাগ বা সোয়াইপ করে অন্যান্য রিভিউগুলো দেখুন 👉</span>
        </div>

        {/* Social Proof Counters */}
        <div className="social-proof-bar">
          <div className="proof-item">
            <strong>৩,২০০+</strong>
            <span>সফল ডেলিভারি</span>
          </div>
          <div className="proof-separator"></div>
          <div className="proof-item">
            <strong>৯৮%</strong>
            <span>রিপিট কাস্টমার রেট</span>
          </div>
          <div className="proof-separator"></div>
          <div className="proof-item">
            <strong>৬৪ জেলায়</strong>
            <span>ক্যাশ অন ডেলিভারি</span>
          </div>
        </div>
      </div>
    </section>
  );
}
