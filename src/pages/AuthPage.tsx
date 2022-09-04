import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { login, register } from '../store/actions/AuthAction'
import s from './../styles/auth.module.scss'


const AuthPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const isFormValid = () => {
        return form.username.trim().length && form.password.trim().length
    }

    const loginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if (isFormValid()) {
            await dispatch(login(form))
            navigate('/')
        } else {
            alert('Form is invalid!')
        }
    }

    const SubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        if (isFormValid()) {
            await dispatch(register(form))
            navigate('/')
        } else { alert('Form is invalid!') }
    }

    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={SubmitHandler}>
                <div className={s.username}>
                    <label htmlFor="username">Username:</label>
                    <input id='username' onChange={changeHandler} name='username' type="text" />
                </div>

                <div className={s.password}>
                    <label htmlFor="password">Password:</label>
                    <input id='password' onChange={changeHandler} name='password' type="password" />
                </div>
                <div className={s.btn}>
                    <button className={s.btn_register} type='submit'>Register</button>
                    <button className={s.btn_login} onClick={loginHandler} type='button'>Login</button>
                </div>

            </form>
        </div>
    )
}

export default AuthPage;