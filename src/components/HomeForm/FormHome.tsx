import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux'
import { addMainInfo } from '../../store/slices/formDataSlice'

import { Input, Button } from '..'
import s from './homeForm.module.scss'

interface FormState {
    tel: string
    email: string
}

export const FormHome = () => {

    const navigate = useNavigate()
    const { tel, email } = useAppSelector(state => state.formData.dataForm)
    const dispatch = useAppDispatch()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormState>(
        {
            defaultValues: {
                tel,
                email
            }
        }
    )

    const onSubmit: SubmitHandler<FormState> = (formdata: FormState) => {
        const { tel, email } = formdata
        if (tel.trim().length > 0 && (email.trim().length > 0 && email.trim().includes('@'))) {
            navigate('/create/step-1')
            dispatch(addMainInfo(formdata))
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.labelWrapper}>
                <Controller
                    name='tel'
                    control={control}
                    rules={{
                        required: 'tel is required'
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            className={s.input}
                            labelClassName={s.label}
                            placeholder='Номер телефона'
                            value={value}
                            onChange={onChange}
                            type='tel'
                        />
                    )}
                />
                {errors.tel && (
                    <div className={s.errorMessage}>{errors.tel.message}</div>
                )}
            </div>
            <div className={s.labelWrapper}>
                <Controller
                    name='email'
                    control={control}
                    rules={{
                        required: 'email is required'
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            className={s.input}
                            labelClassName={s.label}
                            placeholder='Email'
                            value={value}
                            onChange={onChange}
                            type='email'
                        />
                    )}
                />
                {errors.email && (
                    <div className={s.errorMessage}>{errors.email.message}</div>
                )}
            </div>
            <Button type='submit'>Начать</Button>
        </form>
    )
}
