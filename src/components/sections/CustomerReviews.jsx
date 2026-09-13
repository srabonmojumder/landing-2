'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Sparkles, X, ZoomIn } from 'lucide-react';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const startXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isHorizontalSwipeRef = useRef(null);

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

  // Dynamic cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const total = reviews.length;
  const maxIndex = Math.max(0, total - cardsPerView);

  // Clamp currentIndex when screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Autoplay with pause on hover/interaction
  useEffect(() => {
    if (isDragging || isHovered || selectedImage) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isDragging, isHovered, selectedImage, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isHorizontalSwipeRef.current = null;
    setIsDragging(true);
    setHasMoved(false);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - startXRef.current;
    const diffY = currentY - touchStartYRef.current;

    if (isHorizontalSwipeRef.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalSwipeRef.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }

    if (isHorizontalSwipeRef.current) {
      setDragOffset(diffX);
      if (Math.abs(diffX) > 6) {
        setHasMoved(true);
      }
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (isHorizontalSwipeRef.current) {
      if (dragOffset < -45) {
        nextSlide();
      } else if (dragOffset > 45) {
        prevSlide();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => {
      setHasMoved(false);
    }, 100);
  };

  // Mouse drag handlers (window listeners during drag)
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    setHasMoved(false);
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      const diff = e.clientX - startXRef.current;
      setDragOffset(diff);
      if (Math.abs(diff) > 6) {
        setHasMoved(true);
      }
    };

    const handleMouseUp = (e) => {
      const diff = e.clientX - startXRef.current;
      if (diff < -45) {
        nextSlide();
      } else if (diff > 45) {
        prevSlide();
      }
      setIsDragging(false);
      setDragOffset(0);
      setTimeout(() => {
        setHasMoved(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, nextSlide, prevSlide]);

  // Click card to zoom (only if not dragged)
  const handleCardClick = (image) => {
    if (hasMoved) return;
    setSelectedImage(image);
  };

  // Lightbox keyboard and scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

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
        <div
          className="multi-card-slider-wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            type="button"
            className="slider-arrow-btn prev-arrow"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Draggable Viewport */}
          <div
            className="slider-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div
              className="slider-grid-track"
              style={{
                transform: `translateX(calc(-1 * ${currentIndex} * (100% + 16px) / ${cardsPerView} + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {reviews.map((rev, idx) => (
                <div
                  className="review-image-slide"
                  key={rev.id}
                  onClick={() => handleCardClick(rev.image)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(rev.image);
                    }
                  }}
                >
                  <div className="review-image-card">
                    <div className="image-frame">
                      <Image
                        src={rev.image}
                        alt={rev.title}
                        width={360}
                        height={360}
                        priority={idx < 3}
                        draggable={false}
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
            type="button"
            className="slider-arrow-btn next-arrow"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="slider-dots-row">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
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
