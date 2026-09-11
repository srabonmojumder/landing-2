'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, ThumbsUp, Sparkles } from 'lucide-react';

export default function CustomerReviews() {
  const [activeTab, setActiveTab] = useState('all');

  const reviews = [
    {
      name: 'মোঃ তানভীর আহমেদ',
      location: 'উত্তরা, ঢাকা',
      rating: 5,
      avatarBg: '#2D5A27',
      avatarText: 'তা',
      comment: 'আমি গত ১ মাস ধরে নিয়মিত খাচ্ছি। আগের মতো শরীরের দুর্বলতা বা ক্লান্ত ভাব আর একদম নেই। স্বাদ এবং কোয়ালিটি সত্যিই ১০০% পিওর! প্যাকেজিংও দারুণ ছিল।',
      date: '২ দিন আগে',
      tag: 'শক্তি ও ক্লান্তি দূর'
    },
    {
      name: 'ফারহানা ইসলাম',
      location: 'ধানমন্ডি, ঢাকা',
      rating: 5,
      avatarBg: '#d97706',
      avatarText: 'ফা',
      comment: 'আমার বাচ্চার পড়াশোনায় মনোযোগ কম ছিল এবং ওজন বাড়ছিল না। প্রতিদিন সকালে দুধের সাথে ১ চামচ হেলদি মিক্স খাওয়ানোর পর আলহামদুলিল্লাহ দারুণ রেজাল্ট পেয়েছি। ধন্যবাদ SMD টিমকে!',
      date: '৪ দিন আগে',
      tag: 'বাচ্চাদের মেধা বিকাশ'
    },
    {
      name: 'ইঞ্জিনিয়ার মাহমুদুল হাসান',
      location: 'জিইসি মোড়, চট্টগ্রাম',
      rating: 5,
      avatarBg: '#1e40af',
      avatarText: 'মা',
      comment: 'সবচেয়ে ভালো লেগেছে যে কোনো অগ্রিম টাকা ছাড়াই হোম ডেলিভারি পেয়েছি। পণ্য খুলে চেক করার পর ডেলিভারি ম্যানকে টাকা দিয়েছি। বাদামগুলো খুব ফ্রেশ ও ক্রাঞ্চি।',
      date: '১ সপ্তাহ আগে',
      tag: 'ক্যাশ অন ডেলিভারি'
    },
    {
      name: 'ডাঃ রাশেদুল করিম',
      location: 'উপশহর, রাজশাহী',
      rating: 5,
      avatarBg: '#0f766e',
      avatarText: 'রা',
      comment: 'উপাদানগুলোর রেশিও অত্যন্ত চমৎকার। প্রতিদিনের প্রয়োজনীয় অ্যান্টি-অক্সিডেন্ট ও ওমেগা-৩ এর চাহিদা মেটাতে এটি একটি পারফেক্ট প্রাকৃতিক সুপার ফুড।',
      date: '২ সপ্তাহ আগে',
      tag: 'ডাক্তারের পছন্দ'
    },
    {
      name: 'সালমা বেগম',
      location: 'আম্বরখানা, সিলেট',
      rating: 5,
      avatarBg: '#b91c1c',
      avatarText: 'সা',
      comment: 'আমার গ্যাস্ট্রিক ও হজমে সমস্যা ছিল। এটি খাওয়ার পর থেকে হজম শক্তি অনেক ভালো হয়েছে এবং পেট হালকা লাগে। আবারও ২ জার অর্ডার করলাম!',
      date: '২ সপ্তাহ আগে',
      tag: 'হজম শক্তি উন্নত'
    },
    {
      name: 'আরিফুল ইসলাম',
      location: 'সোনাডাঙ্গা, খুলনা',
      rating: 5,
      avatarBg: '#7c3aed',
      avatarText: 'আ',
      comment: 'প্রোডাক্টের কোয়ালিটি আসলেই প্রিমিয়াম। অন্যান্য সাধারণ মিক্সের তুলনায় এটাতে আসল ড্রাই ফ্রুটস ও সিডসের পরিমাণ অনেক বেশি। রেকমেন্ডেড!',
      date: '৩ সপ্তাহ আগে',
      tag: '১০০% প্রিমিয়াম'
    }
  ];

  return (
    <section className="customer-reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag-center">
            <Sparkles size={16} />
            <span>সন্তুষ্ট গ্রাহকদের মতামত</span>
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
              <span className="count-text">৩,৫০০+ গ্রাহকের সন্তুষ্টি ও রিভিউয়ের ভিত্তিতে</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid-modern">
          {reviews.map((rev, idx) => (
            <div className="modern-review-card" key={idx}>
              <div className="review-top-bar">
                <div className="reviewer-profile">
                  <div className="reviewer-avatar" style={{ backgroundColor: rev.avatarBg }}>
                    {rev.avatarText}
                  </div>
                  <div className="reviewer-meta">
                    <h4 className="reviewer-name">{rev.name}</h4>
                    <span className="reviewer-loc">{rev.location}</span>
                  </div>
                </div>
                <span className="review-tag-badge">{rev.tag}</span>
              </div>

              <div className="review-stars-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
                <span className="verified-buyer-pill">
                  <CheckCircle2 size={13} /> ভেরিফাইড ক্রেতা
                </span>
              </div>

              <p className="review-text-quote">
                "{rev.comment}"
              </p>

              <div className="review-footer-row">
                <span className="review-date">{rev.date}</span>
                <span className="review-helpful">
                  <ThumbsUp size={13} /> সন্তুষ্ট ক্রেতা
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
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
