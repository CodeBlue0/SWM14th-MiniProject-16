import React, { useEffect, useState } from 'react';
import './BoardEle.css'
import { useRecoilValue } from 'recoil';
import { currentUserNameState } from '../../atoms';

// props : no
// => title, time, type, curNum, totNum, owner, state 
const BoardEle = ({id, title, revervation_date, category, writer, registrant_count, current_count, onJoin}) => {
    const currentUserName = useRecoilValue(currentUserNameState);
    const [text, setText] = useState(['NO.', '제목', '날짜 및 시간', '카테고리', '접수 인원', '작성자', '등록']);
    const [classText, setClassText] = useState('ElementBoxBold');

    const join = (e) => {
        if (e.target.classList.contains("join") && window.confirm(`[${title}]을(를) 신청하시겠습니까?`)) {
            fetch(`http://3.129.194.82:8080/board/register/${id}/${currentUserName}`)
            .then(res => res.json())
            .then(res => {
                onJoin();
            });
        }
    }

    useEffect(() => {
        if (id !== 0) {
            setClassText('ElementBox');

            setText(text => [id, title, revervation_date, category, 
                `${current_count}/${registrant_count}`, writer,
                currentUserName === writer ? "방장" : (registrant_count === current_count ? "마감" : "등록")])
        }
    }, [id, title, revervation_date, category, writer, registrant_count, current_count, currentUserName]);

    return (
        <div className={classText}>
            <div className='noOp'>{text[0]}</div>
            <div className='titleOp'>{text[1]}</div>
            <div className='timeOp'>{text[2]}</div>
            <div className='typeOp'>{text[3]}</div>
            <div className='curNumOp'>{text[4]}</div>
            <div className='ownerOp'>{text[5]}</div>
            <div 
                onClick={join}
                className={`${id === 0 ? 'first' : ''} stateOp ${currentUserName === writer ? "leader" : (registrant_count === current_count ? "done" : "join")}`}
            >{id === 0 ? text[6] : `[ ${text[6]} ]`}</div>
        </div>
    )
}

export default BoardEle;