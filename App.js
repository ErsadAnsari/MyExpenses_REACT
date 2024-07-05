import { useState } from "react";
import Expense from "./Components/ExpenseComponents/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
//import "bootstrap/dist/css/bootstrap.min.css";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
console.log(expenses)

function App() {
  const[allExpenses,setAllExpenses]=useState(expenses)
  const addExpenseHandler=(expense)=>
  {
    console.log("Data in App",expense);
    setAllExpenses((prev)=>{return [expense,...prev]})
  }
  console.log(allExpenses);
  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={allExpenses} />
    </div>
  );
}

export default App;
