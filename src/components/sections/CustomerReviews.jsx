'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'তানভীর আহমেদ',
      location: 'উত্তরা, ঢাকা',
      rating: 5,
      avatarText: 'তা',
      comment: 'আমি গত ১ মাস ধরে নিয়মিত খাচ্ছি। আগের মতো শরীরের দুর্বলতা বা ক্লান্তি ভাব আর নেই। স্বাদ এবং কোয়ালিটি সত্যিই ১০০% পিওর!',
      date: '২ দিন আগে'
    },
    {
      name: 'ফারহানা ইসলাম',
      location: 'ধানমন্ডি, ঢাকা',
      rating: 5,
      avatarText: 'ফা',
      comment: 'আমার বাচ্চার পড়াশোনায় মনোযোগ কম ছিল এবং ওজন বাড়ছিল না। সকালে দুধের সাথে ১ চামচ হেলদি মিক্স খাওয়ানোর পর আলহামদুলিল্লাহ দারুণ পরিবর্তন দেখছি।',
      date: '৫ দিন আগে'
    },
    {
      name: 'মাহমুদুল হাসান',
      location: 'জিইসি, চট্টগ্রাম',
      rating: 5,
      avatarText: 'মা',
      comment: 'প্যাকেজিং অসাধারণ ছিল এবং ২ দিনের মধ্যেই ডেলিভারি পেয়েছি। কোনো অগ্রিম টাকা ছাড়াই হাতে পেয়ে চেক করে পেমেন্ট করেছি। ধন্যবাদ SMD টিম!',
      date: '১ সপ্তাহ আগে'
    },
    {
      name: 'রাশেদুল করিম',
      location: 'রাজশাহী সদর',
      rating: 5,
      avatarText: 'রা',
      comment: 'বাদাম ও বীজের কোয়ালিটি অত্যন্ত প্রিমিয়াম। অন্যান্য ব্র্যান্ডের চেয়ে ফ্রেশ এবং ক্রাঞ্চি লেগেছে। পরিবারের সবার খুব পছন্দ হয়েছে।',
      date: '২ সপ্তাহ আগে'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="customer-reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="review-title">কাস্টমার রিভিউ</h2>
          <div className="rating-summary">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span>(৪.৯/৫ রেটিং | ৩,২০০+ সন্তুষ্ট গ্রাহক)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-carousel-wrapper">
          <div className="reviews-grid">
            {reviews.slice(0, 3).map((rev, idx) => (
              <div className="review-card" key={idx}>
                <div>
                  <div className="card-top">
                    <div className="avatar">{rev.avatarText}</div>
                    <div className="author-info">
                      <span className="author-name">{rev.name}</span>
                      <span className="author-location">{rev.location}</span>
                    </div>
                  </div>

                  <div className="rating-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  <p className="review-quote">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="card-footer">
                  <span className="verified-badge">
                    <CheckCircle2 size={14} /> ভেরিফাইড ক্রেতা
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button className="ctrl-btn" onClick={handlePrev} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="dots-indicator">
              <span className={`dot ${currentIndex === 0 ? 'active' : ''}`}></span>
              <span className={`dot ${currentIndex === 1 ? 'active' : ''}`}></span>
            </div>
            <button className="ctrl-btn" onClick={handleNext} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
