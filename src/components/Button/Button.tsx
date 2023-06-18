import { ReactNode } from 'react'

import cn from 'classnames'
import s from './button.module.scss'

interface ButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ children, className, onClick, type = 'button' }: ButtonProps) => {

    return (
        <button onClick={onClick} className={cn(s.btn, className)} type={type}>{children}</button>
    )
}