import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { UserContext } from '../../../Context/userContext';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
function Navigation() {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
