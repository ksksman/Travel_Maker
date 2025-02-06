import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';  // MyPage.jsx를 import
import ReviewPage from './Pages/ReviewPage';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <HashRouter>
            <Header toggleMenu={toggleMenu} />
            <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mypage" element={<MyPage />} /> {/* 마이페이지 라우트 추가 */}
                <Route path="/board" element={<ReviewPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
