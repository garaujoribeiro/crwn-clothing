import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUserDocumentAuth, getCollectionAndDocuments, onAuthStateListener } from './utils/firebase/firebase.utils';
import Home from './components/routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/Navigation/Navigation';
import Auth from './components/routes/Auth/Auth';
import Shop from './components/routes/Shop/Shop';
import Checkout from './components/routes/Checkout/Checkout';
import { setCurrentUser } from './store/user/user.action'
import { setProduct } from './store/products/product-action';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const listener = onAuthStateListener((user) => {
      if (user) {
        createUserDocumentAuth(user)
      }
      dispatch(setCurrentUser(user));
    });
    return listener;
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollectionAndDocuments();
      dispatch(setProduct(data));
    };
    fetchData();
  }, []);

  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={'/shop/*'} element={<Shop />} />
          <Route path={'/auth'} element={<Auth />} />
          <Route path={'/checkout'} element={<Checkout />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
