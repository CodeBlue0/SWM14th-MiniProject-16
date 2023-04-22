import React from 'react';
import { currentUserNameState } from '../../atoms';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from "styled-components";
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
    const [ , setCurrentUserName] = useRecoilState(currentUserNameState);
    const navigate = useNavigate();

    const login = (name) => {
        setCurrentUserName(name);
        navigate("/");
    }

    return(
        <div>
            <LoginHeader>
                <LoginTitle>L / O / G / I / N</LoginTitle>
            </LoginHeader>
            <LoginForm onLogin={login}/>
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