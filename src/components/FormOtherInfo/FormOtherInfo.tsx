import { Controller, useForm, useFieldArray, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux'
import { addOtherInfo } from '../../store/slices/formDataSlice'

import { Button } from '..'
import TrashIcon from '../../../public/assets/icon/trashIcon.png'
import s from './formOtherInfo.module.scss'

interface FormState {
    item: { value: string }[]
    checkbox: string[]
    radio: string
}

export const FormOtherInfo = () => {

    const navigate = useNavigate()

    const { item, checkbox, radio } = useAppSelector(state => state.formData.dataForm3)

    const dispatch = useAppDispatch()

    const checkboxValue = [{ value: 1 }, { value: 2 }, { value: 3 }]
    const radioValue = [{ value: 1 }, { value: 2 }, { value: 3 }]

    const { register, control, handleSubmit, formState: { errors } } = useForm<FormState>({
        defaultValues: {
            checkbox: [...checkbox],
            radio: radio,
            item: [...item]
        },
    })
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'item',
        rules: { required: true }
    })

    const addInput = () => {
        append({ value: '' })
    }

    const removeInput = (index: number) => () => {
        remove(index)
    }

    const onSubmit: SubmitHandler<FormState> = (data: FormState) => {
        const { item } = data
        if (item.length > 0) {
            dispatch(addOtherInfo(data))
            navigate('/create/step-3')
        }
    }

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputWrapper}>
                <div className={s.formTitle}>Advantages</div>
                {fields.map((item, index) => (
                    <div key={item.id} className={s.labelWrapper}>
                        <div className={s.inputWrapper}>
                            <Controller
                                rules={{ required: true }}
                                render={({ field }) => <input className={s.input} {...field} />}
                                name={`item.${index}.value`}
                                control={control}
                            />
                            {errors.item && (
                                <div className={s.errorMessage}>Fill in all the fields</div>
                            )}
                        </div>
                        <img
                            className={s.trashIcon}
                            onClick={removeInput(index)}
                            src={TrashIcon}
                            alt='trash'
                        />
                    </div>
                ))}
                <Button type='button' className={s.addBtn} onClick={() => addInput()}>
                    +
                </Button>
            </div>
            <div className={s.checkboxWrapper}>
                <div className={s.formTitle}>Checkbox group</div>
                {checkboxValue.map(item => (
                    <label key={item.value} className={s.checkboxLabel}>
                        <input
                            {...register('checkbox')}
                            type='checkbox'
                            value={item.value}
                        />
                        <span>{item.value}</span>
                    </label>
                ))}
            </div>
            <div className={s.checkboxWrapper}>
                <div className={s.formTitle}>Radio group</div>
                {radioValue.map(item => (
                    <label key={item.value} className={s.checkboxLabel}>
                        <input {...register('radio')} type='radio' value={item.value} />
                        <span>{item.value}</span>
                    </label>
                ))}
            </div>
            <div className={s.btnWrapper}>
                <Button type='button' onClick={() => navigate(-1)}>Назад</Button>
                <Button type='submit'>Далее</Button>
            </div>
        </form>
    )
}
