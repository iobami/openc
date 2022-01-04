import React, { useContext } from 'react';
import { Routes } from '.';
import { AppContext, AppStateType } from '../context';
import useOutsideClick from '../hooks/useOutsideClick';
import { SidebarLayout } from '../layouts';
import ThemeToggle from './themeToggle';

export default function Sidebar() {
  const [{ showNavbar, theme }, { setShowNavbar }] = useContext<AppStateType>(AppContext);

  const callback = () => {
    if (showNavbar && setShowNavbar) {
      setShowNavbar(false);
    }
  };

  const sideRef = useOutsideClick(callback);

  return (
    <SidebarLayout open={showNavbar || false}>
      <div className={`app-sidebar__body ${theme}`} ref={sideRef}>
        <Routes />

        <ThemeToggle />
      </div>
    </SidebarLayout>
  );
}
