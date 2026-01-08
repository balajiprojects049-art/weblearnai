// Simple WhatsApp notification for syllabus downloads
// Uses CallMeBot API (Free)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, course } = req.body;

        // Your WhatsApp number
        const whatsappNumber = '919154255508';

        // Get API key from environment (you'll set this up)
        const apiKey = process.env.CALLMEBOT_API_KEY;

        if (!apiKey) {
            console.log('⚠️ CallMeBot API key not set - skipping WhatsApp notification');
            return res.status(200).json({ success: true, skipped: true });
        }

        // Format message
        const message = `🎓 NEW SYLLABUS DOWNLOAD!

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📚 Course: ${course}

⏰ ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

        // Send via CallMeBot
        const url = `https://api.callmebot.com/whatsapp.php?phone=${whatsappNumber}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

        const response = await fetch(url);

        if (response.ok) {
            console.log('✅ WhatsApp notification sent!');
            return res.status(200).json({ success: true });
        } else {
            throw new Error('CallMeBot API error');
        }
    } catch (error) {
        console.error('❌ WhatsApp notification error:', error);
        return res.status(200).json({ success: true, error: error.message });
    }
}
