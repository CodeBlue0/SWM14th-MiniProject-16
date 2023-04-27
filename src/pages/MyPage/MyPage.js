import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Board from '../../components/Board/Board';
import { useRecoilValue } from 'recoil';
import { currentUserNameState } from '../../atoms';
import { useNavigate } from 'react-router';

const MyPage = (props) => {
    const currentUserName = useRecoilValue(currentUserNameState);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!currentUserName) {
            navigate("/");
        }

        fetch(`http://3.129.194.82:8080/board/mypage/${currentUserName}`)
        .then(res => res.json())
        .then(res => setData(data => res.data));
    }, [setData, currentUserName, navigate])

    return(
        <div>
            <Header />
            <Board pageTitle={"M / Y / P / A / G / E"} data={data} />
            <Footer />
        </div>
    )
}

export default MyPage;