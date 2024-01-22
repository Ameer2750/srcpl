import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Card from './components/Card';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PortfolioPage from './components/PortfolioPage';
import pageImage from './assets/card2.jpg'
import Solutions from './pages/Solutions';


const portfolioData = [

  {
    id:1,
    img:pageImage,
    header:'MistMitsubishi Products:',
    subHeader1:'PLC (Programmable Logic Controllers)' ,
    para1:' Our Mitsubishi PLCs offer precision control and automation for a wide range of industrial applications. With advanced features and robust design, they form the backbone of efficient manufacturing processes.,'

  }
]

function App() {
  return (
    <Routes>
      <Route  path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/our-portfolio' element={<Portfolio/>}/>
        <Route path='/portfolio-page' element={<PortfolioPage subHeader1={portfolioData[0].subHeader1}   para1={portfolioData[0].para1} img={portfolioData[0].img} header={portfolioData[0].header} />}/>
        <Route path='/solutions' element={<Solutions/>}/>
        
        {/* <Route path='about element={<Home />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route index element={<Home />} /> */}
      </Route>

    </Routes>

   

  );
}

export default App;
