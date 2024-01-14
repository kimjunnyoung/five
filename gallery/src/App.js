import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Common/Header';
import MainPage from './Main/Main';
import Footer from './Common/Footer';
import Exhibition from './Exhibition/Exhibition';
import ExhibitionDetail from './Exhibition/ExhibitionDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/exhibition' element={<Exhibition />} />
        <Route path='/exhibition/:id' element={<ExhibitionDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
