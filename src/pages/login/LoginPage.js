import React from 'react';
import styled from "styled-components";
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
    return(
        <div>
            <LoginHeader>
                <LoginTitle>L / O / G / I / N</LoginTitle>
            </LoginHeader>
            <LoginForm />
        </div>
    )
}

const LoginHeader = styled.header`
    position: relative;
    width: 90%;
    height: 120px;
    margin: 100px auto 0;
    box-shadow: inset 0px -0.5px 0px rgba(0, 0, 0, 0.25);
`

const LoginTitle = styled.h1`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    font-weight: 600;
    font-size: 48px;
    line-height: 20px;
    color: #9B9B9B;
`

export default LoginPage;