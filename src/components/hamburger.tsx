import React, { Fragment } from 'react';

interface IProps {
  open: boolean;
  handleHamburger: () => void;
}

export default function Hamburger(props: IProps) {
  const { open, handleHamburger } = props;

  return (
    <Fragment>
      <button
        onClick={handleHamburger}
        className={`btn btn-lg navbar-toggler p-0 ${open ? 'show' : ''}`}
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <style>
        {`
          button.navbar-toggler:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          
          .navbar-toggler span {
            height: 2px;
            width: 24px;
            background-color: var(--tx-main);
            display: block;
            border-radius: 5px;
            transition: 0.3s ease;
            margin-bottom: 6px;
          }
          
          .navbar-toggler span:last-child {
            margin-bottom: 0;
          }
          
          .navbar-toggler.show span:nth-child(1) {
            transform: translateY(10px) rotateZ(-45deg);
          }
          
          .navbar-toggler.show span:nth-child(2) {
            opacity: 0;
          }
          
          .navbar-toggler.show span:nth-child(3) {
            transform: translateY(-7px) rotateZ(45deg);
          }
        `}
      </style>
    </Fragment>
  );
}
