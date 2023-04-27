import React from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Board from '../../components/Board/Board';

const MyPage = (props) => {


    return(
        <div>
            <Header />
            <Board title={1} />
            <Footer />
        </div>
    )
}

export default MyPage;