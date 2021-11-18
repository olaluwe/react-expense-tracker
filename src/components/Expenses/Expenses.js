import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expense = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expensesItem[0].title}
        amount={props.expensesItem[0].amount}
        date={props.expensesItem[0].date}
      />
      <ExpenseItem
        title={props.expensesItem[1].title}
        amount={props.expensesItem[1].amount}
        date={props.expensesItem[1].date}
      />
      <ExpenseItem
        title={props.expensesItem[2].title}
        amount={props.expensesItem[2].amount}
        date={props.expensesItem[2].date}
      />
      <ExpenseItem
        title={props.expensesItem[3].title}
        amount={props.expensesItem[3].amount}
        date={props.expensesItem[3].date}
      />
    </Card>
  );
};

export default Expense;
