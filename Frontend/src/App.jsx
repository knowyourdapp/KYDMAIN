import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar2';
import Home from './components/home';
import Homepage from './components/homepage';
import About from './components/about';
import Dapp from './components/dapp';
import Rankings from './components/explore';
import Footer from './components/footer';
import Index from './components/index';
import Feedpage from './components/feedpage';
import Curate from './components/curate';
import Submit from './components/submitdApp';
import FormDataList from './components/formdatalist';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/home" element={<Homepage />} />
                
                <Route path="/about" element={<About />} />
                <Route path="/explore" element={<Rankings />} />
                <Route path="/dapp" element={<Dapp />} />
                <Route path="/feed" element={<Feedpage />} />
                <Route path="/curate" element={<Curate />} />
                <Route path="/submitdApp" element={<Submit/>} />
                <Route path="/formdatalist" element={<FormDataList/>} />
            </Routes>
            
        </Router>
    );
};
export default App;
