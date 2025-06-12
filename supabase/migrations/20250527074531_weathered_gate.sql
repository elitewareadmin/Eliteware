/*
  # Create job applications tables

  1. New Tables
    - `job_positions`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `department` (text, required)
      - `description` (text, required)
      - `requirements` (text, required)
      - `is_active` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `job_applications`
      - `id` (uuid, primary key)
      - `position_id` (uuid, foreign key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `years_experience` (integer, required)
      - `cv_url` (text, required)
      - `cover_letter_url` (text)
      - `privacy_accepted` (boolean, required)
      - `status` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for inserting applications
    - Add policies for viewing active positions
*/

-- Create job positions table
CREATE TABLE IF NOT EXISTS job_positions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  department text NOT NULL,
  description text NOT NULL,
  requirements text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create job applications table
CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  position_id uuid REFERENCES job_positions(id),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  years_experience integer NOT NULL,
  cv_url text NOT NULL,
  cover_letter_url text,
  privacy_accepted boolean NOT NULL DEFAULT false,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE job_positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Policies for job positions
CREATE POLICY "Anyone can view active positions"
  ON job_positions
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Policies for job applications
CREATE POLICY "Anyone can submit applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (privacy_accepted = true);

CREATE POLICY "Authenticated users can view applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);