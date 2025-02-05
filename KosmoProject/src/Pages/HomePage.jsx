import React from 'react';
import BannerSlider from '../components/BannerSlider';

const HomePage = () => {
    return (
        <div className="main-container">
            <BannerSlider />
            <div className="content-boxes">
                <div className="content-box">
                    <h2>연령별 추천 여행지</h2>
                    <img src="https://via.placeholder.com/300x200" alt="통계 그래프" />
                </div>
                <div className="content-box">
                    <h2>공지사항</h2>
                    <ul>
                        <li>공지사항 1</li>
                        <li>공지사항 2</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
