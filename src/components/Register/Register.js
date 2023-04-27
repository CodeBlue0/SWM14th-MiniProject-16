import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Register.css'

const Register = (props) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('커피챗');
    const [curNum, setCurNum] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleCurNumChange = (e) => {
      setCurNum(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(title);
      console.log(date);
      console.log(category);
      console.log(curNum);
    };
  
    return (
      <>
        <RegisterHeader>
          <RegisterTitle>R / E / G / I / S / T / E / R</RegisterTitle>
        </RegisterHeader>
        <div className="register-section">
          <div className="RegisterBoxBold">
            <div className="RtitleOp">제목</div>
            <div className="RtimeOp">날짜 및 시간</div>
            <div className="RtypeOp">카테고리</div>
            <div className="RcurNumOp">접수 인원</div>
          </div>
    
          <form onSubmit={handleSubmit}>
              <div className="RegisterBox">
                  <div className="RtitleOp">
                      <input type="text" value={title} onChange={handleTitleChange} />
                  </div>
                  <div className="RtimeOp">
                      <input
                      type="date"
                      min="2023-04-27"
                      max="2023-12-31"
                      value={date}
                      onChange={handleDateChange}
                      />
                  </div>
                  <div className="RtypeOp">
                      <select value={category} onChange={handleCategoryChange}>
                        <option value="커피챗">커피챗</option>
                        <option value="식사챗">식사챗</option>
                      </select>
                  </div>
                  <div className="RcurNumOp">
                      <input
                      type="number"
                      min="1"
                      max="10"
                      value={curNum}
                      onChange={handleCurNumChange}
                      />
                  </div>
              </div>
              <div className="submit-button">
                  <SubmitButton type="submit">등록하기</SubmitButton>
              </div>
          </form>
        </div>
      </>
    );
  };

const RegisterHeader = styled.header`
    position: relative;
    width: 90%;
    height: 120px;
    margin: 0 auto 0;
`

const RegisterTitle = styled.h1`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    font-weight: 600;
    font-size: 30px;
    line-height: 20px;
    color: #9B9B9B;
`

const SubmitButton = styled.button`
    background-color: #FFFFFF;
    color: #9B9B9B;
    border: 1px solid #9B9B9B;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 20px auto 0;
    display: block;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #9B9B9B;
        color: #FFFFFF;
        border: 1px solid #9B9B9B;
    }

    &:active {
        background-color: #333333;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
`;

export default Register;