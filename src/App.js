import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Appointments from './components/Appointments.js';
import Reviews from './components/Reviews.js';

import { Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {

  },
  typography: {
    h3: {
      fontFamily: [
        'Bakbak One',
      ].join(','),
    },
    h5: {
      fontFamily: [
        'Bakbak One',
      ].join(','),
      fontSize: '2rem',
    },
    h6: {
      fontFamily: [
        'Bakbak One',
      ].join(','),
      fontSize: '1.75rem',
    },
    body1: {
      fontFamily: [
        'Anuphan',
      ].join(','),
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily: [
        'Anuphan',
      ].join(','),
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle1: {
      fontFamily: [
        'Anuphan',
      ].join(','),
      fontWeight: 600,
      fontSize: '1.15rem',
    },
    caption: {
      fontFamily: [
        'Anuphan',
      ].join(','),
      fontWeight: 400,
      fontSize: '0.9rem',
    },
  },
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout theme={theme} />}>
          <Route index element={<Home theme={theme} />} />
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
