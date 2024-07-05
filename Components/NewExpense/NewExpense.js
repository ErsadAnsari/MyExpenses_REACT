import React,{useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>
    {
        const expenseData={id:Date.now(),...enteredExpenseData};
        console.log("Data in New Expense", expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }
    // const startEditingHandler = () => {
    //   setIsEditing(true);
    // };

    const stopEditingHandler = () => {
      setIsEditing(false);
    };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={()=>setIsEditing(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDataHandler={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
          </div>
  );
};

export default NewExpense;
