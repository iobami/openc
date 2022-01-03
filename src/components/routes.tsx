import Link from 'next/link';
import React from 'react';

import { useActiveRoute } from '../hooks';
import { routes } from '../utils';

export default function Routes() {
  const [isActive] = useActiveRoute();

  return (
    <div className="app-nav__routes-and-actions__routes">
      <Link href={routes.entry.path}>
        <a className={`app-nav__routes-and-actions__routes__a ${isActive(routes.entry.path) ? 'app-nav__routes-and-actions__routes__a--active' : ''}`} href={routes.entry.path}>Marketplace</a>
      </Link>
    </div>
  );
}
