import { createSlice } from "@reduxjs/toolkit";

/**
 * Transaction object
 *
 * @typedef {object} Transaction
 * @property {number} id
 * @property {string} text
 * @property {number} amount
 */

/**
 * Reduce transactions to a total
 *
 * @param {number} sum
 * @param {Transaction} transaction
 * @returns {number} total
 */
const sumTransactions = (sum, transaction) => sum + transaction.amount;
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export const slice = createSlice({
  name: "tracker",
  /**
   * @type Array<Transaction>
   */
  initialState: {
    transactions: []
  },
  reducers: {
    /**
     * Add a transaction
     *
     * @param {object} state
     * @param {Array<Transaction>} state.transactions
     * @param {object} action
     * @param {string} action.type
     * @param {object} action.payload
     * @param {string} action.payload.text
     * @param {number} action.payload.amount
     */
    addTransaction(state, action) {
      state.transactions.push({
        ...action.payload,
        id: state.transactions.length + 1
      });
    },
    /**
     * Remove a transaction
     *
     * @param {object} state
     * @param {Array<Transaction>} state.transactions
     * @param {object} action
     * @param {string} action.type
     * @param {object} action.payload
     * @param {number} action.payload.id
     * @param {string} action.payload.text
     * @param {number} action.payload.amount
     */
    removeTransaction(state, action) {
      const { payload } = action;
      const id = state.transactions.findIndex(
        transaction => transaction.id === payload.id
      );
      state.transactions.splice(id, 1);
    }
  }
});
/**
 * Select transactions
 *
 * @param {object} state
 * @param {Array<Transaction>} state.transactions
 * @returns {Array<Transaction>}
 */
export const selectTransactions = state => state.expenseTracker.transactions;
/**
 * Select total of balance
 *
 * @param {object} state
 * @param {Array<Transaction>} state.transactions
 * @returns {string}
 */
export const selectTotal = state =>
  currencyFormatter.format(
    state.expenseTracker.transactions.reduce(sumTransactions, 0)
  );
/**
 * Select sum of incomes
 *
 * @param {object} state
 * @param {Array<Transaction>} state.transactions
 * @returns {string}
 */
export const selectIncome = state =>
  currencyFormatter.format(
    state.expenseTracker.transactions
      .filter(transaction => transaction.amount >= 0)
      .reduce(sumTransactions, 0)
  );
/**
 * Select sum of expenses
 *
 * @param {object} state
 * @param {Array<Transaction>} state.transactions
 * @returns {string}
 */
export const selectExpenses = state =>
  currencyFormatter.format(
    state.expenseTracker.transactions
      .filter(transaction => transaction.amount < 0)
      .reduce(sumTransactions, 0)
  );
export const { addTransaction, removeTransaction } = slice.actions;
export default slice.reducer;
