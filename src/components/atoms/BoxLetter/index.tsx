import React from 'react'

import BOX from './BoxLetter.module.scss'

interface Props {
    letter: string
}

const BoxLetter: React.FC<Props> = ({ letter }) => {
    return (
        <div className={BOX.box}>
            <span className={BOX.boxText}>{letter}</span>
        </div>
    )
}

export default BoxLetter
