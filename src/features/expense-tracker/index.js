import React from "react";

import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import IncomeExpense from "./IncomeExpense";
import Transactions from "./Transactions";
import "./styles.css";

const ExpenseTracker = () => (
  <>
    <h2>Personal Account Manager</h2>
    <div className="container">
      <Balance />
      <IncomeExpense />
      <h3>History</h3>
      <Transactions />
      <h3>Add new transaction</h3>
      <AddTransaction />
    </div>
  </>
);

export default ExpenseTracker;
