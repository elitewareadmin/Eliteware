import React, { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  yearsExperience: string;
  cv: File | null;
  coverLetter: File | null;
  privacyAccepted: boolean;
}

const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    yearsExperience: '',
    cv: null,
    coverLetter: null,
    privacyAccepted: false
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateFile = (file: File, maxSize: number = 5) => {
    if (!file.type.includes('pdf')) {
      throw new Error('El archivo debe estar en formato PDF');
    }
    if (file.size > maxSize * 1024 * 1024) {
      throw new Error(`El archivo no debe superar los ${maxSize}MB`);
    }
  };

  const uploadFile = async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from('applications')
      .upload(`${path}/${Date.now()}-${file.name}`, file);

    if (error) throw error;
    return data.path;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate files
      if (!formData.cv) throw new Error('El CV es obligatorio');
      validateFile(formData.cv);
      if (formData.coverLetter) {
        validateFile(formData.coverLetter);
      }

      // Upload files
      const cvUrl = await uploadFile(formData.cv, 'cv');
      let coverLetterUrl = null;
      if (formData.coverLetter) {
        coverLetterUrl = await uploadFile(formData.coverLetter, 'cover-letters');
      }

      // Save application
      const { error: insertError } = await supabase
        .from('job_applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          position_id: formData.position,
          years_experience: parseInt(formData.yearsExperience),
          cv_url: cvUrl,
          cover_letter_url: coverLetterUrl,
          privacy_accepted: formData.privacyAccepted
        });

      if (insertError) throw insertError;

      setSuccess(true);
      formRef.current?.reset();
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        yearsExperience: '',
        cv: null,
        coverLetter: null,
        privacyAccepted: false
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ha ocurrido un error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
          Tu postulación ha sido enviada con éxito. Te contactaremos pronto.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="fullName"
            required
            className="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="yearsExperience" className="block text-sm font-medium mb-2">
            Años de experiencia *
          </label>
          <input
            type="number"
            id="yearsExperience"
            required
            min="0"
            max="50"
            className="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500"
            value={formData.yearsExperience}
            onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="cv" className="block text-sm font-medium mb-2">
            CV (PDF, máx. 5MB) *
          </label>
          <input
            type="file"
            id="cv"
            accept=".pdf"
            required
            className="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500"
            onChange={(e) => setFormData({...formData, cv: e.target.files?.[0] || null})}
          />
        </div>

        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
            Carta de presentación (PDF, máx. 5MB)
          </label>
          <input
            type="file"
            id="coverLetter"
            accept=".pdf"
            className="w-full px-4 py-2 rounded-md border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 focus:ring-2 focus:ring-accent-500"
            onChange={(e) => setFormData({...formData, coverLetter: e.target.files?.[0] || null})}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="privacy"
            required
            className="mt-1 rounded border-dark-200 dark:border-dark-600 text-accent-500 focus:ring-accent-500"
            checked={formData.privacyAccepted}
            onChange={(e) => setFormData({...formData, privacyAccepted: e.target.checked})}
          />
          <label htmlFor="privacy" className="ml-2 text-sm">
            Acepto la <a href="/privacidad" className="text-accent-500 hover:underline">política de privacidad</a> y el tratamiento de mis datos personales *
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-3 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-medium rounded-md transition-colors relative"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3\" viewBox="0 0 24 24">
                <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4\" fill="none" />
                <path className="opacity-75\" fill="currentColor\" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar postulación'
          )}
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;