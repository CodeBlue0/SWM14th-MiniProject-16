import React, { useEffect } from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Board from '../../components/Board/Board';
import Register from '../../components/Register/Register';
import { useRecoilValue } from 'recoil';
import { currentUserNameState } from '../../atoms';
import { useNavigate } from 'react-router';

const MainPage = (props) => {
    const currentUserName = useRecoilValue(currentUserNameState);
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUserName) {
            navigate("/login");
        }
    }, [currentUserName])

    return(
        <div>
            <Header />
            <Board title={0} />
            <Register />
            <Footer />
        </div>
    )
}

export default MainPage;