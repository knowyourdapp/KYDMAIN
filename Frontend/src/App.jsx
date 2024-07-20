import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import Homepage from './components/homepage';
import About from './components/about';
import Dapp from './components/dapp';
import Rankings from './components/rankings';
import Footer from './components/footer';
import Index from './components/index';
import Feedpage from './components/feedpage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                
                <Route path="/about" element={<About />} />
                <Route path="/rankings" element={<Rankings />} />
                <Route path="/dapp" element={<Dapp />} />
                <Route path="/feed" element={<Feedpage />} />
            </Routes>
            
        </Router>
    );
};
export default App;
