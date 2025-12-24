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
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    if (req.method !== 'GET') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Create database connection
        const pool = new Pool({ connectionString: process.env.DATABASE_URL });

        // Fetch all submissions ordered by newest first
        const result = await pool.query(
            `SELECT 
        id, 
        name, 
        email, 
        phone, 
        topic_interest as "topicInterest", 
        student_status as "studentStatus", 
        student_details as "studentDetails", 
        experience_years as "experienceYears", 
        graduated_details as "graduatedDetails", 
        message, 
        TO_CHAR(created_at, 'MM/DD/YYYY, HH12:MI:SS AM') as timestamp
       FROM contact_submissions 
       ORDER BY created_at DESC`
        );

        return new Response(
            JSON.stringify({
                success: true,
                submissions: result.rows
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
                error: 'Failed to fetch submissions',
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
