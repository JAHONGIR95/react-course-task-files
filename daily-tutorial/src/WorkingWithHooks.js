import React from 'react';
import {useState} from 'react'

export default function WorkingWithHooks() {

    const [state, setState] = useState(0);

    return (
        <div>
            <p>You clicked {state} times</p>
            <button onClick={() => setState(state + 1)}>Click me</button>
        </div>
    )
}
