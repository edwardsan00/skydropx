import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from 'store'

export type UserState = {
  value: number
}

const initialState: UserState = {
  value: 0
}


export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await (await fetch('test')).json()
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {

      })
      .addCase(incrementAsync.fulfilled, (state, action) => {

      })
  },
})

export const { increment } = userSlice.actions

export default userSlice.reducer