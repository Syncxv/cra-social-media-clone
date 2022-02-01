import { gql, useMutation } from '@apollo/client'
import React from 'react'

type Props = {}

const UPLOAD_MUTATION = gql`
    mutation UploadImage($file: Upload!) {
        uploadImage(file: $file)
    }
`

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
            <nav>
                <ul>
                    <li>
                        <input onChange={handleChange} type="file" accept="image/png, image/jpeg" />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header
