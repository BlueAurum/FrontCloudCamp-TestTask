import { useState, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux'
import { postData } from '../../store/slices/postDataSlice'
import { clearForm } from '../../store/slices/formDataSlice'

import { Button, WarningModal } from '..'

import s from './formAboutInfo.module.scss'

interface AboutForm {
    message: string
}

export const FormAboutInfo = () => {

    const [textCounter, setTextCounter] = useState<number>(0)
    const maxLength = 200

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const state = useAppSelector(state => state.formData)
    const { isLoading, success } = useAppSelector(state => state.postData)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const {
        watch,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AboutForm>({
        defaultValues: {
            message: '',
        },
    })

    useEffect(() => {
        if (watch().message.length <= maxLength) {
            setTextCounter(watch().message.length)
        }
    }, [watch().message])

    const onSubmit: SubmitHandler<AboutForm> = (formData: AboutForm) => {
        const { message } = formData
        if (message.trim().length > 0) {
            dispatch(postData({ ...state, formData }))
        }
        setIsOpen(true)
    }

    const successHandler = () => {
        navigate('/')
        setIsOpen(false)
        dispatch(clearForm())
    }

    const errorHandler = () => {
        navigate('/')
        setIsOpen(false)
        dispatch(clearForm())
    }

    return (
        <>
            <WarningModal
                onClick={() => setIsOpen(true)}
                isOpen={isOpen}
                isSuccess={success}
                isLoading={isLoading}
                successHandler={successHandler}
                errorHandler={errorHandler}
            />
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.formTitle}>About</div>
                <div className={s.labelWrapper}>
                    <Controller
                        name='message'
                        control={control}
                        rules={{
                            required: 'message is required',
                            maxLength: maxLength
                        }}
                        render={({ field: { onChange, value } }) => (
                            <textarea
                                maxLength={maxLength}
                                className={s.textArea}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    {errors.message && (
                        <div className={s.errorMessage}>{errors.message.message}</div>
                    )}
                    <div className={textCounter === maxLength ? s.maxWord : ''}>{textCounter}/{maxLength}</div>
                </div>
                <div className={s.btnWrapper}>
                    <Button onClick={() => navigate(-1)}>Назад</Button>
                    <Button type='submit'>Отправить</Button>
                </div>
            </form>
        </>
    )
}
