import { kv } from '@vercel/kv';

const DEFAULT_BANNER = {
    isActive: true,
    backgroundColor: '#10b981',
    textColor: '#ffffff',
    items: [
        { icon: '📅', text: 'New batch starts 1 Feb', link: '' },
        { icon: '▶', text: 'FREE demo on 27 Jan', link: '' },
        { icon: '📱', text: 'Join WhatsApp', link: 'https://wa.me/919154255508' }
    ]
};

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        if (req.method === 'GET') {
            const banner = await kv.get('banner_config');
            return res.status(200).json(banner || DEFAULT_BANNER);
        }

        if (req.method === 'POST') {
            await kv.set('banner_config', req.body);
            return res.status(200).json({ success: true, message: 'Banner updated successfully' });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('KV Error:', error);
        return res.status(200).json(DEFAULT_BANNER);
    }
}
