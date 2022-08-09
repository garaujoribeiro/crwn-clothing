import React from 'react';
import {
  signWithPopup,
  createUserDocumentAuth,
} from '../../../utils/firebase/firebase.utils';
import SignUp from '../../Sign-up/Sign-up';
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signWithPopup();
    const userDocRef = await createUserDocumentAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>sign-in with google</button>
      <SignUp />
    </div>
  );
}

export default SignIn;
