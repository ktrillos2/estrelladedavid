import * as React from 'react';

interface ContactTemplateProps {
    nombre: string;
    email: string;
    telefono?: string;
    servicio?: string;
    mensaje: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
    nombre,
    email,
    telefono,
    servicio,
    mensaje,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
        <div style={{ textAlign: 'center', borderBottom: '2px solid #FFD700', paddingBottom: '20px', marginBottom: '20px' }}>
            <h1 style={{ color: '#1a1a1a', margin: '0', fontSize: '24px' }}>Nuevo Mensaje de Contacto</h1>
            <p style={{ color: '#666', fontSize: '14px', margin: '5px 0 0' }}>Estrella de David Website</p>
        </div>

        <div style={{ marginBottom: '25px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
            <h2 style={{ fontSize: '18px', borderBottom: '1px solid #ddd', paddingBottom: '10px', marginTop: '0', color: '#555' }}>Detalles del Cliente</h2>
            <p style={{ margin: '8px 0' }}><strong>Nombre:</strong> {nombre}</p>
            <p style={{ margin: '8px 0' }}><strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#0070f3' }}>{email}</a></p>
            {telefono && <p style={{ margin: '8px 0' }}><strong>Teléfono:</strong> <a href={`tel:${telefono.replace(/\s/g, '')}`} style={{ color: '#0070f3' }}>{telefono}</a></p>}
            {servicio && <p style={{ margin: '8px 0' }}><strong>Servicio de Interés:</strong> {servicio}</p>}
        </div>

        <div>
            <h2 style={{ fontSize: '18px', borderBottom: '1px solid #ddd', paddingBottom: '10px', color: '#555' }}>Mensaje</h2>
            <div style={{ backgroundColor: '#fff', border: '1px solid #eee', padding: '15px', borderRadius: '4px', whiteSpace: 'pre-wrap' }}>
                {mensaje}
            </div>
        </div>

        <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'center', fontSize: '12px', color: '#999' }}>
            <p>Este correo fue enviado desde el formulario de contacto de estrelladedavid.pe</p>
        </div>
    </div>
);
