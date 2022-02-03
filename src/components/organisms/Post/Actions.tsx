import { Chat, Heart, Share } from 'phosphor-react'
import { CSSProperties } from 'react'
import { PostType } from '../../../types'
import PST from './Post.module.scss'

export const ActionButton: React.FC<{ Icon: any; amount?: number; color: string }> = ({
    Icon,
    amount,
    color
}) => {
    return (
        <div style={{ '--color': color } as CSSProperties} className={PST.actionButton}>
            <div className={PST.icon}>{<Icon size={16} />}</div>
            {amount && <div className={PST.amount}>{amount}</div>}
        </div>
    )
}

interface ActionProps {
    post: PostType
}

const Actions: React.FC<ActionProps> = ({ post }) => {
    return (
        <>
            <div className={PST.actionsBro}>
                <ActionButton color="rgb(255, 19, 97)" amount={post.likes} Icon={Heart}></ActionButton>
                <ActionButton
                    color="rgb(19, 255, 58)"
                    amount={post.comments.length}
                    Icon={Chat}
                ></ActionButton>
                <ActionButton color="rgb(35, 19, 255)" Icon={Share}></ActionButton>
            </div>
        </>
    )
}

export default Actions
