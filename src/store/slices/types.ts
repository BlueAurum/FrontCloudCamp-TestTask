export interface FormState1 {
    tel: string
    email: string
}

export interface FormState2 {
    nickName: string
    name: string
    surname: string
    sex: string
}

export interface FormState3 {
    item: { value: string }[]
    checkbox: string[]
    radio: string
}

export interface FormState {
    dataForm: FormState1
    dataForm2: FormState2
    dataForm3: FormState3
}

export interface PostState {
    isLoading: boolean
    success: boolean | null
    error?: string | null
}