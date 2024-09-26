'use client';

import { Provider } from 'react-redux';
import { store } from '../store';
import MainMenuWrapper from '../components/MainMenuWrapper';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Provider store={store}>
          <MainMenuWrapper />
          {children}
        </Provider>
      </body>
    </html>
  );
}
