-- Create the items table
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(100) NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  additional_images_urls TEXT[], -- Array of image URLs
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on the type column for faster filtering
CREATE INDEX IF NOT EXISTS idx_items_type ON items(type);

-- Create an index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_items_created_at ON items(created_at DESC);
