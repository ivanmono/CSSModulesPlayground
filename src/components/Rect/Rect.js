import React from 'react'
import rct from './component.rect.css'

const Rect = ({value, toggle, margin, color}) => {

    return (
        <div className={`${rct.rect} ${rct[color]} ${rct[toggle]} ${margin}`}>{`${value}`}</div>
    )
}

export default Rect