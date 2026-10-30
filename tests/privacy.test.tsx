import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import PrivacyPage from '@/app/politica-de-privacidad/page';

afterEach(() => cleanup());

describe('fotografías y privacidad', () => {
  it('describe el alojamiento local de las fotografías', () => {
    render(<PrivacyPage />);
    expect(screen.getByText(/fotografías alojadas en el propio sitio/i)).toBeTruthy();
    expect(screen.queryByText(/servidores reciben las solicitudes de descarga/i)).toBeNull();
  });
});
