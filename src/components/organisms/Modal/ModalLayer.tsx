import React from 'react'
import { modalStore } from '../../../stores/modalStore'

interface Props {}

const ModalLayer: React.FC<Props> = ({}) => {
    const store = modalStore(state => state)
    const Modal = store.modals[0]?.modal
    const props = store.modals[0]?.props
    return <div className="modalLayer">{store.modals.length ? <Modal {...props} /> : ''}</div>
}

export default ModalLayer
