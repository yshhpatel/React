import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../Slices/Budget';
import expenseReducer from '../Slices/Expence';

const store = configureStore({
  reducer: {
    budget: budgetReducer,
    expense: expenseReducer,
  },
});

export default store;
