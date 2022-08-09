import Home from './components/routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/Navigation/Navigation';
import SignIn from './components/routes/Sign-in/SignIn';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={'/shop'} element={<Shop />} />
          <Route path={'/signIn'} element={<SignIn />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
