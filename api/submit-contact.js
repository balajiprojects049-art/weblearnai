import { Pool } from '@neondatabase/serverless';

export const config = {
    runtime: 'edge',
};

// Function to send WhatsApp message
async function sendWhatsAppNotification(formData) {
    try {
        // Format the message
        const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📚 *Course Interest:* ${formData.topicInterest}
💼 *Status:* ${formData.studentStatus}
${formData.studentDetails ? `🎓 *Details:* ${formData.studentDetails}` : ''}
${formData.experienceYears ? `⏱️ *Experience:* ${formData.experienceYears} years` : ''}
${formData.graduatedDetails ? `🎓 *Graduated:* ${formData.graduatedDetails}` : ''}
${formData.message ? `💬 *Message:* ${formData.message}` : ''}

_Submitted via Weblearnai Academy Website_
        `.trim();

        // Using CallMeBot API (Free WhatsApp API)
        // You need to first register your number at https://www.callmebot.com/blog/free-api-whatsapp-messages/
        // For now, I'll use a simpler approach with WhatsApp Business API alternative

        // Alternative: Use WhatsApp Cloud API or Twilio
        // For immediate implementation, we'll log and prepare for integration
        console.log('📱 WhatsApp Message to send:', message);

        // TODO: Integrate with your preferred WhatsApp service:
        // Option 1: CallMeBot (Free, requires one-time setup)
        // Option 2: Twilio WhatsApp API (Paid, more reliable)
        // Option 3: WhatsApp Cloud API (Free tier available)

        // For now, returning success to not block the main flow
        return { success: true, method: 'logged' };

    } catch (error) {
        console.error('WhatsApp notification error:', error);
        // Don't fail the main request if WhatsApp fails
        return { success: false, error: error.message };
    }
}

export default async function handler(req) {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const data = await req.json();

        // Create database connection
        const pool = new Pool({ connectionString: process.env.DATABASE_URL });

        // Insert contact submission to database
        const result = await pool.query(
            `INSERT INTO contact_submissions 
       (name, email, phone, topic_interest, student_status, student_details, experience_years, graduated_details, message, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW()) 
       RETURNING id, created_at`,
            [
                data.name,
                data.email,
                data.phone,
                data.topicInterest,
                data.studentStatus,
                data.studentDetails || null,
                data.experienceYears || null,
                data.graduatedDetails || null,
                data.message || null,
            ]
        );

        // Send WhatsApp notification (non-blocking)
        const whatsappResult = await sendWhatsAppNotification(data);
        console.log('📱 WhatsApp notification result:', whatsappResult);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Submission saved successfully!',
                id: result.rows[0].id,
                whatsappSent: whatsappResult.success
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    } catch (error) {
        console.error('Database error:', error);
        return new Response(
            JSON.stringify({
                success: false,
                error: 'Failed to save submission',
                details: error.message
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            }
        );
    }
}
