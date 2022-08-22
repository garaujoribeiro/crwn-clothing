import React, { useState, useContext } from 'react';
import {
  signWithPopup,
  createUserDocumentAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input';
import Button from '../button/Button';
import { signIn } from '../../utils/firebase/firebase.utils';
import { useSelector } from 'react-redux';
const defaultFormField = {
  email: '',
  password: '',
};

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormField);

  const { email, password } = formFields;

  const currentUser = useSelector((state) => state.user.currentUser)

  console.log(currentUser);

  const resetForm = () => {
    setFormFields(defaultFormField);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signWithPopup();
      createUserDocumentAuth(user);
    } catch (error) {
      alert(error);
    }
  };

  const logEmailPassword = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signIn(email, password);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <section className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your e-mail and password</span>
      <form onSubmit={logEmailPassword}>
        <FormInput
          label={'Email'}
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={'google'}
            onClick={() => logGoogleUser()}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </section>
  );
}

export default SignIn;
