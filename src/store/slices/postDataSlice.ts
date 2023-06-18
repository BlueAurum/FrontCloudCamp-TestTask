import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PostState } from './types'
import { api } from '../../shared/api'


const state: PostState = {
    isLoading: false,
    success: null,
    error: null
}

export const postData = createAsyncThunk('formSlice/postData', async (data: any) => {
    const response = await api.post('', data)
    console.log(response)
    return response
})


const postDataSlice = createSlice({
    name: 'postSlice',
    initialState: state,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(postData.pending, (state) => {
            state.isLoading = true
        }).addCase(postData.fulfilled, (state) => {
            state.isLoading = false
            state.success = true
        }).addCase(postData.rejected, (state) => {
            state.isLoading = false
            state.success = false
            state.error = 'ошибка'
        })
    },
})

export default postDataSlice.reducer