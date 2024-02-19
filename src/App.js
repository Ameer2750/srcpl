import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Card from './components/Card';
import About from './pages/About';
import Contact from './pages/Contact';
import pageImage from './assets/card2.jpg'
import Solutions from './pages/Solutions';
import Principles from './pages/Principles';
import { useState } from 'react';

import Products from './pages/Products';
import ProductsPage from './components/ProductsPage';
import BgImage1 from './assets/img_mv-1.png'
import BgImage2 from './assets/mv-index-2.jpg'
import BgImage3 from './assets/mv-index.jpg'
import BgImage4 from './assets/mv-index-2.jpg'
import BgImage5 from './assets/mv-index.jpg'




function App() {

    // const [productsPageData, setProductsPageData] = useState([]);

    // const handleProductsData = (data) => {
        
    //     setProductsPageData(dataP[data]);
        
    // }



    return (
        <Routes>
            <Route path='/' element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products-page/:productId' element={<ProductsPage />} />
                <Route path='/solutions' element={<Solutions />} />
                <Route path='/principles' element={<Principles />} />
            </Route>
        </Routes>



    );
}

export default App;
