import React, { useState } from "react";
import { Link } from "react-router-dom";

const TravelList = () => {
  // 🔥 Mock 데이터 (백엔드 없이 테스트용)
  const [trips, setTrips] = useState([
    { id: 1, name: "부산 여행", date: "2024-12-01 ~ 12-05", status: "여행 완료" },
    { id: 2, name: "제주도 여행", date: "2024-12-15 ~ 12-20", status: "여행 취소" },
    { id: 3, name: "강릉 한옥마을", date: "2025-01-05 ~ 01-10", status: "계획 중" },
  ]);

  // ✅ 여행 상태 변경 핸들러
  const handleStatusChange = (id, newStatus) => {
    const updatedTrips = trips.map((trip) =>
      trip.id === id ? { ...trip, status: newStatus } : trip
    );
    setTrips(updatedTrips);
  };

  return (
    <div>
      <h1>나의 여행 목록</h1>
      <table border="1">
        <thead>
          <tr>
            <th>여행 이름</th>
            <th>여행 날짜</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <td>
                <Link to={`/trips/${trip.id}`}>{trip.name}</Link>
              </td>
              <td>{trip.date}</td>
              <td>
                {/* ✅ 여행 상태 변경 드롭다운 */}
                <select
                  value={trip.status}
                  onChange={(e) => handleStatusChange(trip.id, e.target.value)}
                >
                  <option value="여행 완료">여행 완료</option>
                  <option value="여행 취소">여행 취소</option>
                  <option value="계획 중">계획 중</option>
                  <option value="기타">기타</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TravelList;
