import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <li><Link to="/schedule" onClick={closeMenu}>일정 만들기</Link></li>
                <li><Link to="/schedule/load" onClick={closeMenu}>일정 불러오기</Link></li>
                <li><Link to="/schedule/share" onClick={closeMenu}>일정 공유하기</Link></li>
            </ul>
            <hr />
            <ul>
                <li><Link to="/notice" onClick={closeMenu}>공지사항</Link></li>
                <li><Link to="/board" onClick={closeMenu}>후기 게시판</Link></li>
            </ul>
            <hr />
            <ul>
                <li><Link to="/info/food" onClick={closeMenu}>맛집 정보</Link></li>
                <li><Link to="/info/accommodation" onClick={closeMenu}>숙소 정보</Link></li>
                <li><Link to="/info/activity" onClick={closeMenu}>액티비티 정보</Link></li>
            </ul>
            <hr />
            <ul>
                <li><Link to="/mypage" onClick={closeMenu}>마이페이지</Link></li>
            </ul>

            {/* 들어가기 버튼 */}
            <button className="enter-menu-button" onClick={closeMenu}>닫기</button>
        </div>
    );
};

export default SideMenu;
