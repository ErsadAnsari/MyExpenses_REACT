import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const[inputValues,setInputValues]=useState({"Title":"","Amount":"","Date":""});
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setInputValues((prev)=>{ return { ...prev, Title: e.target.value };})
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    //setInputValues({ ...inputValues, "Amount": e.target.value });

  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    //setInputValues({ ...inputValues, "Date": e.target.value });

  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseDataHandler(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

    console.log("Data in Expense form",expenseData);

  };
  const inputClear = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={inputClear}>Clear</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
