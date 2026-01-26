import { ContactTemplate } from '@/components/email/contact-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, email, telefono, servicio, mensaje } = body;

        // Validate required fields
        if (!nombre || !email || !mensaje) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Estrella de David Website <onboarding@resend.dev>',
            to: ['estrella_de_david1@hotmail.com'], // Business email from contact-content.tsx
            subject: `Nuevo mensaje de contacto de ${nombre} - Estrella de David`,
            react: ContactTemplate({
                nombre,
                email,
                telefono,
                servicio,
                mensaje,
            }),
            reply_to: email,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
