import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardEle from './BoardEle';
import "./Board.css";

const Board = (props) => {
    const [title, setTitle] = useState('');
    useEffect(() => {
        if (props.title === 0) {
            setTitle("C / O / M / M / U / I / T / Y");
        } else {
            setTitle("M / Y / P / A / G / E");
        }
    }, []);

    return(
        <div>
            <BoardHeader>
                <BoardTitle>{title}</BoardTitle>
            </BoardHeader>
            <div className="board-element-list">
                <BoardEle no='0'/>
                <BoardEle no='1'/>
                <BoardEle no='2'/>
            </div>
        </div>
    )
}

const BoardHeader = styled.header`
    position: relative;
    width: 90%;
    height: 120px;
    margin: 0 auto 0;
`

const BoardTitle = styled.h1`
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

export default Board;