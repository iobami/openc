import '../../public/css/tailwind.min.css';
import '../../public/css/globals.css';
import '../../public/css/responsive.css';

import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { MainLayout } from '../layouts';
import { AppProvider } from '../context';
import { useStore, epicMiddleware } from '../redux/store';
import rootEpic from '../redux/rootEpic';

export default function App({ Component, pageProps }: AppProps) {
  const nextState = {
    entities: {
      collections: {
        data: [],
        item: {},
      },
    },
  };

  const store = useStore(nextState);

  epicMiddleware.run(rootEpic);

  return (
    <Provider store={store}>
      <AppProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AppProvider>
    </Provider>
  );
}
