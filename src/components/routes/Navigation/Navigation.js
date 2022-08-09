import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/signIn">
            Sign-In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
