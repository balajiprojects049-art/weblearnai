import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdvertisementCards.css';

const AdvertisementDisplay = ({ location = 'home' }) => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        // Load active ads
        const loadedAds = JSON.parse(localStorage.getItem('activeAds') || '[]');
        setAds(loadedAds);
    }, []);

    if (ads.length === 0) return null;

    return (
        <section className="section bg-light" style={{ padding: '3rem 0', background: location === 'home' ? '#f8fafc' : 'white' }}>
            <div className="container">
                <div className="section-header text-center">
                    <div className="badge" style={{ background: '#ef4444', color: 'white' }}>Special Offers</div>
                    <h2>News & Announcements</h2>
                </div>

                <div className="ad-container">
                    {ads.map(ad => (
                        <div key={ad.id} className={`ad-card ad-${ad.style}`}>
                            <div className="ad-badge">{ad.badge}</div>
                            <div className="ad-content">
                                <h3>{ad.title}</h3>
                                <p>{ad.description}</p>
                                <div className="ad-price">{ad.price}</div>
                                <div className="ad-footer">
                                    <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Starting: {ad.startDate}</span>
                                    <Link to="/contact" className="ad-btn">
                                        Enroll Now →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvertisementDisplay;
