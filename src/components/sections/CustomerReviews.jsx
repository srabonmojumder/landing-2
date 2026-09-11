'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Sparkles, X, ZoomIn } from 'lucide-react';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const reviews = [
    {
      id: 1,
      image: '/images/review-1.jpg',
      title: 'তানভীর আহমেদ - ঢাকা',
      badge: 'Verified Buyer (৫/৫)'
    },
    {
      id: 2,
      image: '/images/review-2.jpg',
      title: 'ফারহানা ইসলাম - ধানমন্ডি',
      badge: 'Family Pack Review (৫/৫)'
    },
    {
      id: 3,
      image: '/images/review-3.jpg',
      title: 'ইঞ্জিঃ মাহমুদুল হাসান - চট্টগ্রাম',
      badge: 'Cash on Delivery (৫/৫)'
    },
    {
      id: 4,
      image: '/images/review-4.jpg',
      title: 'ডাঃ রাশেদুল করিম - রাজশাহী',
      badge: 'Expert Review (৫/৫)'
    },
    {
      id: 5,
      image: '/images/review-5.jpg',
      title: 'সালমা আক্তার - সিলেট',
      badge: 'Repeat Customer (৫/৫)'
    }
  ];

  const total = reviews.length;

  // Next / Prev 1 slide at a time
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Mouse & Touch Drag Handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    if (diff > 45) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -45) {
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
    if (diff > 50) {
      prevSlide();
      setIsDragging(false);
    } else if (diff < -50) {
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
            <span>১০০% খাঁটি কাস্টমার রিভিউ</span>
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
              <span className="count-text">৩,৫০০+ সন্তুষ্ট গ্রাহকের বাস্তব রিভিউ ও মতামত</span>
            </div>
          </div>
        </div>

        {/* 3-Card Carousel Container */}
        <div className="multi-card-slider-wrapper">
          {/* Navigation Arrows */}
          <button
            className="slider-arrow-btn prev-arrow"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Draggable Viewport */}
          <div
            className="slider-viewport"
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
              className="slider-grid-track"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / 3 + 6.66px)))`,
                transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {reviews.map((rev, idx) => (
                <div
                  className="review-image-slide"
                  key={rev.id}
                  onClick={() => setSelectedImage(rev.image)}
                >
                  <div className="review-image-card">
                    <div className="image-frame">
                      <Image
                        src={rev.image}
                        alt={rev.title}
                        width={360}
                        height={360}
                        priority={idx < 3}
                      />
                      <div className="zoom-hint">
                        <ZoomIn size={20} />
                        <span>বড় করে দেখুন</span>
                      </div>
                    </div>
                    <div className="review-card-footer">
                      <div className="stars-footer">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                        ))}
                      </div>
                      <span className="verified-seal">{rev.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-arrow-btn next-arrow"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="slider-dots-row">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`dot-pill ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Swipe Hint */}
        <p className="slider-swipe-hint">
          👈 ড্র্যাগ বা অ্যারো দিয়ে এক এক করে সবগুলো রিভিউ দেখুন 👉
        </p>

        {/* Social Proof Counter Banner */}
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

      {/* Full Size Image Preview Modal */}
      {selectedImage && (
        <div className="image-lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="image-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <div className="lightbox-image-wrap">
              <Image
                src={selectedImage}
                alt="Customer Review Full Size"
                width={720}
                height={720}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
