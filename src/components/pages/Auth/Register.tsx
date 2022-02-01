import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LS from './Auth.module.scss'
interface Props {}

export const Input: React.FC<{ label: string; onChange: any; type: string }> = ({
    label,
    onChange,
    type
}) => {
    return (
        <div className={LS.inputWrapper}>
            <label className={LS.inputWrapper__label} htmlFor={label}>
                {label}
            </label>
            <input className={LS.inputWrapper__input} onChange={onChange} type={type} id={label} />
        </div>
    )
}

const Register: React.FC<Props> = ({}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username, password, email)
    }
    return (
        <div className={LS.authWrapper}>
            <form onSubmit={handleLogin} className={LS.authWrapper__form}>
                <Input
                    label="Username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    type="text"
                />
                <Input
                    label="Email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    type="text"
                />
                <Input
                    label="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    type="password"
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
