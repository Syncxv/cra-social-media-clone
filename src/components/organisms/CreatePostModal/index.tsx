import { gql, useMutation } from '@apollo/client'
import { useRef, useState } from 'react'
import { userStore } from '../../../stores/userStore'
import UserPill from '../../molecules/UserPill'
import Modal from '../Modal'
import PM from './PostModal.module.scss'

const CREATE_POST_MUTATION = gql`
    mutation CreatePost($createPostOptions2: CreatePostArgs!, $image: Upload!) {
        createPost(options: $createPostOptions2, image: $image) {
            _id
            title
            content
            likes
            owner {
                _id
                username
                email
                avatar
            }
            attachment
        }
    }
`

const CreatePostModal: React.FC = () => {
    const [createPost] = useMutation(CREATE_POST_MUTATION, {
        onCompleted: res => console.log(res)
    })
    const user = userStore(state => state.user)
    const [image, setImage] = useState<File | null>(null)
    const captionRef = useRef<HTMLTextAreaElement | null>(null)

    const handleSubmit = () => {
        createPost({
            variables: { createPostOptions2: { content: captionRef.current!.value, title: 'gewgw' }, image }
        })
    }
    return (
        <Modal size={{ height: '55rem', width: '55rem' }}>
            <Modal.Header>
                <div className={PM.header}>
                    <h2 className={PM.header__createPost}>Create Post</h2>
                    <button onClick={handleSubmit} className={PM.submit}>
                        Share
                    </button>
                </div>
            </Modal.Header>
            <div className={PM.wrapper}>
                <div className={PM.inputWrapper}>
                    {image === null && (
                        <label className={PM.label} htmlFor="upload">
                            Select Image
                        </label>
                    )}
                    {image !== null && <img src={URL.createObjectURL(image)} alt="" />}
                    <input
                        onChange={e => setImage(e.target.files?.length ? e.target.files[0] : null)}
                        className={PM.input}
                        type="file"
                        id="upload"
                        accept="image/png, image/jpeg"
                    />
                </div>
                <div className={PM.captionWrapper}>
                    <UserPill user={user!} />
                    <textarea ref={captionRef} className={PM.textarea} placeholder="Caption" />
                </div>
            </div>
        </Modal>
    )
}

export default CreatePostModal