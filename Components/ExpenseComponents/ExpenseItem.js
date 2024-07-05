import React, { useEffect, useState } from "react";
import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Cards className="expense-item">
        <div>
          <ExpenseDate date={props.date} />
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">₹{props.amount}</div>
        </div>
      </Cards>
    </li>
  );
};

export default ExpenseItem;
