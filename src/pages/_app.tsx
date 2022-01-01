import '../../public/css/tailwind.min.css';
import '../../public/css/globals.css';
import '../../public/css/responsive.css';

import type { AppProps } from 'next/app';
import React from 'react';
import { MainLayout } from '../layouts';
import { AppProvider } from '../context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  );
}
