import Home from './pages/Home.js';
import About from './pages/About.js';
import Appointments from './pages/Appointments.js';
import Reviews from './pages/Reviews.js';

import { Routes, Route, Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Business Name</Link>
        </li>
        <li>
          <Link to='about'>About</Link>
        </li>
        <li>
          <Link to='appointments'>Appointments</Link>
        </li>
        <li>
          <Link to='reviews'>Reviews</Link>
        </li>
      </ul>
    </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
