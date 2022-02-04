import { Chat, Heart, Share } from 'phosphor-react'
import { CSSProperties, useState } from 'react'
import { PostType } from '../../../types'
import PST from './Post.module.scss'
import { gql, useApolloClient } from '@apollo/client'
import { userStore } from '../../../stores/userStore'
//should i be putting the like muttion and stuff here :|
const LIKE_MUTATION = gql`
    mutation LikePost($likePostPostId2: String!) {
        likePost(post_id: $likePostPostId2) {
            errors {
                message
            }
            post {
                _id
                content
                owner {
                    _id
                    username
                }
                likedUsers
            }
        }
    }
`
function useForceUpdate() {
    const [value, setValue] = useState(0) // integer state
    return () => setValue(value => value + 1) // update the state to force render
}
export const ActionButton: React.FC<{
    Icon: any
    amount?: number
    color: string
    onClick: any
    active: boolean
}> = ({ Icon, amount, color, onClick, active }) => {
    return (
        <div onClick={onClick} style={{ '--color': color } as CSSProperties} className={PST.actionButton}>
            <div className={PST.icon}>
                {active ? <Icon color={color} weight="fill" size={16} /> : <Icon size={16} />}
            </div>
            {amount && <div className={PST.amount}>{amount}</div>}
        </div>
    )
}

interface ActionProps {
    post: PostType
}

const Actions: React.FC<ActionProps> = ({ post }) => {
    const client = useApolloClient()
    const user = userStore(state => state.user)
    const [isLiked, setLiked] = useState(post.likedUsers.includes(user!._id))
    const handleLike = async () => {
        const data = await client.mutate<{ likePost: { post: PostType } }>({
            mutation: LIKE_MUTATION,
            variables: { likePostPostId2: post._id }
        })
        console.log(data.data!.likePost.post.likedUsers.includes(user!._id))
        setLiked(data.data!.likePost.post.likedUsers.includes(user!._id))
    }

    return (
        <>
            <div className={PST.actionsBro}>
                <ActionButton
                    onClick={handleLike}
                    color="rgb(255, 19, 97)"
                    amount={post.likedUsers.length}
                    active={isLiked}
                    Icon={Heart}
                ></ActionButton>
                <ActionButton
                    onClick={() => console.log('hehe')}
                    color="rgb(19, 255, 58)"
                    amount={post.comments.length}
                    active={false}
                    Icon={Chat}
                ></ActionButton>

                <ActionButton
                    onClick={() => console.log('hehe')}
                    color="rgb(35, 19, 255)"
                    active={false}
                    Icon={Share}
                ></ActionButton>
            </div>
        </>
    )
}

export default Actions
