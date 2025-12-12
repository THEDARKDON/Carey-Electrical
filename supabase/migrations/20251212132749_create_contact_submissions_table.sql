/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `firstname` (text) - Contact's first name
      - `lastname` (text) - Contact's last name
      - `email` (text) - Contact's email address
      - `phone` (text, optional) - Contact's phone number
      - `service` (text, optional) - Service they're interested in
      - `postcode` (text, optional) - Their postcode
      - `message` (text) - Their message/inquiry
      - `created_at` (timestamptz) - When the submission was created
      - `status` (text) - Submission status (new, read, responded)
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - No public access - only service role can insert/read
    - This ensures form submissions are secure and can only be accessed by backend functions
    
  3. Indexes
    - Index on created_at for efficient sorting
    - Index on status for filtering
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  firstname text NOT NULL,
  lastname text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  postcode text,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- No policies needed - only service role will access this table
-- This prevents any public access while allowing edge functions to insert

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);