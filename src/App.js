import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Card from './components/Card';

function App() {
  return (
    <Routes>
      <Route  path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        
        {/* <Route path='about element={<Home />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} /> */}
      </Route>

    </Routes>

   

  );
}

export default App;
