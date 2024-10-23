import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push({ amount: action.payload.amount, reason: action.payload.reason });
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
