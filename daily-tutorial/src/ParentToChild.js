import React from 'react'

export default function ParentToChild() {

    const order = {
        size: 'Medium', 
        prize: '$8'
    }
    return (
        <div>
            <Store {...order} />
        </div>
    )
}

const Store = (props) => {
    return(
        <div>
            <h3>Order</h3>
            <Pizza {...props} />
        </div>
    )
}

const Pizza = (props) => {
    return(
            <ul>
                <li>Pizza size: {props.size}</li>
                <li>Pizza prize: {props.prize}</li>
            </ul>
    )
}
