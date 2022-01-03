import React, { useContext } from 'react';
import { AppContext, AppStateType } from '../context';
import { toggleTheme } from '../utils';
import Switch from './switch';

export default function ThemeToggle() {
  const [{ theme }, { setTheme }] = useContext<AppStateType>(AppContext);

  const updateTheme = () => {
    const mode = theme === 'light' ? 'dark' : 'light';

    if (setTheme) {
      setTheme(mode);
    }

    toggleTheme(mode);
  };

  return (
    <button onClick={updateTheme} type="button" className="app-sidebar__body__theme-toggle font-semibold mt-20 flex justify-between items-center">
      Night Mode

      <Switch checked={theme === 'dark'} onChange={updateTheme} />
    </button>
  );
}
