import {
  AlertProvider,
  AuthProvider,
  QueryProvider,
  SocketProvider,
} from './providers';
import './styles/globals.css';

export const metadata = {
  title: 'Cartographers',
  description: 'Cartographers game',
  icons: '/icon.png',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AlertProvider>
            <QueryProvider>
              <SocketProvider>{children}</SocketProvider>
            </QueryProvider>
          </AlertProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
