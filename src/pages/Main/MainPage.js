import React from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Board from '../../components/Board/Board';

const MainPage = (props) => {


    return(
        <div>
            <Header />
            <Board title={0} />
            <Footer />
        </div>
    )
}

export default MainPage;