import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux'
import { addBaseInfo } from '../../store/slices/formDataSlice'

import { Input, Button } from '..'
import s from './formBaseInfo.module.scss'

interface FormState {
    nickName: string
    name: string
    surname: string
    sex: { value: string, label: string }
}

export const FormBaseInfo = () => {

    const navigate = useNavigate()

    const { nickName, name, surname } = useAppSelector(state => state.formData.dataForm2)


    const dispatch = useAppDispatch()

    const selectOptions = [
        { value: 'none', label: 'Ничего не выбрано' },
        { value: "man", label: "Man" },
        { value: "woman", label: "Woman" },
    ];

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormState>({
        defaultValues: {
            nickName,
            name,
            surname,
            sex: { value: 'none', label: 'Ничего не выбрано' },
        },
    })

    const onSubmit: SubmitHandler<FormState> = (formdata: FormState) => {
        const { nickName, name, surname, sex: { value } } = formdata
        if (
            nickName.trim().length > 0 &&
            name.trim().length > 0 &&
            surname.trim().length > 0
        ) {
            navigate('/create/step-2')
            dispatch(addBaseInfo({ nickName, name, surname, sex: value }))
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.labelWrapper}>
                <Controller
                    name='nickName'
                    control={control}
                    rules={{
                        required: 'Nickname is required',
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            className={s.input}
                            labelClassName={s.label}
                            placeholder='Nickname'
                            value={value}
                            onChange={onChange}
                            type='text'
                        />
                    )}
                />
                {errors.nickName && (
                    <div className={s.errorMessage}>{errors.nickName.message}</div>
                )}
            </div>
            <div className={s.labelWrapper}>
                <Controller
                    name='name'
                    control={control}
                    rules={{
                        required: 'name is required',
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            className={s.input}
                            labelClassName={s.label}
                            placeholder='Name'
                            value={value}
                            onChange={onChange}
                            type='text'
                        />
                    )}
                />
                {errors.name && (
                    <div className={s.errorMessage}>{errors.name.message}</div>
                )}
            </div>
            <div className={s.labelWrapper}>
                <Controller
                    name='surname'
                    control={control}
                    rules={{
                        required: 'surname is required',
                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            className={s.input}
                            labelClassName={s.label}
                            placeholder='Surname'
                            value={value}
                            onChange={onChange}
                            type='text'
                        />
                    )}
                />
                {errors.surname && (
                    <div className={s.errorMessage}>{errors.surname.message}</div>
                )}
            </div>
            <div className={s.labelWrapper}>
                <Controller
                    name='sex'
                    control={control}
                    rules={{
                        required: 'sex is required',
                    }}
                    render={({ field }) => (
                        <Select options={selectOptions} {...field} />
                    )}
                />
                {errors.sex && (
                    <div className={s.errorMessage}>{errors.sex.message}</div>
                )}
            </div>
            <div className={s.btnWrapper}>
                <Button type='button' onClick={() => navigate(-1)}>Назад</Button>
                <Button type='submit'>Начать</Button>
            </div>
        </form>
    )
}
