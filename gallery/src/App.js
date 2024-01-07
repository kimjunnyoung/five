import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Common/Header';
import MainPage from './Main/Main';
import './App.css';
import Footer from './Common/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
