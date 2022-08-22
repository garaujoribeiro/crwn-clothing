import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import CardIcon from '../../CardIcon/CardIcon';
import CardDropdown from '../../Cart-dropdown/CardDropdown';
import { useSelector } from 'react-redux'

function Navigation() {

  const currentUser = useSelector((state) => state.user.currentUser)

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
          {!currentUser ? (
            <Link className="nav-link" to="/auth">
              Sign-In
            </Link>
          ) : (
            <Link className="nav-link" to="/auth" onClick={() => signOutUser()}>
              Sign-Out
            </Link>
          )}
          <CardIcon />
          <CardDropdown />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
