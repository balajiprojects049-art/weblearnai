// WhatsApp Integration Setup Guide
// Your WhatsApp Number: +91 91542 55508

/**
 * OPTION 1: TWILIO WHATSAPP API (Recommended - Most Reliable)
 * ========================================================
 * 1. Sign up at https://www.twilio.com/
 * 2. Get your Account SID and Auth Token
 * 3. Enable WhatsApp in Twilio Console
 * 4. Add these to your .env file:
 *    TWILIO_ACCOUNT_SID=your_account_sid
 *    TWILIO_AUTH_TOKEN=your_auth_token
 *    TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
 *    TWILIO_WHATSAPP_TO=whatsapp:+919154255508
 */

/**
 * OPTION 2: WHATSAPP BUSINESS CLOUD API (Free Tier Available)
 * ==========================================================
 * 1. Create a Meta Developer account
 * 2. Set up WhatsApp Business API
 * 3. Get your Phone Number ID and Access Token
 * 4. Add to .env:
 *    WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
 *    WHATSAPP_ACCESS_TOKEN=your_access_token
 */

/**
 * OPTION 3: CALLMEBOT (Simplest - Free)
 * ======================================
 * 1. Add CallMeBot to your WhatsApp contacts: +34 644 44 94 48
 * 2. Send this message: "I allow callmebot to send me messages"
 * 3. You'll a message with your API key
 * 4. Add to .env:
 *    CALLMEBOT_API_KEY=your_api_key
 */

// ===================================================================
// TWILIO IMPLEMENTATION (Copy this to submit-contact.js)
// ===================================================================

export async function sendWhatsAppViaTwilio(formData) {
    try {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const from = process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886';
        const to = 'whatsapp:+919154255508'; // Your number

        const message = `
🔔 NEW CONTACT FORM SUBMISSION

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📚 Course: ${formData.topicInterest}
💼 Status: ${formData.studentStatus}
${formData.message ? `💬 Message: ${formData.message}` : ''}

Via Weblearnai Academy
        `.trim();

        const response = await fetch(
            `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
            {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    From: from,
                    To: to,
                    Body: message,
                }),
            }
        );

        if (response.ok) {
            return { success: true, method: 'twilio' };
        } else {
            const error = await response.json();
            throw new Error(error.message || 'Twilio API error');
        }
    } catch (error) {
        console.error('Twilio WhatsApp error:', error);
        return { success: false, error: error.message };
    }
}

// ===================================================================
// CALLMEBOT IMPLEMENTATION (Simpler Alternative)
// ===================================================================

export async function sendWhatsAppViaCallMeBot(formData) {
    try {
        const apiKey = process.env.CALLMEBOT_API_KEY;
        const phone = '919154255508'; // Your number without +

        const message = `
🔔 NEW CONTACT FORM

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course: ${formData.topicInterest}
Status: ${formData.studentStatus}
        `.trim();

        const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

        const response = await fetch(url);

        if (response.ok) {
            return { success: true, method: 'callmebot' };
        } else {
            throw new Error('CallMeBot API error');
        }
    } catch (error) {
        console.error('CallMeBot WhatsApp error:', error);
        return { success: false, error: error.message };
    }
}

// ===================================================================
// WHATSAPP CLOUD API IMPLEMENTATION
// ===================================================================

export async function sendWhatsAppViaCloudAPI(formData) {
    try {
        const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
        const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
        const toNumber = '919154255508'; // Your number

        const message = `
🔔 *New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Course:* ${formData.topicInterest}
*Status:* ${formData.studentStatus}
${formData.message ? `*Message:* ${formData.message}` : ''}

_Weblearnai Academy_
        `.trim();

        const response = await fetch(
            `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messaging_product: 'whatsapp',
                    to: toNumber,
                    type: 'text',
                    text: { body: message },
                }),
            }
        );

        if (response.ok) {
            return { success: true, method: 'cloud-api' };
        } else {
            const error = await response.json();
            throw new Error(error.error?.message || 'Cloud API error');
        }
    } catch (error) {
        console.error('WhatsApp Cloud API error:', error);
        return { success: false, error: error.message };
    }
}
