import { modalStore } from '../../../stores/modalStore'
import MS from './Modal.module.scss'

interface BackdropProps {}
export const Backdrop: React.FC<BackdropProps> = ({ children }) => {
    const store = modalStore()
    return (
        <div className={MS.backdrop} onClick={e => store.pop()}>
            {children}
        </div>
    )
}
