import modalSizes from './sizes.module.scss'
import { Backdrop } from './Backdrop'
import MS from './Modal.module.scss'
interface CustomSize {
    height: string
    width: string
}
interface ModalProps {
    size?: string | CustomSize
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
    const isCustomSize = typeof size === 'object'
    const sizeObject: React.CSSProperties = isCustomSize
        ? {
              minHeight: (size as CustomSize).height,
              width: (size as CustomSize).width
          }
        : {}
    return (
        <>
            <Backdrop>
                <div onClick={e => e.stopPropagation()} className={MS.modalOuter}>
                    <div className={`${MS.modal} ${typeof size === 'object' ? '' : size}`} style={sizeObject}>
                        {children}
                    </div>
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
