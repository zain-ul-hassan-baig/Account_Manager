import React from "react";
import { useDispatch } from "react-redux";

import { addTransaction } from "./expenseTrackerSlice";

function AddTransaction() {
  const dispatch = useDispatch();

  /**
   * Handle submit event
   *
   * @param {import("react").FormEvent<HTMLFormElement>} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    /**
     * @type HTMLFormElement
     */

    const form = event.target;
    // Transform form values to object
    const transaction = Array.from(form.elements)
      .filter(element => element.hasAttribute("name"))
      .map(el => ({
        [el.name]: el.type === "number" ? parseFloat(el.value) : el.value
      }))
      .reduce((object, part) => ({ ...object, ...part }), {});
    dispatch(addTransaction(transaction));
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" name="text" placeholder="Enter text..." required />
      </div>
      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (negative - expense, positive - income)
        </label>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount..."
          required
          step="0.01"
          pattern="-?\\d+(:?\\.\\d{1,2})?"
        />
      </div>
      <button type="submit" className="btn">
        Add transaction
      </button>
    </form>
  );
}

export default AddTransaction;
