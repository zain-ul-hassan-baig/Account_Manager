import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTransactions, removeTransaction } from "./expenseTrackerSlice";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
/**
 * Render a transaction
 *
 * @param {object} props
 * @param {object} props.transaction
 * @param {number} props.transaction.id
 * @param {string} props.transaction.text
 * @param {number} props.transaction.amount
 * @returns {JSX.Element}
 */
function Transaction(props) {
  const isNegative = props.transaction.amount < 0;
  const dispatch = useDispatch(removeTransaction(props.transaction));
  return (
    <li className={isNegative ? "minus" : "plus"}>
      {props.transaction.text}{" "}
      <span>
        {isNegative ? "" : "+"}
        {currencyFormatter.format(props.transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => dispatch(removeTransaction(props.transaction))}
      >
        x
      </button>
    </li>
  );
}

function Transactions() {
  const transactions = useSelector(selectTransactions);

  return (
    <ul className="list">
      {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}

export default Transactions;
