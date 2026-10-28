import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
vi.mock('@/components/hero-scene', () => ({ HeroScene: () => <div data-testid="scene-fallback" /> }));
import Home from '@/app/page';
describe('ADEL-WEB-001 / Landing accesible sin WebGL', () => {
  it('presenta propuesta de valor y CTA aunque la escena 3D no exista', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /ideas complejas.*soluciones claras/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /contanos tu desafío/i }).getAttribute('href')).toBe('#contacto');
    expect(screen.getByRole('link', { name: /contactar a vyntrava/i }).getAttribute('href')).toMatch(/^mailto:/);
  });
  it('incluye navegación y las cuatro capacidades', () => {
    render(<Home />);
    expect(screen.getByRole('navigation', { name: /navegación principal/i })).toBeTruthy();
    expect(screen.getByText('Software a medida')).toBeTruthy();
    expect(screen.getByText('Automatización')).toBeTruthy();
    expect(screen.getByText('Datos y analítica')).toBeTruthy();
    expect(screen.getByText('IA aplicada')).toBeTruthy();
  });
});
