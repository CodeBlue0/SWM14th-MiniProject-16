import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Board from '../../components/Board/Board';
import Register from '../../components/Register/Register';
import { useRecoilValue } from 'recoil';
import { currentUserNameState } from '../../atoms';
import { useNavigate } from 'react-router';

const MainPage = (props) => {
    const currentUserName = useRecoilValue(currentUserNameState);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const getLatestData = useCallback(() => {
        fetch("http://3.129.194.82:8080/board/list")
            .then(res => res.json())
            .then(res => setData(data => res.data));
    }, [setData]);
    
    useEffect(() => {
        if (!currentUserName) {
            navigate("/login");
        }
        getLatestData();
    }, [currentUserName, getLatestData, navigate])

    return(
        <div>
            <Header />
            <Board pageTitle={"C / O / M / M / U / N / I / T / Y"} data={data} onJoin={getLatestData} />
            <Register onRegister={getLatestData} />
            <Footer />
        </div>
    )
}

export default MainPage;