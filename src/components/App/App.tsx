import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Offer from '../Offer/Offer';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Service from '../Service/Service';
import OfferLayout from '../Offer/OfferLayout';
import Footer from '../Footer/Footer';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <main>
        <AnimatePresence>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='oferta/' element={<OfferLayout />}>
              <Route index element={<Offer />} />
              <Route path=':serviceId' element={<Service />} />
            </Route>
            <Route path='galeria' element={<Gallery />} />
            <Route path='kontakt' element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
