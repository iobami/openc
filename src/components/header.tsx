import Link from 'next/link';
import React, { useContext } from 'react';
import { Routes } from '.';
import { AppContext, AppStateType } from '../context';
import { routes, upcomingFeature } from '../utils';
import Hamburger from './hamburger';
import { AccountOutline, WalletIcon } from './svgs';

export default function Header() {
  const [{ showNavbar }, { setShowNavbar }] = useContext<AppStateType>(AppContext);

  const handleHamburger = () => (setShowNavbar ? setShowNavbar(!showNavbar) : null);

  return (
    <nav className="app-nav-wrapper">
      <div className="app-nav mx-auto">
        <Link href={routes.entry.path}>
          <a className="app-nav__logo flex items-center" href={routes.entry.path} title="home">
            <img className="mr-3" height={40} width={40} src="/imgs/logo.svg" alt="openc logo" />

            <span className="text-2xl font-bold" title="openc">OpenC</span>
          </a>
        </Link>

        <div className="app-nav__routes-and-actions hidden lg:flex justify-end items-center">
          <Routes />

          <div className="app-nav__routes-and-actions__actions flex items-center">
            <AccountOutline />

            <WalletIcon onClick={upcomingFeature} />
          </div>
        </div>

        <div className="app-nav__routes-and-actions mobile block lg:hidden">
          <Hamburger open={showNavbar || false} handleHamburger={handleHamburger} />
        </div>
      </div>
    </nav>
  );
}
