import React, { Fragment, ReactElement } from 'react';
import { Header } from '../components';

interface IProps {
  children: ReactElement;
}

export default function Main({ children }: IProps) {
  return (
    <Fragment>
      <Header />
      <main className="app-main mx-auto">{children}</main>
    </Fragment>
  );
}
