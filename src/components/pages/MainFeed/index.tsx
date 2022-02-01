import MF from './MainFeed.module.scss'

import React from 'react'
import Post from '../../organisms/Post'
import Header from '../../templates/Header'

type Props = {}

const MainFeed: React.FC<Props> = () => {
    return (
        <>
            <Header />
            <div className={MF.app}>
                <main className={MF.feed}>
                    <Post
                        title="a nice title"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium."
                        username="bruh"
                    />
                    <Post
                        title="a nice title"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium."
                        username="bruh"
                    />
                    <Post
                        title="a nice title"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium."
                        username="bruh"
                    />
                    <Post
                        title="a nice title"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium."
                        username="bruh"
                    />
                    <Post
                        title="a nice title"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium."
                        username="bruh"
                    />
                    <Post
                        title="a nice title"
                        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium."
                        username="bruh"
                    />
                </main>
                <aside>sidebaridk man</aside>
            </div>
        </>
    )
}

export default MainFeed
