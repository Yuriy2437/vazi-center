import '../styles/globals.css';

export const metadata = {
  title: 'Vazi Center',
  description: 'Vazi Center website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
