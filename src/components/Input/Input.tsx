import InputMask from 'react-input-mask'
import cn from 'classnames'
import s from './input.module.scss'

interface ButtonProps {
    value: string
    placeholder?: string
    className?: string
    labelClassName?: string
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'checkbox' | 'radio'
    onChange: (value: string) => void
}

export const Input = ({
    value,
    className,
    labelClassName,
    type = 'text',
    onChange,
    placeholder,
}: ButtonProps) => {
    return (
        <label className={cn(s.label, labelClassName)}>
            {placeholder && <span className={s.labelText}>{placeholder}</span>}
            {type === 'tel' ? (
                <InputMask
                    onChange={e => onChange?.(e.target.value)}
                    value={value}
                    className={cn(s.input, className)}
                    mask='+7 (999) 999-99-99'
                />
            ) : (
                <input
                    className={cn(s.input, className)}
                    onChange={e => onChange?.(e.target.value)}
                    type={type}
                    value={value}
                />
            )}
        </label>
    )
}
