import React, { useEffect, useState } from 'react';
import './BoardEle.css'

// props : no
// => title, time, type, curNum, totNum, owner, state 
const BoardEle = (props) => {
    const [text, setText] = useState(['NO.', '제목', '날짜 및 시간', '카테고리', '접수 인원', '작성자', '등록']);
    const [classText, setClassText] = useState('ElementBoxBold');
    useEffect(() => {
        console.log(props.no != 0);
        if (props.no != 0) {
            setClassText('ElementBox');
            setText([props.no, '제목', '날짜 및 시간', '카테고리', '접수 인원', '작성자', '등록'])
        }
    }, []);

    return (
        <div className={classText}>
            <div className='noOp'>{text[0]}</div>
            <div className='titleOp'>{text[1]}</div>
            <div className='timeOp'>{text[2]}</div>
            <div className='typeOp'>{text[3]}</div>
            <div className='curNumOp'>{text[4]}</div>
            <div className='ownerOp'>{text[5]}</div>
            <div className='stateOp'>{text[6]}</div>
        </div>
    )
}

export default BoardEle;