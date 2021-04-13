import React from 'react'

export default function AngelaYu() {

    let time = new Date().getHours();
    let currentTime;
    {
        if(time >= 0 && time < 19){
            currentTime = 'Hayrli tong!';
        } 
    }

    return (
        <div>
            <h1>{currentTime} {time}</h1>
        </div>
    )
}
