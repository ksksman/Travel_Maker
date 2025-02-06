import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const TravelDetail = () => {
  const { id } = useParams();

  // 🔥 Mock 데이터 (나중에 백엔드 연결하면 API로 가져올 것)
  const mockData = {
    1: {
      name: "부산 해운대 주변 여행",
      date: "2024-12-01 ~ 2024-12-05",
      myReview: "직운으로 가는게 편함. 신혼 때 갔다온 곳인데 다시 와도 좋다.",
      itinerary: {
        1: ["씨라이프 부산 아쿠아리움", "동백섬", "부산시립미술관 본관", "해운대 블루라인파크", "감천문화마을"],
        2: ["자갈치시장", "송도해수욕장", "부산타워", "BIFF 거리"],
      },
      rating: 3, // ⭐️⭐️⭐️ (5점 만점)
    },
  };

  // 선택한 여행 데이터 가져오기
  const trip = mockData[id];

  // ✅ 상태 관리
  const [rating, setRating] = useState(trip?.rating || 0);
  const [selectedDay, setSelectedDay] = useState(1);

  if (!trip) return <p>여행 정보를 찾을 수 없습니다.</p>;

  // ✅ 별점 변경 핸들러
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", maxWidth: "600px" }}>
      <h1>{trip.name}</h1>
      <p><strong>여행 기간:</strong> {trip.date}</p>

      {/* 🔥 내 여행 후기 */}
      <p><strong>내 여행 후기:</strong></p>
      <p>{trip.myReview}</p>

      {/* 🔥 일차별 일정 선택 */}
      <div>
        <strong>여행 일정:</strong>
        {Object.keys(trip.itinerary).map((day) => (
          <button key={day} onClick={() => setSelectedDay(day)}>
            {day}일차
          </button>
        ))}
      </div>

      {/* 🔥 선택된 일정 표시 */}
      <div>
        <h3>{selectedDay}일차</h3>
        <ul>
          {trip.itinerary[selectedDay]?.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </div>

      {/* 🔥 별점 평가 */}
      <div>
        <p><strong>나의 평점:</strong></p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingChange(star)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: star <= rating ? "gold" : "gray",
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* 🔥 버튼 영역 */}
      <div style={{ marginTop: "20px" }}>
        <button>게시물에 공유</button>
        <button>엑셀로 정보 저장</button>
        <button style={{ backgroundColor: "red", color: "white" }}>삭제</button>
      </div>

      <Link to="/">목록으로 돌아가기</Link>
    </div>
  );
};

export default TravelDetail;
