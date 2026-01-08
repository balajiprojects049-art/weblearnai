import fs from 'fs';
import path from 'path';

const BANNER_FILE = path.join(process.cwd(), 'banner-data.json');

// Initialize banner file if it doesn't exist
if (!fs.existsSync(BANNER_FILE)) {
    const defaultBanner = {
        isActive: true,
        backgroundColor: '#1e40af',
        textColor: '#ffffff',
        items: [
            { icon: '📅', text: 'New batch starts 15 Jan' },
            { icon: '▶', text: 'FREE demo on 11 Jan' },
            { icon: '📱', text: 'Join WhatsApp', link: 'https://wa.me/919154255508' }
        ]
    };
    fs.writeFileSync(BANNER_FILE, JSON.stringify(defaultBanner, null, 2));
}

export default function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        // Read banner data
        try {
            const data = fs.readFileSync(BANNER_FILE, 'utf8');
            res.status(200).json(JSON.parse(data));
        } catch (error) {
            res.status(500).json({ error: 'Failed to read banner data' });
        }
    } else if (req.method === 'POST') {
        // Update banner data
        try {
            const bannerData = req.body;
            fs.writeFileSync(BANNER_FILE, JSON.stringify(bannerData, null, 2));
            res.status(200).json({ success: true, message: 'Banner updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update banner data' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
