import React from 'react';
import Header from '../../components/Common/Header';
import Footer from '../../components/Common/Footer';
import Board from '../../components/Board/Board';
import Register from '../../components/Register/Register';

const MainPage = (props) => {


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