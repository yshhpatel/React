import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: 0,
  reducers: {
    addMoney: (state, action) => state + action.payload,
    deductMoney: (state, action) => state - action.payload,
  },
});

export const { addMoney, deductMoney } = budgetSlice.actions;
export default budgetSlice.reducer;
