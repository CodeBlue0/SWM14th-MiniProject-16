import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const LoginForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const loginErrorMessageRef = useRef();
    
    const clearErrorMessage = () => {
        loginErrorMessageRef.current.innerText = '';
    }

    const writeErrorMessage = (errorMessage) => {
        loginErrorMessageRef.current.innerText = `⚠️ ${errorMessage}`;
    }

    const handleChangeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleClickLogin = (e) => {
        e.preventDefault();
        if (!name) {
            writeErrorMessage("이름을 입력해야 합니다");
            return;
        }
        onLogin(name);
    }

    return (
        <Form>
            <NameInput 
                placeholder='이름을 입력해 주세요'
                onChange={handleChangeName}
                onFocus={() => {clearErrorMessage()}}
                value={name}
            />
            <LoginErrorMessage ref={loginErrorMessageRef}></LoginErrorMessage>
            <LoginButton onClick={handleClickLogin}>로 그 인</LoginButton>
        </Form>
    )
}

const Form = styled.form`
    width: 480px;
    height: 220px;
    margin: 80px auto 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NameInput = styled.input`
    display: block;
    padding: 0 20px;
    height: 60px;
    border: 0.75px solid #828282;
    border-radius: 25px;
    font-size: 20px;

    &::placeholder {
        color: #d8d8d8;
        font-weight: 100;
    }
`;

const LoginErrorMessage = styled.p`
    color: #f0382b;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
`

const LoginButton = styled.button`
    width: 100%;
    height: 120px;

    background: linear-gradient(180deg, rgba(128, 190, 236, 0.81) 0%, rgba(0, 10, 255, 0.66) 100%);
    border-radius: 25px;
    border: 0;
    cursor: pointer;

    font-weight: 600;
    font-size: 32px;
    line-height: 20px;
    color: #FFFFFF;
`

export default LoginForm;