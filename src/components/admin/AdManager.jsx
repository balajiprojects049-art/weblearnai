import { useState, useEffect } from 'react';
import '../AdvertisementCards.css';

const AdManager = () => {
    const [ads, setAds] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
        badge: 'New Offer',
        style: 'style-1',
        features: '',
        isActive: true,
        startDate: new Date().toISOString().split('T')[0],
        endDate: ''
    });

    // Load ads from local storage
    useEffect(() => {
        const savedAds = JSON.parse(localStorage.getItem('activeAds') || '[]');
        setAds(savedAds);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAd = {
            ...formData,
            id: Date.now().toString(), // Simple ID generation
            createdAt: new Date().toISOString()
        };

        const updatedAds = [newAd, ...ads];
        setAds(updatedAds);
        localStorage.setItem('activeAds', JSON.stringify(updatedAds));

        // Reset form
        setFormData({
            id: '',
            title: '',
            description: '',
            price: '',
            badge: 'New Offer',
            style: 'style-1',
            features: '',
            isActive: true,
            startDate: new Date().toISOString().split('T')[0],
            endDate: ''
        });

        alert('Advertisement Created Successfully!');
    };

    const handleDelete = (id) => {
        if (!window.confirm('Delete this advertisement?')) return;
        const updatedAds = ads.filter(ad => ad.id !== id);
        setAds(updatedAds);
        localStorage.setItem('activeAds', JSON.stringify(updatedAds));
    };

    return (
        <div className="ad-manager-container" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
            <h2 style={{ marginBottom: '2rem' }}>📢 Advertisement Manager</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* --- CREATE FORM --- */}
                <div className="create-ad-form" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Create New Ad</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Summer Bootcamp Sale"
                                required
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="e.g. Get 50% off on all courses..."
                                required
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Features (One per line)</label>
                            <textarea
                                name="features"
                                value={formData.features}
                                onChange={handleChange}
                                placeholder="e.g. Live Sessions&#10;Global Certification&#10;Placement Support"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Price / Offer</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="e.g. ₹9,999"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Badge Text</label>
                                <input
                                    type="text"
                                    name="badge"
                                    value={formData.badge}
                                    onChange={handleChange}
                                    placeholder="e.g. LIMITED TIME"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>End Date (Optional)</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Card Style</label>
                            <select
                                name="style"
                                value={formData.style}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                            >
                                <option value="style-1">Style 1: Modern Glass (Blue)</option>
                                <option value="style-2">Style 2: Urgent (Red/Black)</option>
                                <option value="style-3">Style 3: Minimalist (Clean)</option>
                                <option value="style-4">Style 4: Playful (Gradient)</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                background: '#2563eb',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                        >
                            Publish Advertisement
                        </button>
                    </form>
                </div>

                {/* --- PREVIEW & LIST --- */}
                <div className="preview-section">
                    <h3 style={{ marginBottom: '1rem' }}>Active Advertisements</h3>

                    {ads.length === 0 ? (
                        <p style={{ color: '#64748b' }}>No active advertisements. Create one to see it here.</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxHeight: '600px', overflowY: 'auto' }}>
                            {ads.map(ad => (
                                <div key={ad.id} style={{ position: 'relative' }}>
                                    <div className={`ad-card ad-${ad.style}`}>
                                        <div className="ad-badge">{ad.badge}</div>
                                        <div className="ad-content">
                                            <h3>{ad.title}</h3>
                                            <p>{ad.description}</p>
                                            <div className="ad-price">{ad.price}</div>
                                            <div className="ad-footer">
                                                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Start: {ad.startDate}</span>
                                                <span className="ad-btn">Enroll Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleDelete(ad.id)}
                                        style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            right: '-10px',
                                            background: '#ef4444',
                                            color: 'white',
                                            border: 'none',
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                            zIndex: 10
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdManager;
