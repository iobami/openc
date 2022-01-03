import React, { useContext } from 'react';
import { Routes } from '.';
import { AppContext, AppStateType } from '../context';
import useOutsideClick from '../hooks/useOutsideClick';
import { SidebarLayout } from '../layouts';
import { toggleTheme } from '../utils';

export default function Sidebar() {
  const [{ showNavbar, theme }, { setShowNavbar, setTheme }] = useContext<AppStateType>(AppContext);

  const updateTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    const mode = event.target.checked ? 'dark' : 'light';

    if (setTheme) {
      setTheme(mode);
    }

    toggleTheme(mode);
  };

  const callback = () => {
    if (setShowNavbar) {
      setShowNavbar(false);
    }
  };

  const sideRef = useOutsideClick(callback);

  return (
    <SidebarLayout open={showNavbar || false}>
      <div className={`app-sidebar__body ${theme}`} ref={sideRef}>
        <Routes />

        <button type="button" className="app-sidebar__body__theme-toggle font-semibold mt-20 flex justify-between items-center">
          Night Mode

          <label className={`switch__wrapper ${theme === 'dark' ? 'switch__wrapper--checked' : ''}`}>
            <input className="switch__wrapper__input" role="switch" type="checkbox" checked={theme === 'dark'} onChange={updateTheme} />
          </label>
        </button>
      </div>
    </SidebarLayout>
  );
}
