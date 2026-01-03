import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdManager = () => {
    const [ads, setAds] = useState([]);
    const [uploading, setUploading] = useState(false);

    // Load ads from local storage
    useEffect(() => {
        const savedAds = JSON.parse(localStorage.getItem('activeAds') || '[]');
        setAds(savedAds);
    }, []);

    const handleFileUpload = async (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(true);

        try {
            const file = files[0];

            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file (JPG, PNG, GIF, etc.)');
                setUploading(false);
                return;
            }

            // Convert to base64 for storage
            const reader = new FileReader();
            reader.onload = (event) => {
                const newAd = {
                    id: Date.now().toString(),
                    imageUrl: event.target.result,
                    fileName: file.name,
                    fileSize: (file.size / 1024).toFixed(2) + ' KB',
                    uploadedAt: new Date().toISOString(),
                    isActive: true
                };

                const updatedAds = [newAd, ...ads];
                setAds(updatedAds);
                localStorage.setItem('activeAds', JSON.stringify(updatedAds));

                setUploading(false);
                alert('Image uploaded successfully!');
            };

            reader.onerror = () => {
                alert('Failed to read file');
                setUploading(false);
            };

            reader.readAsDataURL(file);
        } catch (error) {
            console.error('Upload error:', error);
            alert('Failed to upload image');
            setUploading(false);
        }
    };

    const handleDelete = (id) => {
        if (!window.confirm('Delete this banner?')) return;
        const updatedAds = ads.filter(ad => ad.id !== id);
        setAds(updatedAds);
        localStorage.setItem('activeAds', JSON.stringify(updatedAds));
    };

    const handleToggleActive = (id) => {
        const updatedAds = ads.map(ad =>
            ad.id === id ? { ...ad, isActive: !ad.isActive } : ad
        );
        setAds(updatedAds);
        localStorage.setItem('activeAds', JSON.stringify(updatedAds));
    };

    return (
        <div style={{ padding: '2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={{
                    marginBottom: '2rem',
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    📢 Banner Manager
                </h2>

                {/* Upload Section */}
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '3rem',
                    borderRadius: '16px',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
                }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📤</div>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            Upload Banner / Image
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>
                            Click the button below to upload promotional images or banners
                        </p>
                    </div>

                    <label htmlFor="file-upload" style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        background: 'white',
                        color: '#667eea',
                        borderRadius: '12px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        cursor: uploading ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        opacity: uploading ? 0.6 : 1
                    }}
                        onMouseOver={(e) => {
                            if (!uploading) {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                            }
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                        }}
                    >
                        {uploading ? '⌛ Uploading...' : '📁 Choose Image'}
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        disabled={uploading}
                        style={{ display: 'none' }}
                    />

                    <p style={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.875rem',
                        marginTop: '1rem'
                    }}>
                        Supported formats: JPG, PNG, GIF, WebP
                    </p>
                </div>

                {/* Uploaded Banners List */}
                <div>
                    <h3 style={{
                        marginBottom: '1rem',
                        fontSize: '1.5rem',
                        color: '#1e293b',
                        fontWeight: '600'
                    }}>
                        📋 Uploaded Banners ({ads.length})
                    </h3>

                    {ads.length === 0 ? (
                        <div style={{
                            background: '#f8fafc',
                            padding: '3rem',
                            borderRadius: '12px',
                            textAlign: 'center',
                            border: '2px dashed #cbd5e1'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️</div>
                            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                                No banners uploaded yet. Upload your first banner above!
                            </p>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '1.5rem'
                        }}>
                            {ads.map((ad, index) => (
                                <motion.div
                                    key={ad.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        background: 'white',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        position: 'relative',
                                        border: ad.isActive ? '2px solid #10b981' : '2px solid #e2e8f0'
                                    }}
                                >
                                    {/* Banner Image */}
                                    <div style={{
                                        position: 'relative',
                                        paddingTop: '56.25%', // 16:9 aspect ratio
                                        background: '#f1f5f9',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={ad.imageUrl}
                                            alt={ad.fileName}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />

                                        {/* Status Badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: ad.isActive ? '#10b981' : '#94a3b8',
                                            color: 'white',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold'
                                        }}>
                                            {ad.isActive ? '✓ Active' : '○ Inactive'}
                                        </div>
                                    </div>

                                    {/* Banner Info */}
                                    <div style={{ padding: '1rem' }}>
                                        <p style={{
                                            fontWeight: '600',
                                            marginBottom: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: '#1e293b',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {ad.fileName}
                                        </p>
                                        <p style={{
                                            fontSize: '0.75rem',
                                            color: '#64748b',
                                            marginBottom: '0.25rem'
                                        }}>
                                            Size: {ad.fileSize}
                                        </p>
                                        <p style={{
                                            fontSize: '0.75rem',
                                            color: '#64748b'
                                        }}>
                                            Uploaded: {new Date(ad.uploadedAt).toLocaleDateString()}
                                        </p>

                                        {/* Actions */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '0.5rem',
                                            marginTop: '1rem'
                                        }}>
                                            <button
                                                onClick={() => handleToggleActive(ad.id)}
                                                style={{
                                                    flex: 1,
                                                    padding: '0.5rem',
                                                    background: ad.isActive ? '#fef3c7' : '#dcfce7',
                                                    color: ad.isActive ? '#92400e' : '#166534',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    fontWeight: '600',
                                                    fontSize: '0.85rem',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {ad.isActive ? '⏸ Deactivate' : '▶ Activate'}
                                            </button>
                                            <button
                                                onClick={() => handleDelete(ad.id)}
                                                style={{
                                                    flex: 1,
                                                    padding: '0.5rem',
                                                    background: '#fee2e2',
                                                    color: '#991b1b',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    fontWeight: '600',
                                                    fontSize: '0.85rem',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                🗑️ Delete
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default AdManager;
