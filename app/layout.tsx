import Providers from './providers';
import './styles/globals.css';

export const metadata = {
  title: 'Cartographers',
  description: 'Cartographers game',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
