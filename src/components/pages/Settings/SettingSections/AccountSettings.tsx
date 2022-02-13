import React from 'react'
import SideElement from '../components/SideElement'

type Props = {}

export const AccountSettings: React.FC<Props> = () => {
    return (
        <SideElement>
            <div>AccountSettings</div>
        </SideElement>
    )
}

export default {
    label: 'User Settings',
    element: AccountSettings
}
