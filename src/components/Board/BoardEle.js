import React, { useEffect, useState } from 'react';
import './BoardEle.css'

// props : no
// => title, time, type, curNum, totNum, owner, state 
const BoardEle = ({id, title, revervation_date, category, writer, registrant_count, current_count}) => {
    const [text, setText] = useState(['NO.', '제목', '날짜 및 시간', '카테고리', '접수 인원', '작성자', '등록']);
    const [classText, setClassText] = useState('ElementBoxBold');
    useEffect(() => {
        if (id !== 0) {
            setClassText('ElementBox');

            // api로 부터 값들을 받아와서 text list를
            // 변경해야됨. props.no로 부터 받아온 값들을
            // text에 적용해야됨.

            setText([id, title, revervation_date, category, `${current_count}/${registrant_count}`, writer, '등록'])
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