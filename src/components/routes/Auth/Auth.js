import React from 'react';
import SignIn from '../../Sign-in/SignIn';
import SignUp from '../../Sign-up/Sign-up';
import './auth.styles.scss';
function Auth() {
  return (
    <section className="auth-container">
      <SignIn />
      <SignUp />
    </section>
  );
}

export default Auth;
