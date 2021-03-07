import {useState} from 'react';


const Ideas = () => {
    const [count, setCount] = useState(0);

   
    
    return(
        <>
            <h1>Ideas page</h1>
            <h1>Son: {count}</h1>

            <button onClick={decriment}>-</button>
            <button onClick={incriment}>+</button>
        </>
    )
}

export default Ideas;