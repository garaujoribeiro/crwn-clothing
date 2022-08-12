import Home from './components/routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/Navigation/Navigation';
import Auth from './components/routes/Auth/Auth';
import Shop from './components/routes/Shop/Shop';

function App() {
  return (
    <main>
      <Routes>
        <Route path={'/'} element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={'/shop'} element={<Shop />} />
          <Route path={'/auth'} element={<Auth />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
