import Head from 'next/head';
import { AlertProvider, AuthProvider } from '@/shared/lib';
import { QueryProvider } from './providers';
import './styles/globals.css';

export const metadata = {
  title: 'Cartographers',
  description: 'Cartographers game',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <body>
        <AuthProvider>
          <AlertProvider>
            <QueryProvider>{children}</QueryProvider>
          </AlertProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
