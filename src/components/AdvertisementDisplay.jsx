import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdvertisementCards.css';

const AdvertisementDisplay = () => {
    const [activeAd, setActiveAd] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Load active ads
        const loadedAds = JSON.parse(localStorage.getItem('activeAds') || '[]');

        // If there are ads, pick the first one (most recent) and show popup
        if (loadedAds.length > 0) {
            setActiveAd(loadedAds[0]);
            // Small delay for better UX (so it doesn't pop instantly on load)
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!isOpen || !activeAd) return null;

    return (
        <div className="ad-popup-overlay">
            <div className={`ad-popup-card ad-popup-${activeAd.style}`}>
                <button className="ad-popup-close" onClick={() => setIsOpen(false)}>×</button>

                {/* Decorative Shapes */}
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>

                {/* Content */}
                <div className="ad-popup-badge">{activeAd.badge}</div>
                <h3 className="ad-popup-title">{activeAd.title}</h3>
                <p className="ad-popup-description">{activeAd.description}</p>
                <div className="ad-popup-price">{activeAd.price}</div>

                <Link to="/contact" className="ad-popup-btn" onClick={() => setIsOpen(false)}>
                    Grab Offer ➔
                </Link>
            </div>
        </div>
    );
};

export default AdvertisementDisplay;
