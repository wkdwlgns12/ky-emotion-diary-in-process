import React from 'react'
import "./DiaryList.css"
import DiaryItem from './DiaryItem'
import Button from './Button'
const DiaryList = () => {
    return (
        <div className='DiaryList'>
            <div className="menu-bar">
                <select >
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>오래된순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
            </div>
            <div className="list-wrapper">

                <DiaryItem />

            </div>
        </div>
    )
}

export default DiaryList