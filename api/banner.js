// SIMPLIFIED BANNER API - Works immediately without database setup
// Banner data is stored in Vercel environment variable BANNER_DATA

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Default banner data
    const defaultBanner = {
        isActive: true,
        backgroundColor: '#10b981',
        textColor: '#ffffff',
        items: [
            { icon: '📅', text: 'New batch starts 1 Feb', link: '' },
            { icon: '▶', text: 'FREE demo on 27 Jan', link: '' },
            { icon: '📱', text: 'Join WhatsApp', link: 'https://wa.me/919154255508' }
        ]
    };

    if (req.method === 'GET') {
        // Return the banner data
        res.status(200).json(defaultBanner);
    } else if (req.method === 'POST') {
        // For now, just return success but don't actually save
        // To update banner, edit the defaultBanner object above and redeploy
        res.status(200).json({ success: true, message: 'To update banner, edit banner.js file and commit/push to GitHub' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
