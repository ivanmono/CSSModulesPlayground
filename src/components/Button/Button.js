import React from 'react'
import btn from './component.button.css'

const Button = ({type, size, value}) => {
    
    return (
        <button className={`${btn.common} ${btn[type]} ${btn[size]}`}>{`${value}`}</button>
    )
}

export default Button