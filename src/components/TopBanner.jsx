import { useState, useEffect } from 'react';
import './TopBanner.css';

const TopBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
        // Check if banner was previously closed
        const bannerClosed = sessionStorage.getItem('bannerClosed');
        if (bannerClosed === 'true') {
            setIsVisible(false);
            return;
        }

        // Load banner data from localStorage (managed by admin)
        const storedBanner = localStorage.getItem('topBannerData');
        if (storedBanner) {
            try {
                const data = JSON.parse(storedBanner);
                if (data.isActive) {
                    setBannerData(data);
                } else {
                    setIsVisible(false);
                }
            } catch (error) {
                console.error('Error loading banner:', error);
                setIsVisible(false);
            }
        } else {
            // Default banner if none configured
            setBannerData({
                isActive: true,
                backgroundColor: '#1e40af',
                textColor: '#ffffff',
                items: [
                    { icon: '📅', text: 'New batch starts 15 Jan' },
                    { icon: '▶', text: 'FREE demo on 11 Jan' },
                    { icon: '📱', text: 'Join WhatsApp', link: 'https://wa.me/919154255508' }
                ]
            });
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('bannerClosed', 'true');
    };

    if (!isVisible || !bannerData) return null;

    return (
        <div
            className="top-banner"
            style={{
                backgroundColor: bannerData.backgroundColor,
                color: bannerData.textColor
            }}
        >
            <div className="top-banner-content">
                {bannerData.items.map((item, index) => (
                    <span key={index}>
                        {item.link ? (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: bannerData.textColor }}
                            >
                                <span className="banner-icon">{item.icon}</span> {item.text}
                            </a>
                        ) : (
                            <>
                                <span className="banner-icon">{item.icon}</span> {item.text}
                            </>
                        )}
                        {index < bannerData.items.length - 1 && <span className="banner-divider">|</span>}
                    </span>
                ))}
            </div>
            <button
                className="banner-close-btn"
                onClick={handleClose}
                aria-label="Close banner"
            >
                ×
            </button>
        </div>
    );
};

export default TopBanner;
