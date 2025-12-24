import { Pool } from '@neondatabase/serverless';

export const config = {
    runtime: 'edge',
};

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

        // Insert contact submission
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

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Submission saved successfully!',
                id: result.rows[0].id
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
