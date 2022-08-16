import { createContext, useState, useEffect, useReducer } from 'react';
import { onAuthStateListener } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

/*
const userReduzer = (state,action) =>{
  return{
    currentUser:

  }
}
*/

const UserProvider = ({ children }) => {
  useEffect(() => {
    const listener = onAuthStateListener((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return listener;
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


export default UserProvider;
