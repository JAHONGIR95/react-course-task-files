import { useState, useRef } from 'react';

import './main.scss';

const Options = ({title, id, handleDelete}) => {

    const [ inputText, setInputText ] = useState(title);

    return(
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <input
                value={inputText}
                onChange={ (e)=> setInputText(e.target.value) }

            />

            <div className="d-flex">
                <button className="btn btn-outline-primary me-3">O'zgartirish</button>
                <button className="btn btn-outline-danger" onClick={() => handleDelete(id)}>O'chirish</button>
            </div>
        </li>
    )
}

export default Options;