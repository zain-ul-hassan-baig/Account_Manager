import React from "react";
import { useSelector } from "react-redux";

import { selectIncome, selectExpenses } from "./expenseTrackerSlice";

function IncomeExpense() {
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpenses);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
