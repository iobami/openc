import React, { ReactElement } from 'react';

interface IProps {
  children: ReactElement;
  open: boolean;
}

export default function Sidebar({ children, open }: IProps) {
  return (
    <aside className={`app-sidebar ${open ? 'show' : ''}`}>
      {children}
    </aside>
  );
}
