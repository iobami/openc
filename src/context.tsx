import React, { useState, createContext, useEffect } from 'react';

import { useRouter } from 'next/router';
import { getTheme, toggleTheme } from './utils';

const AppContext = createContext([{}, () => {}]);

interface IProps {
  children: any;
}

const AppProvider = (props: IProps) => {
  const { children } = props;

  const router = useRouter();

  const [theme, setTheme] = useState('dark');

  const state = { theme };

  const setState = { setTheme };

  useEffect(() => {
    const mode = getTheme() || '';
    toggleTheme(mode);

    setTheme(mode);
  }, [router.pathname]);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
