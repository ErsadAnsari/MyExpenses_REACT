import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem';
import "./Expense.css"
import Cards from '../UI/Cards';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("allcontents");

  const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
  };

  let filteredExpenses=props.items.filter((val)=>{return val.date.getFullYear().toString()===filteredYear});
  if (filteredYear == "allcontents") {
    filteredExpenses = props.items;
  }

  return (
    <>
      <Cards className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        {/* <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />{" "}
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />{" "}
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        /> */}
      </Cards>
    </>
  );
}

export default Expense