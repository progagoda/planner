import './global.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  title: 'Welcome to demo2',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  'use client'
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}