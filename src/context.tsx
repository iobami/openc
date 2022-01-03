import React, { useState, createContext, useEffect } from 'react';

import { useRouter } from 'next/router';
import { getTheme, toggleTheme } from './utils';

export type AppStateType = Array<{
  theme?: 'dark' | 'light';
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
}>;

const AppContext = createContext([{}, () => {}]);

interface IProps {
  children: any;
}

const defaultTheme = 'dark';

const AppProvider = (props: IProps) => {
  const { children } = props;

  const router = useRouter();

  const [theme, setTheme] = useState(defaultTheme);

  const state = { theme };

  const setState = { setTheme };

  useEffect(() => {
    const mode = getTheme() || defaultTheme;
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
