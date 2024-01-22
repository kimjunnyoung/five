import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Common/Header';
import MainPage from './Main/Main';
import Footer from './Common/Footer';
import Exhibition from './Exhibition/Exhibition';
import ExhibitionDetail from './Exhibition/ExhibitionDetail';
import Artist from './Artist/Artist';
import ArtistDetail from './Artist/ArtistDetail'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/artistdetail' element={<ArtistDetail />} />
        <Route path='/exhibition' element={<Exhibition />} />
        <Route path='/exhibition/:id' element={<ExhibitionDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
