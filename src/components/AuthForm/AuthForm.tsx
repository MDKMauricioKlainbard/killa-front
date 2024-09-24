'use client'
import style from './style.module.scss'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import { useState } from 'react'

export default function AuthForm() {
    const [form, setForm] = useState<'login' | 'register'>('login')
    const changeForm = (e: any) => {
        if(e.target.id === 'login') setForm('login')
        if(e.target.id === 'register') setForm('register')
    }
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h2>
                    Inicio de sesión / Registro
                </h2>
            </div>
            <div className={style.content}>
                <div className={style.options}>
                    <span onClick={changeForm} id='login'>Iniciar sesión <div className={style.underline} /></span>
                    <span onClick={changeForm} id='register'>Registrarse <div className={style.underline} /></span>
                </div>
                {form === 'login' ? <LoginForm /> : <></>}
                {form === 'register' ? <RegisterForm/> : <></>}
            </div>
        </div>
    )
}