import React from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Board from '../../components/Board/Board';

const MyPage = (props) => {


    return(
        <div>
            <Header />
            <Board pageTitle={"M / Y / P / A / G / E"} />
            <Footer />
        </div>
    )
}

export default MyPage;