import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'npm:@supabase/supabase-js'
import { Resend } from 'npm:resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))
const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const supabase = createClient(supabaseUrl!, supabaseServiceKey!)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { id } = await req.json()

    // Get application details
    const { data: application, error: applicationError } = await supabase
      .from('job_applications')
      .select(`
        *,
        position:job_positions(title)
      `)
      .eq('id', id)
      .single()

    if (applicationError) throw applicationError

    // Send email to applicant
    await resend.emails.send({
      from: 'careers@eliteware.com',
      to: application.email,
      subject: 'Hemos recibido tu postulación - Elite Ware',
      html: `
        <h1>Gracias por tu postulación</h1>
        <p>Hemos recibido tu postulación para la posición de ${application.position.title}.</p>
        <p>Revisaremos tu perfil y te contactaremos pronto.</p>
      `
    })

    // Send email to HR
    await resend.emails.send({
      from: 'careers@eliteware.com',
      to: 'rrhh@eliteware.com',
      subject: 'Nueva postulación recibida',
      html: `
        <h1>Nueva postulación recibida</h1>
        <p>Posición: ${application.position.title}</p>
        <p>Nombre: ${application.full_name}</p>
        <p>Email: ${application.email}</p>
        <p>Teléfono: ${application.phone}</p>
        <p>Años de experiencia: ${application.years_experience}</p>
        <p>CV: <a href="${application.cv_url}">Ver CV</a></p>
        ${application.cover_letter_url ? `<p>Carta: <a href="${application.cover_letter_url}">Ver carta</a></p>` : ''}
      `
    })

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})