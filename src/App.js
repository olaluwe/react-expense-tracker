import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paer",
    amount: 94.12,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 7, 2),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 8, 22),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 8),
  },
];
const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenses) => {
    setExpenses((prevEnpenses) => {
      return [expenses, ...prevEnpenses];
    });
  };
  // old school
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expensesItem: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesItem={expenses} />
    </div>
  );
};

export default App;
