import React, { Fragment, ReactElement, useContext } from 'react';
import { Header, Sidebar } from '../components';
import { AppContext, AppStateType } from '../context';

interface IProps {
  children: ReactElement;
}

export default function Main({ children }: IProps) {
  const [{ showNavbar }] = useContext<AppStateType>(AppContext);

  return (
    <Fragment>
      <Header />
      <Sidebar />

      <main className={`app-main mx-auto ${showNavbar ? 'overflow-is-hidden' : ''}`}>{children}</main>
    </Fragment>
  );
}
