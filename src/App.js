import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Waitinglist from './Waitinglist/Waitinglist';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitlist" element={<Waitinglist />} />
        </Routes>
        </div>
    </Router> )
}   

export default App;
