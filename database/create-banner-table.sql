-- COPY THIS AND RUN IN NEON SQL EDITOR
-- This creates a simple table that WILL work

CREATE TABLE IF NOT EXISTS banner_config (
    id INTEGER PRIMARY KEY DEFAULT 1,
    data JSONB NOT NULL
);

-- Insert default data
INSERT INTO banner_config (id, data) 
VALUES (1, '{"isActive":true,"backgroundColor":"#10b981","textColor":"#ffffff","items":[{"icon":"📅","text":"New batch starts 1 Feb","link":""},{"icon":"▶","text":"FREE demo on 27 Jan","link":""},{"icon":"📱","text":"Join WhatsApp","link":"https://wa.me/919154255508"}]}'::jsonb)
ON CONFLICT (id) DO NOTHING;

SELECT * FROM banner_config;

