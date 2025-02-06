import React from "react";
import { useEffect, useState } from "react";
import '../App.css';

function ReviewPage(props) {
    var [myJSON, setmyJSON] = useState([]);

    useEffect(function(){
        fetch("http://localhost:8586/restBoardList.do?pageNum=1")
        .then((result)=>{
            console.error("결과1");
            console.log('result :>> ', result);
            return result.json();
        })
        .then((json)=>{
            console.error("결과");
            console.log('json :>> ', json);
            setmyJSON(json);
        });
        return () =>{
            console.log('#Life', 'useEffect실행==>컴포넌트 언마운트');
        }
    }, []);

    let trTag = [];
    for(let i=0 ; i<myJSON.length ; i++){
        let data = myJSON[i];
        console.log(data);
        trTag.push(
            <tr key={data.review_id}>
                <td>{ data.title }</td> 
                <td>{ data.nickname }</td> 
                <td>{ data.view_count }</td> 
                <td>{ data.like_count }</td> 
                <td>{ data.postdate }</td> 
            </tr>
        );
    }

    return (
        <div className="review-container">
        <h2 className="review-title">후기 게시판</h2>
        <table className="review-table">
            <thead>
                <tr>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>좋아요</th>
                    <th>작성일</th>
                </tr>
            </thead>
            <tbody>
                {myJSON.map((data) => (
                    <tr key={data.review_id}>
                        <td>{data.title}</td>
                        <td>{data.nickname}</td>
                        <td>{data.view_count}</td>
                        <td>{data.like_count}</td>
                        <td>{data.postdate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default ReviewPage;
