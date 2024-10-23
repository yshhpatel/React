import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMoney, deductMoney } from '../Slices/Budget';
import { addExpense } from '../Slices/Expence';

const Home = () => {
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.budget); // Consider adding an initial value or fallback if `budget` is undefined
  const expenses = useSelector((state) => state.expense); // Consider adding an initial value or fallback if `expenses` is undefined
  
  const [budgetAmount, setBudgetAmount] = useState(); // You may want to initialize this with 0 or an empty string to avoid uncontrolled input warnings
  const [expenseAmount, setExpenseAmount] = useState(); // Similar to budgetAmount, initialize to 0 or empty string for consistency
  const [reason, setReason] = useState(''); // Empty string is a good initial value here

  const handleAddMoney = () => {
    if (budgetAmount > 0) { // Add validation to prevent adding non-numeric or negative values
      dispatch(addMoney(Number(budgetAmount)));
      setBudgetAmount(''); // Clear input after adding money to improve UX
    }
  };

  const handleAddExpense = () => {
    if (expenseAmount > 0 && reason.trim() !== '') { // Validate both amount and reason to prevent invalid input
      dispatch(deductMoney(Number(expenseAmount)));
      dispatch(addExpense({ amount: Number(expenseAmount), reason }));
      setExpenseAmount(''); // Clear input after adding expense
      setReason(''); // Clear reason input for better UX
    } else {
      // Optional: Display a warning or error if inputs are invalid (e.g., expenseAmount is negative or reason is empty)
    }
  };

  return (
    <div className="money-manager">
      <div className="budget-section">
        <h1>Budget</h1>
        <h2>Total Budget: ₹{budget}</h2>
        
        <input 
          type="number" 
          value={budgetAmount} 
          onChange={(e) => setBudgetAmount(e.target.value)} 
          placeholder="Add money to budget"
        />
        <button onClick={handleAddMoney}>Add Money</button> {/* Optional: Disable button if budgetAmount is invalid */}
      </div>

      <div className="expense-section">
        <h1>Expense</h1>
        
        <input 
          type="number" 
          value={expenseAmount} 
          onChange={(e) => setExpenseAmount(e.target.value)} 
          placeholder="Enter expense amount"
        />
        <input 
          type="text" 
          value={reason} 
          onChange={(e) => setReason(e.target.value)} 
          placeholder="Reason"
        />
        <button onClick={handleAddExpense}>Add Expense</button> {/* Optional: Disable button if expenseAmount or reason is invalid */}

        <h3>Expenses List</h3>
        <ul>
          {expenses.length > 0 ? ( // Conditional rendering to show "No expenses" if the list is empty
            expenses.map((expense, index) => (
              <li key={index}>
                ₹{expense.amount} - {expense.reason}
              </li>
            ))
          ) : (
            <li>No expenses added yet</li> // Placeholder text when there are no expenses
          )}
        </ul>
      </div>
    </div>
  );
};

export default Home;
