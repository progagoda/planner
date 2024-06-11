import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header'; // Adjust the import path as necessary
import * as nextAuthReact from 'next-auth/react';
import * as nextIntl from 'next-intl';

// Mocking necessary modules
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

jest.mock('next-intl', () => ({
  useTranslations: jest.fn(),
}));

describe('Header Component - Internationalization of Logout Button', () => {
  const mockSignOut = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    (nextAuthReact.useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'Test User' } },
    });
  });

  test('displays logout button with English label', () => {
    (nextIntl.useTranslations as jest.Mock).mockReturnValue(() => 'Logout');
    render(<Header switchTheme={() => {}} />);
    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument();
  });

  test('displays logout button with French label', () => {
    (nextIntl.useTranslations as jest.Mock).mockReturnValue(() => 'Se Déconnecter');
    render(<Header switchTheme={() => {}} />);
    expect(screen.getByRole('button', { name: 'Se Déconnecter' })).toBeInTheDocument();
  });

  test('displays logout button with Spanish label', () => {
    (nextIntl.useTranslations as jest.Mock).mockReturnValue(() => 'Cerrar Sesión');
    render(<Header switchTheme={() => {}} />);
    expect(screen.getByRole('button', { name: 'Cerrar Sesión' })).toBeInTheDocument();
  });

  test('displays logout button with German label', () => {
    (nextIntl.useTranslations as jest.Mock).mockReturnValue(() => 'Abmelden');
    render(<Header switchTheme={() => {}} />);
    expect(screen.getByRole('button', { name: 'Abmelden' })).toBeInTheDocument();
  });

  test('displays logout button with Japanese label', () => {
    (nextIntl.useTranslations as jest.Mock).mockReturnValue(() => 'ログアウト');
    render(<Header switchTheme={() => {}} />);
    expect(screen.getByRole('button', { name: 'ログアウト' })).toBeInTheDocument();
  });
});