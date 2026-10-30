import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Política de privacidad | Vyntrava Technologies',
  description: 'Información sobre los datos y comunicaciones recibidas a través del sitio de Vyntrava Technologies.',
};
export default function PrivacyPage() {
  return <>
    <header className="site-header"><div className="wrap header-inner"><Link href="/" className="wordmark" aria-label="Volver al inicio de Vyntrava"><span className="wordmark-symbol">V<span>.</span></span><span className="wordmark-name">VYNTRAVA<small>TECHNOLOGIES</small></span></Link><Link className="button button-dark" href="/">Volver al inicio</Link></div></header>
    <main className="legal-main"><div className="wrap legal-inner">
      <p className="eyebrow eyebrow-dark">INFORMACIÓN LEGAL</p>
      <h1>Política de privacidad</h1>
      <p><strong>Última actualización:</strong> 30 de octubre de 2026.</p>
      <p>Esta página describe el tratamiento previsto de las comunicaciones enviadas directamente a Vyntrava Technologies desde este sitio informativo. Responsable de contacto: Vyntrava Technologies, Córdoba, Argentina. Consultas relacionadas con privacidad: <a href="mailto:sebasmol2010@gmail.com">sebasmol2010@gmail.com</a>.</p>
      <h2>Datos recibidos y finalidad</h2>
      <p>El sitio no incorpora formularios propios ni solicita crear cuentas. El botón de contacto abre el programa de correo del visitante. Si nos escribís, recibiremos los datos que voluntariamente incluyas —por ejemplo, nombre, dirección de correo y descripción del proyecto— para responder a tu consulta y mantener la comunicación comercial relacionada.</p>
      <h2>Servicios técnicos externos</h2>
      <p>El sitio utiliza fotografías alojadas en el propio sitio, basadas en imágenes de Unsplash. Su carga no requiere que el navegador se conecte a Unsplash. Las tipografías se incorporan al sitio durante su compilación mediante Next.js; no requieren cargar una hoja de estilos de Google Fonts desde el navegador. El alojamiento previsto para esta versión es GitHub Pages, un servicio de GitHub. Según su documentación, GitHub registra direcciones IP de los visitantes por motivos de seguridad. Para obtener detalles sobre ese tratamiento podés consultar la política de privacidad de GitHub.</p>
      <h2>Cookies y seguimiento</h2>
      <p>Esta versión no integra, en su código propio, herramientas de analítica publicitaria, píxeles de seguimiento ni formularios de captación de datos. Los proveedores externos pueden aplicar sus propias medidas técnicas y políticas. Revisaremos esta información si incorporamos analítica, formularios u otras funcionalidades.</p>
      <h2>Conservación y derechos</h2>
      <p>Las comunicaciones se conservarán durante el tiempo necesario para responder y gestionar la relación comercial, atendiendo las obligaciones legales aplicables. Podés solicitar acceso, rectificación o supresión de información que nos hayas comunicado escribiendo al correo indicado. Las solicitudes se evaluarán conforme a la normativa aplicable.</p>
      <h2>Actualizaciones</h2>
      <p>Esta política se actualizará cuando cambien los proveedores de alojamiento, los servicios integrados o la forma de tratamiento de datos. La publicación está condicionada a comprobar que refleje la operación real.</p>
    </div></main>
    <footer className="footer"><div className="wrap footer-inner"><span>© {new Date().getFullYear()} Vyntrava Technologies</span><Link href="/">Volver al inicio</Link></div></footer>
  </>;
}
