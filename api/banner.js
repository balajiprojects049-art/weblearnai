import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const sql = neon(process.env.DATABASE_URL);

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

    try {
        if (req.method === 'GET') {
            const result = await sql`SELECT data FROM banner_config WHERE id = 1`;
            return res.status(200).json(result[0]?.data || defaultBanner);
        }

        if (req.method === 'POST') {
            await sql`
                INSERT INTO banner_config (id, data) 
                VALUES (1, ${JSON.stringify(req.body)})
                ON CONFLICT (id) DO UPDATE SET data = ${JSON.stringify(req.body)}
            `;
            return res.status(200).json({ success: true });
        }
    } catch (error) {
        console.error(error);
        return res.status(200).json(defaultBanner); // Return default on error
    }
}
