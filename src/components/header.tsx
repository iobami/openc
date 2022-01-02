import React from 'react';
import { AccountOutline, WalletIcon } from './svgs';

export default function Header() {
  return (
    <nav className="app-nav-wrapper">
      <div className="app-nav mx-auto">
        <a className="app-nav__logo flex items-center" href="http://" title="home">
          <img className="mr-3" height={40} width={40} src="/imgs/logo.svg" alt="openc logo" />

          <span className="text-2xl font-bold" title="openc">OpenC</span>
        </a>

        <div className="app-nav__routes-and-actions flex justify-end items-center">
          <div className="app-nav__routes-and-actions__routes">
            <a className="app-nav__routes-and-actions__routes__a app-nav__routes-and-actions__routes__a--active" href="http://">Marketplace</a>
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
