import React from 'react'
import card from './component.card.css'
import Button from '../Button/Button'

const Card = () => {

    return (
        <div className={`${card.card}`}>
            <h2>Card title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <Button type={"primary"} size={"base"} value={"Submit"}/>
        </div>
    )
}

export default Card