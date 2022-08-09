import React from 'react';
import {
  signWithPopup,
  createUserDocumentAuth,
} from '../../../utils/firebase/firebase.utils';
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signWithPopup();
    const userDocRef = await createUserDocumentAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>sign-in with google</button>
    </div>
  );
}

export default SignIn;
