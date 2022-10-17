import React from 'react'
import lyt from './component.layout.css'
import Card from '../Card/Card'

const Layout = ({size}) => {

    return (
        <div className={`${lyt.layout} ${lyt[size]}`}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    )
}

export default Layout