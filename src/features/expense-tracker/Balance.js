import React from "react";
import { useSelector } from "react-redux";

import { selectTotal } from "./expenseTrackerSlice";

function Balance() {
  const total = useSelector(selectTotal);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{total}</h1>
    </>
  );
}

export default Balance;
