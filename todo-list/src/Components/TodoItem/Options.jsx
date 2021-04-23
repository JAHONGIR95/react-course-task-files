import { useState, useRef } from 'react';

import './main.scss';

const Options = ({title, id, handleDelete}) => {

    const [ inputText, setInputText ] = useState(title);
    const [ isDisabled, setIsDisabled] = useState(true)

    const inputRef = useRef(null)

    const handleEditFocus = () => {
        setIsDisabled(false)

        setTimeout(() => {
            inputRef.current.focus();
        }, 0);
    }
 
    const handleEdit = (e) => {
        if(e.charCode === 13){
            setIsDisabled(true);

            let allItems = JSON.parse(window.localStorage.getItem('todosInfo'));
            let editedEl = allItems.find(todo => todo.id === id);
            let editedElIndex = allItems.findIndex(todo => todo.id === id);

            let editedElement = {
                ...editedEl,
                title: inputText
            }

            allItems.splice(editedElIndex, 1, editedElement)
            window.localStorage.setItem('todosInfo', JSON.stringify(...allItems))

        }
    }
    
    return(
        <li className="list-group-item d-flex align-items-center justify-content-between">
            <input
                ref={inputRef}
                disabled={isDisabled}
                value={inputText}
                onChange={ (e)=> setInputText(e.target.value) }
                onBlur={ () => setIsDisabled(true)}
                onKeyPress={handleEdit}
            />

            <div className="d-flex">
                <button className="btn btn-outline-primary me-3" onClick={handleEditFocus}>O'zgartirish</button>
                <button className="btn btn-outline-danger" onClick={() => handleDelete(id)}>O'chirish</button>
            </div>
        </li>
    )
}

export default Options;