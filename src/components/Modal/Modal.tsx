'use client'
import { ReactElement, ReactNode, useState } from 'react'
import style from './style.module.scss'

export default function Modal({ children }: { children: ReactNode }) {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(!showModal)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper-modal') closeModal()
    }
    return (
        <div className={style.container}>
            <button onClick={handleClick}>Show Modal</button>
            <div id="wrapper-modal" onClick={handleClose} className={`${style.modal} ${showModal ? '' : style.invisible}`}>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}