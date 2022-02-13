import { gql, useMutation } from '@apollo/client'
import { Question, WarningCircle } from 'phosphor-react'
import React, { useState } from 'react'
import { Link, useHref, useNavigate } from 'react-router-dom'

import { userStore } from '../../../stores/userStore'
import { Fields, FieldError, LoginResponse } from '../../../types'
import { validate } from '../../../utils/validate'
import LS from './Auth.module.scss'
interface Props {}

const LOGIN_MUTATION = gql`
    mutation UserLogin($userLoginOptions2: UserLoginArgs!) {
        userLogin(options: $userLoginOptions2) {
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
interface InputProps {
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
    type: string
    errors: FieldError[]
}
export const Input: React.FC<InputProps> = ({ label, onChange, type, errors }) => {
    return (
        <div className={LS.inputWrapper}>
            <label className={LS.inputWrapper__label} htmlFor={label}>
                {label}
            </label>
            <div className={LS.inputWrapper__iconWrapper}>
                <input className={LS.inputWrapper__input} onChange={onChange} type={type} id={label} />
                <WarningCircle
                    className={`${LS.inputWrapper__icon} ${errors.length ? LS.inputWrapper__error : ''}`}
                    color="red"
                    size={24}
                />
            </div>
            <div className={LS.inputWrapper__errors}>{errors && errors.map(s => <p>{s.message}</p>)}</div>
        </div>
    )
}

const Login: React.FC<Props> = ({}) => {
    const [submitLogin] = useMutation(LOGIN_MUTATION, {
        onCompleted: ({ userLogin: res }: LoginResponse) => {
            console.log(res)
            if (res.errors !== null) return setErrors(res.errors)
            localStorage.setItem('token', res.accessToken)
            setUser(res.user)
            navigate('/')
        }
    })
    const setUser = userStore(state => state.setUser)
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<FieldError[] | null>(null)
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (errors !== null) return
        submitLogin({ variables: { userLoginOptions2: { username, password } } })
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
                    Login
                </button>
                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login
