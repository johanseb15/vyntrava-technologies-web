import { afterEach, describe, it, expect, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

afterEach(() => cleanup());
vi.mock('@/components/hero-scene', () => ({ HeroScene: () => <div data-testid="scene-fallback" /> }));
import Home from '@/app/page';

describe('ADEL-WEB-002 / Landing comercial y editorial', () => {
  it('presenta una oferta concreta con contacto accesible sin WebGL', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /soluciones reales para un trabajo más eficiente/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /contanos tu desafío/i }).getAttribute('href')).toBe('#contacto');
    expect(screen.getByRole('link', { name: /contactar a vyntrava/i }).getAttribute('href')).toMatch(/^mailto:/);
  });
  it('distingue los servicios, el laboratorio y la metodología ADEL', () => {
    render(<Home />);
    expect(screen.getByRole('navigation', { name: /navegación principal/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Software a medida' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Automatización' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Datos y analítica' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'IA aplicada' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /ideas que se pueden probar/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: /adel. una forma sistemática/i })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'ADEL Framework' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Enki' })).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'WhoLivesHere' })).toBeTruthy();
    expect(screen.getByRole('link', { name: /explorar repositorio/i }).getAttribute('href')).toBe('https://github.com/johanseb15/ADEL-Framework');
  });
  it('identifica las visualizaciones conceptuales y evita cifras de resultados no verificadas', () => {
    render(<Home />);
    expect(screen.getByText(/no corresponde a un cliente real/i)).toBeTruthy();
    expect(screen.getByText(/ejemplo ilustrativo/i)).toBeTruthy();
    expect(screen.queryByText(/\+40%/i)).toBeNull();
  });
});
