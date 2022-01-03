import Link from 'next/link';
import React from 'react';
import { useActiveRoute } from '../hooks';
import { routes } from '../utils';
import { AccountOutline, WalletIcon } from './svgs';

export default function Header() {
  const [isActive] = useActiveRoute();

  return (
    <nav className="app-nav-wrapper">
      <div className="app-nav mx-auto">
        <Link href={routes.entry.path}>
          <a className="app-nav__logo flex items-center" href={routes.entry.path} title="home">
            <img className="mr-3" height={40} width={40} src="/imgs/logo.svg" alt="openc logo" />

            <span className="text-2xl font-bold" title="openc">OpenC</span>
          </a>
        </Link>

        <div className="app-nav__routes-and-actions flex justify-end items-center">
          <div className="app-nav__routes-and-actions__routes">
            <Link href={routes.entry.path}>
              <a className={`app-nav__routes-and-actions__routes__a ${isActive(routes.entry.path) ? 'app-nav__routes-and-actions__routes__a--active' : ''}`} href={routes.entry.path}>Marketplace</a>
            </Link>
          </div>

          <div className="app-nav__routes-and-actions__actions flex items-center">
            <AccountOutline />

            <WalletIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
