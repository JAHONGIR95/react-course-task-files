import React, {useState} from 'react'

export default function Typing() {

    const [ state, setState ] = useState('')
    return (
        <div>
            <input type="text" value={state} onChange={(e)=> setState(e.target.value)}/>
            <button onClick={()=> alert(state)}>Submit</button>
        </div>
    )
}
