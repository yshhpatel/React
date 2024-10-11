import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
   data: 0,
    },
    reducers: {
        increment: (state) => {
            state.data += 1
        },
        decrement: (state) => {
            state.data -= 1
        },
      
    },
})

export const { increment, decrement,  } = counterSlice.actions

export default counterSlice.reducer
