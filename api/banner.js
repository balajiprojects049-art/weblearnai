import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const sql = neon(process.env.DATABASE_URL);

    try {
        if (req.method === 'GET') {
            // Get banner data from database
            const result = await sql`
                SELECT banner_data FROM site_settings WHERE id = 1
            `;

            if (result.length > 0 && result[0].banner_data) {
                res.status(200).json(result[0].banner_data);
            } else {
                // Return default banner if none exists
                const defaultBanner = {
                    isActive: true,
                    backgroundColor: '#1e40af',
                    textColor: '#ffffff',
                    items: [
                        { icon: '📅', text: 'New batch starts 15 Jan', link: '' },
                        { icon: '▶', text: 'FREE demo on 11 Jan', link: '' },
                        { icon: '📱', text: 'Join WhatsApp', link: 'https://wa.me/919154255508' }
                    ]
                };
                res.status(200).json(defaultBanner);
            }
        } else if (req.method === 'POST') {
            // Update banner data in database
            const bannerData = req.body;

            // Check if record exists
            const existing = await sql`
                SELECT id FROM site_settings WHERE id = 1
            `;

            if (existing.length > 0) {
                // Update existing record
                await sql`
                    UPDATE site_settings 
                    SET banner_data = ${JSON.stringify(bannerData)}, 
                        updated_at = NOW() 
                    WHERE id = 1
                `;
            } else {
                // Insert new record
                await sql`
                    INSERT INTO site_settings (id, banner_data, updated_at)
                    VALUES (1, ${JSON.stringify(bannerData)}, NOW())
                `;
            }

            res.status(200).json({ success: true, message: 'Banner updated successfully' });
        } else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error: ' + error.message });
    }
}
