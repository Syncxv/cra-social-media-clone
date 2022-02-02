import modalSizes from './sizes.module.scss'
import { Backdrop } from './Backdrop'
import MS from './Modal.module.scss'
interface ModalProps {
    size?: string
}
export const ModalSizes = {
    Small: modalSizes.sizeSmall,
    Medium: modalSizes.sizeMedium,
    Large: modalSizes.sizeLarge
}
type modalWrapper<P = {}> = React.FC<P> & {
    Content: React.FC
    Header: React.FC
    Footer: React.FC
    Sizes: typeof ModalSizes
}
const Modal: modalWrapper<ModalProps> = ({ children, size = ModalSizes.Small }) => {
    return (
        <>
            <Backdrop>
                <div onClick={e => e.stopPropagation()} className={MS.modalOuter}>
                    <div className={`${MS.modal} ${size}`}>{children}</div>
                </div>
            </Backdrop>
        </>
    )
}
const Content: React.FC = ({ children }) => {
    return (
        <>
            <div className={MS.modalContent}>{children}</div>
        </>
    )
}
const Header: React.FC = ({ children }) => {
    return (
        <>
            <div className={MS.modalHeader}>{children}</div>
        </>
    )
}
const Footer: React.FC = ({ children }) => {
    return (
        <>
            <div className={MS.modalFooter}>{children}</div>
        </>
    )
}
Modal.Content = Content
Modal.Header = Header
Modal.Footer = Footer
Modal.Sizes = ModalSizes
export default Modal
