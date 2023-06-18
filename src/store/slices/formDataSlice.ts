import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
    FormState,
    FormState1,
    FormState2,
    FormState3,
} from './types'

const state: FormState = {
    dataForm: {
        tel: '',
        email: '',
    },
    dataForm2: {
        nickName: '',
        name: '',
        surname: '',
        sex: '',
    },
    dataForm3: {
        item: [{ value: '' }, { value: '' }, { value: '' }],
        checkbox: [],
        radio: '',
    }
}

const formDataSlice = createSlice({
    name: 'formSlice',
    initialState: state,
    reducers: {
        addMainInfo(state, action: PayloadAction<FormState1>) {
            state.dataForm.tel = action.payload.tel
            state.dataForm.email = action.payload.email
        },
        addBaseInfo(state, action: PayloadAction<FormState2>) {
            state.dataForm2.nickName = action.payload.nickName
            state.dataForm2.name = action.payload.name
            state.dataForm2.surname = action.payload.surname
            state.dataForm2.sex = action.payload.sex
        },
        addOtherInfo(state, action: PayloadAction<FormState3>) {
            state.dataForm3.item = action.payload.item
            state.dataForm3.checkbox = action.payload.checkbox
            state.dataForm3.radio = action.payload.radio
        },
        clearForm(state) {
            state.dataForm.tel = ''
            state.dataForm.email = ''
            state.dataForm2.nickName = ''
            state.dataForm2.name = ''
            state.dataForm2.surname = ''
            state.dataForm2.sex = ''
            state.dataForm3.item = [{ value: '' }, { value: '' }, { value: '' }]
            state.dataForm3.checkbox = []
            state.dataForm3.radio = ''
        }
    }
})

export const { addMainInfo, addBaseInfo, addOtherInfo, clearForm } = formDataSlice.actions

export default formDataSlice.reducer
