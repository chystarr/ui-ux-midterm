import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Appointments from './components/Appointments.js';
import Reviews from './components/Reviews.js';

import { Routes, Route } from 'react-router-dom';

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
