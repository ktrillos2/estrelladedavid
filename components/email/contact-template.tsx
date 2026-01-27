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
    <div style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '40px 0', margin: '0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>

            {/* Header */}
            <div style={{ backgroundColor: '#1a1a1a', padding: '30px 20px', textAlign: 'center' }}>
                <h1 style={{ color: '#FFD700', margin: '0', fontSize: '28px', fontWeight: 'bold', letterSpacing: '1px' }}>
                    Estrella de David
                </h1>
                <p style={{ color: '#cccccc', fontSize: '14px', margin: '5px 0 0', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Nuevo Mensaje de Contacto
                </p>
            </div>

            {/* Content */}
            <div style={{ padding: '40px 30px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '20px', color: '#1a1a1a', borderBottom: '2px solid #FFD700', paddingBottom: '10px', margin: '0 0 20px 0', display: 'inline-block' }}>
                        Detalles del Cliente
                    </h2>

                    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '6px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px 0', color: '#666', fontWeight: 'bold', width: '120px' }}>Nombre:</td>
                                    <td style={{ padding: '8px 0', color: '#333' }}>{nombre}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px 0', color: '#666', fontWeight: 'bold' }}>Email:</td>
                                    <td style={{ padding: '8px 0' }}>
                                        <a href={`mailto:${email}`} style={{ color: '#d4af37', textDecoration: 'none' }}>{email}</a>
                                    </td>
                                </tr>
                                {telefono && (
                                    <tr>
                                        <td style={{ padding: '8px 0', color: '#666', fontWeight: 'bold' }}>Teléfono:</td>
                                        <td style={{ padding: '8px 0' }}>
                                            <a href={`tel:${telefono.replace(/\s/g, '')}`} style={{ color: '#d4af37', textDecoration: 'none' }}>{telefono}</a>
                                        </td>
                                    </tr>
                                )}
                                {servicio && (
                                    <tr>
                                        <td style={{ padding: '8px 0', color: '#666', fontWeight: 'bold' }}>Servicio:</td>
                                        <td style={{ padding: '8px 0', color: '#333' }}>{servicio}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '20px', color: '#1a1a1a', borderBottom: '2px solid #FFD700', paddingBottom: '10px', margin: '0 0 20px 0', display: 'inline-block' }}>
                        Mensaje
                    </h2>
                    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '6px', color: '#555', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                        {mensaje}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', textAlign: 'center', borderTop: '4px solid #FFD700' }}>
                <p style={{ color: '#888', fontSize: '12px', margin: '0' }}>
                    &copy; {new Date().getFullYear()} Estrella de David. Todos los derechos reservados.
                </p>
                <p style={{ color: '#666', fontSize: '12px', margin: '5px 0 0' }}>
                    Este mensaje fue enviado desde el formulario de contacto de su sitio web.
                </p>
            </div>
        </div>
    </div>
);
