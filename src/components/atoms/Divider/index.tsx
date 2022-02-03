import React from 'react'

import D from './Divider.module.scss'

interface Props {
    margin?: number
    marginTop?: number
    marginBottom?: number
    hidden?: boolean
    opacity?: number
}

const Divider: React.FC<Props> = ({ margin, hidden, marginBottom, marginTop, opacity }) => {
    return (
        <div
            style={{
                marginTop: marginTop || marginTop === 0 ? `${marginTop}rem` : `${margin}rem`,
                marginBottom: marginBottom || marginBottom === 0 ? `${marginBottom}rem` : `${margin}rem`,
                visibility: hidden ? 'hidden' : 'visible',
                opacity: opacity || 1
            }}
            className={D.divider}
        ></div>
    )
}

interface DividerVerticalProps {
    margin?: number
    marginLeft?: number
    marginRight?: number
    hidden?: boolean
    opacity?: number
}

export const DividerVertical: React.FC<DividerVerticalProps> = ({
    margin,
    hidden,
    marginLeft,
    marginRight,
    opacity
}) => {
    return (
        <div
            style={{
                marginLeft: marginLeft || marginLeft === 0 ? `${marginLeft}rem` : `${margin}rem`,
                marginRight: marginRight || marginRight === 0 ? `${marginRight}rem` : `${margin}rem`,
                visibility: hidden ? 'hidden' : 'visible',
                opacity: opacity || 1
            }}
            className={D.dividerV}
        ></div>
    )
}

export default Divider
