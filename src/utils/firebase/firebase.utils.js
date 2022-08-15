import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRWaWPqZUf7cl0F6reRq8rRQ11In_cpJQ',
  authDomain: 'crwn-clothing-db-9ee0c.firebaseapp.com',
  projectId: 'crwn-clothing-db-9ee0c',
  storageBucket: 'crwn-clothing-db-9ee0c.appspot.com',
  messagingSenderId: '570668881828',
  appId: '1:570668881828:web:ae0260d793fc04b86dd331',
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signWithPopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const addColectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log('done');
};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentAuth = async (userAuth, moreInfo) => {
  if (!userAuth) return;
  const usersDocRef = await doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(usersDocRef);
  if (!userSnapshot.exists()) {
    let { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(usersDocRef, { displayName, email, createdAt, ...moreInfo });
    } catch (error) {
      console.log('houve um erro', error.message);
    }
  }
  return usersDocRef;
};

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!(email && password)) return;
  const authUser = await createUserWithEmailAndPassword(auth, email, password);
  return authUser;
};

export const signIn = async (email, password) => {
  if (!(email && password)) return;
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
};

export const signOutUser = () => signOut(auth);

export const onAuthStateListener = (callback) =>
  onAuthStateChanged(auth, callback);
