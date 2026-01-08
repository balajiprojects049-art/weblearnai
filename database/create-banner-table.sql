-- SQL Script to Create Banner Storage Table in Neon Database
-- Run this in your Neon SQL Editor: https://console.neon.tech

-- Create site_settings table to store banner data
CREATE TABLE IF NOT EXISTS site_settings (
    id INTEGER PRIMARY KEY,
    banner_data JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Insert default banner data
INSERT INTO site_settings (id, banner_data, created_at, updated_at)
VALUES (
    1,
    '{
        "isActive": true,
        "backgroundColor": "#1e40af",
        "textColor": "#ffffff",
        "items": [
            {"icon": "📅", "text": "New batch starts 15 Jan", "link": ""},
            {"icon": "▶", "text": "FREE demo on 11 Jan", "link": ""},
            {"icon": "📱", "text": "Join WhatsApp", "link": "https://wa.me/919154255508"}
        ]
    }'::jsonb,
    NOW(),
    NOW()
) ON CONFLICT (id) DO NOTHING;

-- Verify the data was inserted
SELECT * FROM site_settings WHERE id = 1;
