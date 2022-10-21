import React from 'react'
import lyt from './component.layout.css'

const Layout = ({ size, children }) => {

    return (
        <div className={`${lyt.layout} ${lyt[`grid-${size}`]}`}>
            {children}
        </div>
    )
}

export default Layout