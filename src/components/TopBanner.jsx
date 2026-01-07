import { useState, useEffect } from 'react';
import './TopBanner.css';

const TopBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [bannerData, setBannerData] = useState({
        isActive: true,
        backgroundColor: '#1e40af',
        textColor: '#ffffff',
        items: [
            { icon: '📅', text: 'New batch starts 15 Jan' },
            { icon: '▶', text: 'FREE demo on 11 Jan' },
            { icon: '📱', text: 'Join WhatsApp', link: 'https://wa.me/919154255508' }
        ]
    });

    useEffect(() => {
        console.log('🎯 TopBanner component loaded');

        // Load banner data from localStorage (managed by admin)
        const storedBanner = localStorage.getItem('topBannerData');
        console.log('💾 Stored banner data:', storedBanner);

        if (storedBanner) {
            try {
                const data = JSON.parse(storedBanner);
                console.log('✅ Parsed banner data:', data);

                if (data.isActive) {
                    console.log('🟢 Banner is active, showing it');
                    setBannerData(data);
                } else {
                    console.log('🔴 Banner is inactive, not showing');
                    setIsVisible(false);
                }
            } catch (error) {
                console.error('❌ Error loading banner:', error);
                setIsVisible(false);
            }
        } else {
            console.log('🆕 No stored banner, using default');
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
        // Removed sessionStorage - banner will show again on next page load
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
                                className={item.text.toLowerCase().includes('whatsapp') ? 'whatsapp-button' : ''}
                                style={{ color: item.text.toLowerCase().includes('whatsapp') ? '#fff' : bannerData.textColor }}
                            >
                                <span className="banner-icon">{item.icon}</span> {item.text}
                            </a>
                        ) : (
                            <>
                                <span className="banner-icon">{item.icon}</span> {item.text}
                            </>
                        )}
                        {index < bannerData.items.length - 1 && !item.text.toLowerCase().includes('whatsapp') && <span className="banner-divider">|</span>}
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
