import React from 'react'
import SideElement from '../components/SideElement'

type Props = {}

export const OtherSettings: React.FC<Props> = () => {
    return (
        <SideElement>
            <div>OtherSettings</div>
        </SideElement>
    )
}

export default {
    label: 'OTHER IDK',
    element: OtherSettings
}
