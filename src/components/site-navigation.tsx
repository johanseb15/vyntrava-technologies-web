'use client';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#productos', label: 'Productos' },
  { href: '#ingenieria', label: 'Nuestra ingeniería' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
      if (event.key === 'Tab' && panel.current) {
        const nodes = Array.from(panel.current.querySelectorAll<HTMLElement>('a,button'));
        const first = nodes[0]; const last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return <>
    <nav className="site-nav" aria-label="Navegación principal">
      {links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
    </nav>
    <div className="header-actions">
      <a className="button button-dark header-button" href="#contacto">Hablemos <ArrowUpRight size={16} aria-hidden="true" /></a>
      <button type="button" ref={trigger} className="mobile-menu-trigger" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-controls="vyntrava-mobile-nav" aria-expanded={open} onClick={() => setOpen(value => !value)}>
        {open ? <X size={22} aria-hidden="true"/> : <Menu size={22} aria-hidden="true"/>}
      </button>
    </div>
    {open && <div className="mobile-menu-backdrop" onClick={() => {setOpen(false); trigger.current?.focus();}} aria-hidden="true"/>}
    <div id="vyntrava-mobile-nav" ref={panel} className={`mobile-menu-panel ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <nav aria-label="Navegación móvil">
        {links.map(link => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16} aria-hidden="true"/></a>)}
      </nav>
    </div>
  </>;
}
