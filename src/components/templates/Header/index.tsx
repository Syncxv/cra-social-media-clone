import { gql, useMutation } from '@apollo/client'
import { PlusCircle } from 'phosphor-react'
import React from 'react'
import { modalStore } from '../../../stores/modalStore'
import Modal from '../../organisms/Modal'

import HS from './Header.module.scss'

type Props = {}

const UPLOAD_MUTATION = gql`
    mutation UploadImage($file: Upload!) {
        uploadImage(file: $file)
    }
`

const testModal: React.FC = () => {
    return (
        <Modal size={{ height: '30rem', width: '14rem' }}>
            <Modal.Content>HEEEY</Modal.Content>
        </Modal>
    )
}

const HeaderItem: React.FC<{ tooltip: string }> = ({ children, tooltip }) => {
    return (
        <li
            onClick={() => {
                var store = modalStore.getState()
                store.push(testModal)
                console.log(store)
            }}
            className={`${HS.header__linkItem} tooltipLeft`}
            data-tooltip={tooltip}
        >
            {children}
        </li>
    )
}

const Header: React.FC<Props> = ({}) => {
    const [uploadFile] = useMutation(UPLOAD_MUTATION, {
        onCompleted: res => console.log(res)
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.length ? e.target.files[0] : false
        console.log(file)
        if (!file) return
        uploadFile({ variables: { file } })
    }
    return (
        <>
            <nav className={HS.header}>
                <ul className={HS.header__items}>
                    <HeaderItem tooltip="post">
                        <PlusCircle size={32} />
                    </HeaderItem>
                </ul>
            </nav>
        </>
    )
}

export default Header
