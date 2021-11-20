import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expensesItem.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expensesItem.map((filteredItem) => (
        <ExpenseItem
          key={filteredItem.id}
          title={filteredItem.title}
          amount={filteredItem.amount}
          date={filteredItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
