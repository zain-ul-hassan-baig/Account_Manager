import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerReducer from "./features/expense-tracker/expenseTrackerSlice";

export default configureStore({
  reducer: {
    expenseTracker: expenseTrackerReducer
  }
});
