import React from 'react';
import styled from 'styled-components';
import BoardEle from './BoardEle';
import "./Board.css";

const Board = ({pageTitle, data, onJoin}) => {
    return(
        <div>
            <BoardHeader>
                <BoardTitle>{pageTitle}</BoardTitle>
            </BoardHeader>
            <div className="board-element-list">
                <BoardEle id={0}/>
                {
                   data.map(element => {
                        return <BoardEle
                                    key={element.id} 
                                    id={element.id} 
                                    title={element.title}
                                    revervation_date={element.reveration_date}
                                    category={element.category}
                                    writer={element.writer}
                                    registrant_count={element.registrant_count}
                                    current_count={element.current_count}
                                    onJoin={onJoin}
                                />
                    })
                }
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