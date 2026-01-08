import { useState, useEffect } from 'react';
import './BannerManager.css';

const BannerManager = () => {
    const [bannerData, setBannerData] = useState({
        isActive: true,
        backgroundColor: '#1e40af',
        textColor: '#ffffff',
        items: [
            { icon: '📅', text: 'New batch starts 15 Jan', link: '' },
            { icon: '▶', text: 'FREE demo on 11 Jan', link: '' },
            { icon: '📱', text: 'Join WhatsApp', link: 'https://wa.me/919154255508' }
        ]
    });

    const [previewKey, setPreviewKey] = useState(0);
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch banner data from API
        const fetchBannerData = async () => {
            try {
                const response = await fetch('/api/banner');
                if (response.ok) {
                    const data = await response.json();
                    setBannerData(data);
                }
            } catch (error) {
                console.error('Error loading banner:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBannerData();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            const response = await fetch('/api/banner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bannerData),
            });

            if (response.ok) {
                alert('✅ Banner saved successfully! Refresh the site to see changes.');
            } else {
                alert('❌ Failed to save banner. Please try again.');
            }
        } catch (error) {
            console.error('Error saving banner:', error);
            alert('❌ Error saving banner. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const handleItemChange = (index, field, value) => {
        const newItems = [...bannerData.items];
        newItems[index][field] = value;
        setBannerData({ ...bannerData, items: newItems });
    };

    const addItem = () => {
        setBannerData({
            ...bannerData,
            items: [...bannerData.items, { icon: '⭐', text: 'New announcement', link: '' }]
        });
    };

    const removeItem = (index) => {
        const newItems = bannerData.items.filter((_, i) => i !== index);
        setBannerData({ ...bannerData, items: newItems });
    };

    const refreshPreview = () => {
        setPreviewKey(prev => prev + 1);
    };

    return (
        <div className="banner-manager">
            <h2>🎯 Top Banner Management</h2>
            <p className="subtitle">Manage the announcement banner that appears above the header</p>

            <div className="banner-settings">
                {/* Active Toggle */}
                <div className="setting-row">
                    <label className="toggle-label">
                        <input
                            type="checkbox"
                            checked={bannerData.isActive}
                            onChange={(e) => setBannerData({ ...bannerData, isActive: e.target.checked })}
                        />
                        <span className="toggle-text">Banner Active</span>
                    </label>
                </div>

                {/* Colors */}
                <div className="color-settings">
                    <div className="color-input">
                        <label>Background Color</label>
                        <input
                            type="color"
                            value={bannerData.backgroundColor}
                            onChange={(e) => setBannerData({ ...bannerData, backgroundColor: e.target.value })}
                        />
                        <span>{bannerData.backgroundColor}</span>
                    </div>
                    <div className="color-input">
                        <label>Text Color</label>
                        <input
                            type="color"
                            value={bannerData.textColor}
                            onChange={(e) => setBannerData({ ...bannerData, textColor: e.target.value })}
                        />
                        <span>{bannerData.textColor}</span>
                    </div>
                </div>

                {/* Banner Items */}
                <div className="items-section">
                    <h3>Banner Items</h3>
                    {bannerData.items.map((item, index) => (
                        <div key={index} className="banner-item-editor">
                            <div className="item-header">
                                <span className="item-number">Item {index + 1}</span>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeItem(index)}
                                    disabled={bannerData.items.length === 1}
                                >
                                    🗑️ Remove
                                </button>
                            </div>
                            <div className="item-fields">
                                <input
                                    type="text"
                                    placeholder="Icon (emoji)"
                                    value={item.icon}
                                    onChange={(e) => handleItemChange(index, 'icon', e.target.value)}
                                    maxLength={2}
                                />
                                <input
                                    type="text"
                                    placeholder="Text"
                                    value={item.text}
                                    onChange={(e) => handleItemChange(index, 'text', e.target.value)}
                                />
                                <input
                                    type="url"
                                    placeholder="Link (optional)"
                                    value={item.link}
                                    onChange={(e) => handleItemChange(index, 'link', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                    <button className="add-item-btn" onClick={addItem}>
                        ➕ Add Item
                    </button>
                </div>

                {/* Preview */}
                <div className="preview-section">
                    <h3>Preview</h3>
                    <div
                        key={previewKey}
                        className="banner-preview"
                        style={{
                            backgroundColor: bannerData.backgroundColor,
                            color: bannerData.textColor
                        }}
                    >
                        <div className="banner-preview-content">
                            {bannerData.items.map((item, index) => (
                                <span key={index}>
                                    <span className="preview-icon">{item.icon}</span> {item.text}
                                    {index < bannerData.items.length - 1 && <span className="preview-divider">|</span>}
                                </span>
                            ))}
                        </div>
                        <button className="preview-close">×</button>
                    </div>
                    {!bannerData.isActive && (
                        <p className="inactive-notice">⚠️ Banner is currently inactive</p>
                    )}
                </div>

                {/* Actions */}
                <div className="actions">
                    <button className="save-btn" onClick={handleSave} disabled={saving || loading}>
                        {saving ? '⏳ Saving...' : '💾 Save Banner'}
                    </button>
                    <button className="refresh-btn" onClick={refreshPreview}>
                        🔄 Refresh Preview
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerManager;
