import MF from './MainFeed.module.scss'

import React from 'react'
import Post from '../../organisms/Post'
import Header from '../../templates/Header'
import { gql, useQuery } from '@apollo/client'
import { PostType } from '../../../types'
import PostNoAttachment from '../../organisms/Post/PostNoAttachment'

type Props = {}

const GET_POSTS_QUERY = gql`
    query GetPosts {
        getPosts {
            _id
            title
            content
            likes
            owner {
                _id
                username
                email
            }
            comments {
                _id
                content
                likes
                author {
                    username
                    _id
                }
            }
            attachment
        }
    }
`

const MainFeed: React.FC<Props> = () => {
    const { data, loading } = useQuery<{ getPosts: PostType[] }>(GET_POSTS_QUERY)
    if (loading) return <div>LOADING</div>
    console.log(data)
    return (
        <>
            <Header />
            <div className={MF.app}>
                <main className={MF.feed}>
                    {data?.getPosts.map(post =>
                        post.attachment ? <Post post={post} /> : <PostNoAttachment post={post} />
                    )}
                </main>
                <aside>sidebaridk man</aside>
            </div>
        </>
    )
}

export default MainFeed
