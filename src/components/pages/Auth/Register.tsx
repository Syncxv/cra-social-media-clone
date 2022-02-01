import { gql } from '@apollo/client'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Fields, FieldError } from '../../../types'
import { validate } from '../../../utils/validate'
import LS from './Auth.module.scss'
import { Input } from './Login'
interface Props {}

const REGISTER_MUTATION = gql`
    mutation UserRegister($options: UserRegisterArgs!) {
        userRegister(options: $options) {
            errors {
                field
                message
            }
            user {
                _id
                username
                email
                avatar
            }
            accessToken
        }
    }
`

const Register: React.FC<Props> = ({}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState<FieldError[] | null>(null)
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username, password, email)
    }
    return (
        <div className={LS.authWrapper}>
            <form onSubmit={handleLogin} className={LS.authWrapper__form}>
                <Input
                    label="Username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value)
                        const errors = validate(e.target.value, Fields.USERNAME)
                        setErrors(errors)
                    }}
                    type="text"
                    errors={errors?.filter(s => s.field === Fields.USERNAME) ?? []}
                />
                <Input
                    label="Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value)
                        const errors = validate(e.target.value, Fields.EMAIL)
                        setErrors(errors)
                    }}
                    type="text"
                    errors={errors?.filter(s => s.field === Fields.EMAIL) ?? []}
                />
                <Input
                    label="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value)
                        const errors = validate(e.target.value, Fields.PASSWORD)
                        setErrors(errors)
                    }}
                    type="password"
                    errors={errors?.filter(s => s.field === Fields.PASSWORD) ?? []}
                />
                <button className="w-full" type="submit">
                    Register
                </button>
                <Link to="/login">Login</Link>
            </form>
        </div>
    )
}

export default Register
