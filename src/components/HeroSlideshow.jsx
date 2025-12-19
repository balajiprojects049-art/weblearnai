import { useState, useEffect } from 'react';
import './HeroSlideshow.css';
import slide1 from './../assets/hero-slide-1.png';

const HeroSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // You can add more images here
    const slides = [
        {
            image: slide1,
            alt: 'Data Engineering Training',
        },
        {
            // Placeholder - replace with actual image path
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            alt: 'Cloud Computing Training',
            text: 'Cloud Computing',
            icon: '☁️',
        },
        {
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            alt: 'Power BI & Analytics',
            text: 'Power BI & Analytics',
            icon: '📊',
        },
        {
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            alt: 'Cybersecurity Training',
            text: 'Cybersecurity',
            icon: '🔒',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="hero-slideshow">
            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        {slide.image ? (
                            <img src={slide.image} alt={slide.alt} className="slide-image" />
                        ) : (
                            <div
                                className="slide-gradient"
                                style={{ background: slide.gradient }}
                            >
                                <div className="slide-content">
                                    <div className="slide-icon">{slide.icon}</div>
                                    <h3>{slide.text}</h3>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="slideshow-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlideshow;
