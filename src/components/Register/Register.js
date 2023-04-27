import React, { useState } from 'react';
import styled from 'styled-components';
import './Register.css'
import { useRecoilValue } from 'recoil';
import { currentUserNameState } from '../../atoms';

const Register = ({onRegister}) => {
    const currentUserName = useRecoilValue(currentUserNameState);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('커피챗');
    const [curNum, setCurNum] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleDateChange = (e) => {
      setDate(e.target.value.replace("T", " "));
    };
  
    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const handleCurNumChange = (e) => {
      setCurNum(e.target.value);
    };

    const validate = () => {
      if (!title) {
        alert("제목을 입력해주세요");
        return false;
      }
      if (!date) {
        alert("날짜를 선택해주세요");
        return false;
      }
      if (!curNum) {
        alert("접수 인원을 골라주세요");
        return false;
      }
      return true;
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (window.confirm("등록하시겠습니까?") && validate()) {
        fetch("http://3.129.194.82:8080/board/write", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            category,
            registrant_count: curNum,
            reveration_date: date,
            writer: currentUserName
          })
        })
              .then(res => res.json())
              .then(res => {
                onRegister();
                setTitle('');
                setDate('');
                setCurNum('');
              });
      }
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
                      type="datetime-local"
                      min={new Date().getFullYear() + "-" + String(new Date().getMonth() + 1).padStart(2, "0") + "-" + String(new Date().getDate()).padStart(2, "0") + "T" + String(new Date().getHours()).padStart(2, "0") + ":" + String(new Date().getMinutes()).padStart(2, "0")}
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