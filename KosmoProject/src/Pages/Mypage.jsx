import React, { useState } from 'react';
import '../App.css';

const MyPage = () => {
    const [profile, setProfile] = useState({
        name: '뺵곰',
        email: 'travelisgood@naver.com',
        mapCount: 10,
        travelLevel: 'Explorer',
        points: 1500,
        profilePicture: '/images/default-profile.webp',
    });

    const [chatRooms, setChatRooms] = useState(['서울 여행자 모임', '제주도 맛집 투어', '강릉 힐링 여행']);
    const [friends, setFriends] = useState(['백건우', '윤웅희', '이강산산']);
    const [friendRequests, setFriendRequests] = useState(['김용환', '이가희']);

    const handleEnterChatRoom = (roomName) => {
        alert(`"${roomName}" 채팅방에 입장합니다.`);
        // 채팅방 입장 처리 로직 추가 가능
    };

    const handleLogout = () => {
        alert('로그아웃되었습니다.');
    };

    const handleAccountDeletion = () => {
        const confirmDelete = window.confirm('정말로 회원탈퇴 하시겠습니까?');
        if (confirmDelete) {
            alert('회원탈퇴가 완료되었습니다.');
        }
    };

    return (
        <div className="my-page">
            <h1>마이페이지</h1>

            {/* 프로필 카드 */}
            <div className="profile-card-container">
                <img src={profile.profilePicture} alt="프로필 사진" className="profile-picture" />
                <div className="profile-details">
                    <h2>{profile.name}</h2>
                    <p>{profile.email}</p>
                    <div className="stats">
                        <div>
                            <strong>지도 만든 횟수</strong>
                            <p>{profile.mapCount}</p>
                        </div>
                        <div>
                            <strong>회원 등급</strong>
                            <p>{profile.travelLevel}</p>
                        </div>
                        <div>
                            <strong>포인트</strong>
                            <p>{profile.points} P</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 생성한 채팅 방 목록 */}
            <section className="chat-room-section card">
                <h3>생성한 채팅 방 목록</h3>
                <ul>
                    {chatRooms.map((room, index) => (
                        <li key={index} className="chat-room-item">
                            <span>{room}</span>
                            <button className="enter-button" onClick={() => handleEnterChatRoom(room)}>
                                입장
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 친구 목록 보기 */}
            <section className="friends-list-section card">
                <h3>친구 목록</h3>
                <ul>
                    {friends.map((friend, index) => (
                        <li key={index}>{friend}</li>
                    ))}
                </ul>
            </section>

            {/* 친구 요청 수락 */}
            <section className="friend-requests-section card">
                <h3>친구 요청</h3>
                {friendRequests.length === 0 ? (
                    <p>친구 요청이 없습니다.</p>
                ) : (
                    <ul>
                        {friendRequests.map((request, index) => (
                            <li key={index}>
                                {request}
                                <button
                                    className="accept-button"
                                    onClick={() => {
                                        setFriends([...friends, request]);
                                        setFriendRequests(friendRequests.filter((r) => r !== request));
                                        alert(`${request}님을 친구로 추가했습니다.`);
                                    }}
                                >
                                    수락
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* 로그아웃 및 회원탈퇴 */}
            <section className="logout-section card">
                <button className="small-button logout-button" onClick={handleLogout}>로그아웃</button>
                <button className="small-button delete-account-button" onClick={handleAccountDeletion}>
                    회원탈퇴
                </button>
            </section>
        </div>
    );
};

export default MyPage;
